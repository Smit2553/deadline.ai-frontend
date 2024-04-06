import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TaskScreen from "./app/home.js";
import GroupScreen from "./app/lfg.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskDetails from "./app/taskdetails.js";
import SignupScreen from "./app/SignupScreen.js";
import AssistantPage from "./app/assistant.js";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Tasks") {
            iconName = "list-outline";
          } else if (route.name === "Looking for Group") {
            iconName = "people-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Tasks" component={TaskScreen} />
      <Tab.Screen name="Looking for Group" component={GroupScreen} />
      <Tab.Screen name="Assistant" component={AssistantPage} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sign Up">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Task Details"
          component={TaskDetails}
          options={({ route }) => ({ title: route.params.title })}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
