import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { loginUser } from "../../src/controllers/authController";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginPress = async () => {
    try {
      await loginUser(email, password);
      router.replace("/(tabs)/communityScreen");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}><Text style={styles.headerText}>Hike</Text></View>
      <View style={styles.content}>
        <Text style={styles.title}>Finance Community</Text>
        <TextInput placeholder="Email" style={styles.input} onChangeText={setEmail} autoCapitalize="none" />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} onChangeText={setPassword} />
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/(auth)/signUpScreen")}>
          <Text style={styles.link}>New user? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F7FA" },
  header: { backgroundColor: "#011f4b", height: 120, paddingHorizontal: 20, justifyContent: "center" },
  headerText: { color: "#ffffff", fontSize: 36, fontWeight: "bold" },
  content: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 26, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  input: { backgroundColor: "#fff", padding: 15, borderRadius: 8, marginBottom: 15 },
  button: { backgroundColor: "#005b96", padding: 15, borderRadius: 8 },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  link: { marginTop: 20, textAlign: "center", color: "#0A1F44" }
});