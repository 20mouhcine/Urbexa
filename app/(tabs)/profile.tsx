import React from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "../../lib/supabase";

export default function Profile() {
  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert("Erreur", error.message);
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center px-4">
        <Text className="text-2xl font-bold text-gray-800 mb-8">Mon Profil</Text>

        <Pressable
          onPress={handleSignOut}
          className="bg-red-500 px-8 py-4 rounded-full"
        >
          <Text className="text-white text-center text-lg font-semibold">
            Se déconnecter
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
