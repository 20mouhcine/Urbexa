import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center px-4">
        <Text className="text-3xl font-bold text-gray-800 mb-4">
          Bienvenue sur Urbexa
        </Text>
        <Text className="text-gray-600 text-center">
          Vous êtes connecté avec succès !
        </Text>
      </View>
    </SafeAreaView>
  );
}
