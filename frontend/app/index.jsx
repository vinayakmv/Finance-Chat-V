import { router } from "expo-router";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

export default function Index() {
  const scale = useSharedValue(1);
  scale.value = withRepeat(withTiming(1.05, { duration: 3000 }), -1, true);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bigCircleTop, animatedStyle]} />
      <Animated.View style={[styles.bigCircleBottom, animatedStyle]} />
      <Text style={styles.title}>Welcome</Text>
      <TouchableOpacity style={styles.nextButton} onPress={() => router.push("/(auth)/login")}>
        <Text style={styles.arrow}>→</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF7F2", justifyContent: "center", alignItems: "center" },
  bigCircleTop: { position: "absolute", width: width * 1.1, height: width * 1.1, borderRadius: width, backgroundColor: "#03396c", top: -width * 0.6, right: -width * 0.4 },
  bigCircleBottom: { position: "absolute", width: width * 1.2, height: width * 1.2, borderRadius: width, backgroundColor: "#03396c", bottom: -width * 0.7, left: -width * 0.4 },
  title: { fontSize: 34, fontWeight: "700", color: "#FFFFFF", position: "absolute", bottom: 120, left: 30 },
  nextButton: { position: "absolute", bottom: 60, right: 30, width: 56, height: 56, borderRadius: 28, backgroundColor: "#6497b1", justifyContent: "center", alignItems: "center" },
  arrow: { fontSize: 26, color: "#FFFFFF" },
});