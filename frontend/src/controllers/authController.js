import { authRequest } from "../services/apiService";
import { requestOTP, verifyOTPCode } from "../services/otpService";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginUser = async (email, password) => {
  const data = await authRequest("/login", { email, password });
  await AsyncStorage.setItem("userId", data.userId);
  return data;
};

export const startSignup = async (email) => {
  return await requestOTP(email);
};

export const completeSignup = async (username, email, password, otp) => {
  await verifyOTPCode(email, otp);
  return await authRequest("/signup", { name: username, email, password });
};