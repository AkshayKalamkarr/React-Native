
import { View, Text, Image } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-black">

      <Text className="text-3xl font-bold text-white">
        Hello World
      </Text>

      <Text className="mt-3 text-lg text-blue-400">
        React Native + Expo + NativeWind
      </Text>

      {/* <Image
        source={require("../assets/icon.png")}
        className="w-36 h-24"
        resizeMode="contain"
      /> */}
      

    </View>
  );
}
