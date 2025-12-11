import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/welcome");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-blue-950 justify-center items-center">
      <Image
        source={require("../assets/images/logo.png")}
        resizeMode="contain"
        className="w-48"
      />
    </SafeAreaView>
  );
}
