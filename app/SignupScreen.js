import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import Animated, {
  FadeIn,
  FadeInUp,
  FadeOut,
  FadeInDown,
  FadeInLeft,
  FadeInRight,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function SignUpScreen() {
  const navigation = useNavigation();
  return (
    <View className="bg-white h-full w-full">
      <Image
        className="h-full w-full absolute"
        source={require("../assets/background.png")}
      />

      {/* lights */}
      <View className="flex-row justify-around w-full absolute">
        <Animated.Image
          entering={FadeInRight.delay(200).duration(1000).springify()}
          className="h-[160] w-[160] top-[50]"
          source={require("../assets/target.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          className="h-[190] w-[130]"
          source={require("../assets/light.png")}
        />
      </View>

      {/* title and form  */}
      <View className="h-full w-full flex justify-around pt-40 pb-10">
        {/* title */}
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            className="text-white font-bold tracking-wider text-5xl"
          >
            Deadline.ai
          </Animated.Text>
        </View>

        {/* Form */}
        <View className="flex items-center mx-4 space-y-4">
          {/* Email Field */}
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full"
          >
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </Animated.View>

          {/* Password Field */}
          <Animated.View
            entering={FadeInDown.duration(200).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full mb-3"
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </Animated.View>

          {/* Login Button */}
          <Animated.View
            entering={FadeInDown.duration(400).springify()}
            className="w-full"
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}
              className="w-full bg-sky-400 p-3 rounded-2xl mb-3"
            >
              <Text className="text-xl font-bold text-white text-center">
                {" "}
                Login{" "}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
