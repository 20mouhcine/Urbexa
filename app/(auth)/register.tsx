import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "../../lib/supabase";

export default function Register() {

    const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [loading, setLoading] = useState(false);
        const [confirmPassword, setConfirmPassword] = useState("");
    async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    if (error) Alert.alert(error.message)
    setLoading(false)
console.log("session:", session);
  }
  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 items-center pt-10">
            <Image
              source={require("../../assets/images/logo_black.png")}
              className="w-44 h-44"
            />
            <Text className="text-4xl text-gray-600 font-bold mb-12">
              Créez votre compte
            </Text>

            <View className="w-full items-center gap-6 px-4">
              <View className="flex-row items-center w-full border border-gray-300 rounded-md px-4 py-2">
                <Feather name="mail" size={20} color="gray" />
                <TextInput
                  className="flex-1 h-10 text-base ml-3"
                  placeholder="Entrez votre email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholderTextColor="#9CA3AF"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
              </View>
              <View className="flex-row items-center w-full border border-gray-300 rounded-md px-4 py-2">
                <Feather name="lock" size={20} color="gray" />
                <TextInput
                  className="flex-1 h-10 text-base ml-3"
                  placeholder="Mot de passe"
                  autoCapitalize="none"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
              </View>
              <View className="flex-row items-center w-full border border-gray-300 rounded-md px-4 py-2">
                <Feather name="lock" size={20} color="gray" />
                <TextInput
                  className="flex-1 h-10 text-base ml-3"
                  placeholder="Confirmez votre mot de passe"
                  secureTextEntry={true}
                  autoCapitalize="none"
                  placeholderTextColor="#9CA3AF"
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                />
              </View>
              
              

              <Pressable className="mt-10 bg-blue-600 px-10 py-6 rounded-full" onPress={()=>signUpWithEmail()} disabled={loading}>
                <Text className="text-white text-center text-lg font-semibold">Créez votre compte</Text>
              </Pressable>
              <View className="w-full flex-row justify-center mt-48">
                <Text className="text-gray-600">
                  Vous avez déjà un compte ?
                  <Link href="/login" className="text-blue-600 underline">Connectez-vous</Link>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
