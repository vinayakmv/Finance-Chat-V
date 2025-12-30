import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { completeSignup } from "../../src/controllers/authController";

export default function OtpScreen() {
  const { email, username, password } = useLocalSearchParams();
  const [otp, setOtp] = useState("");

  const verifyOtpPress = async () => {
    try {
      await completeSignup(username, email, password, otp);
      router.replace("/(auth)/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <TextInput placeholder="Enter OTP" style={styles.input} keyboardType="number-pad" onChangeText={setOtp} />
      <TouchableOpacity style={styles.button} onPress={verifyOtpPress}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 22, textAlign: "center", marginBottom: 20 },
  input: { borderWidth: 1, padding: 12, marginBottom: 15, borderRadius: 15 },
  button: { backgroundColor: "#307df7", padding: 14, borderRadius: 15 },
  buttonText: { color: "#fff", textAlign: "center" }
});