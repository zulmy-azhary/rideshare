import { Pressable, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useOnboarding } from "../../context/onboarding";
import MapView from "react-native-maps";
import { variants } from "../../styles/colors";

export default function Home() {
  const { clearData } = useOnboarding();

  return (
    <View style={styles.container}>
      <MapView style={styles.map} showsUserLocation followsUserLocation></MapView>
      <Pressable style={styles.button} onPress={clearData}>
        <Text>Clear Storage</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "space-between",
  },
  map: {
    width: "100%",
    height: "80%",
  },
  button: {
    backgroundColor: variants.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 6,
  },
});
