import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import axios from "axios";
import openai from "openai";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [mappedTasks, setMappedTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.1.8:8000/weekly_tasks/")
      .then((response) => {
        const json = response.data;
        const mappedTasks = json.map((task) => ({
          id: task.id,
          title: task.summary,
          description: task.description,
          dueDate: new Date(task.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          completed: task.status === 1 ? true : false,
        }));
        setMappedTasks(mappedTasks);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  async function getResponse(userMessage) {
    const openaiInstance = new openai({
      apiKey: "ENTER_YOUR_API_KEY", // Provide your OpenAI API key here
    });

    const contextTasks = mappedTasks.map((task) => ({
      title: task.title,
      dueDate: task.dueDate,
    }));

    const completion = await openaiInstance.chat.completions.create({
      messages: [
        ...contextTasks.map((task) => ({
          role: "system",
          content: `Task: ${task.title}, Due: ${task.dueDate}`,
        })),
        { role: "user", content: userMessage },
      ],
      model: "gpt-3.5-turbo",
    });
    console.log(completion.choices[0].message.content);
    return completion.choices[0].message.content;
  }

  const sendMessage = async () => {
    if (message.trim() === "") return;
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: Math.random().toString(), text: message, sender: true },
    ]);

    const response = await getResponse(message);
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: Math.random().toString(), text: response, sender: false },
    ]);
    setMessage("");
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender ? styles.senderMessage : styles.receiverMessage,
      ]}
    >
      <TouchableWithoutFeedback>
        <Text style={styles.messageText}>{item.text}</Text>
      </TouchableWithoutFeedback>
    </View>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 300}
      >
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={{ flex: 1 }}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  messageContainer: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    maxWidth: "80%",
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 20,
  },
  sendButton: {
    marginLeft: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#007AFF",
    borderRadius: 20,
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  senderMessage: {
    backgroundColor: "#ADD8E6",
    alignSelf: "flex-end",
  },
  receiverMessage: {
    backgroundColor: "#E8E8E8",
    alignSelf: "flex-start",
  },
});
