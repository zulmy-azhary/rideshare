import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { variants } from "../../styles/colors";
import { useState } from "react";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../../styles/globals";
import { useOnboarding } from "../../context/onboarding";

const onBoardingSteps = [
  {
    image: require("../../assets/images/onboarding-1.png"),
    title: "Anywhere you are",
    description:
      "Sell houses easily with the help of Listenoryx and to make this line big I am writing more.",
  },
  {
    image: require("../../assets/images/onboarding-2.png"),
    title: "At anytime",
    description:
      "Sell houses easily with the help of Listenoryx and to make this line big I am writing more.",
  },
  {
    image: require("../../assets/images/onboarding-3.png"),
    title: "Book your car",
    description:
      "Sell houses easily with the help of Listenoryx and to make this line big I am writing more.",
  },
];

export default function OnBoardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setData } = useOnboarding();
  const isLastScreen = currentIndex === onBoardingSteps.length - 1;
  const data = onBoardingSteps[currentIndex];

  const nextStep = () => {
    if (isLastScreen) {
      endOnBoardingScreen();
      return;
    }
    setCurrentIndex((prev) => prev + 1);
  };

  const endOnBoardingScreen = () => {
    setData();
    setCurrentIndex(0);
    router.replace("/");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.buttonSkip} onPress={endOnBoardingScreen}>
        <Text style={styles.buttonSkipText}>Skip</Text>
      </Pressable>
      <View style={styles.header}>
        <Image source={data.image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>
        </View>
      </View>
      <Pressable onPress={nextStep} style={styles.button}>
        {isLastScreen ? (
          <Text style={{ fontSize: 18 }}>Go</Text>
        ) : (
          <AntDesign name="arrowright" size={24} color="black" />
        )}
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  buttonSkip: {
    alignSelf: "flex-end",
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  buttonSkipText: {
    ...globalStyles.subheadLGRegular,
    color: variants.contentSecondary,
  },
  header: {
    rowGap: 44,
  },
  content: {
    rowGap: 12,
    alignItems: "center",
  },
  image: {
    height: 190,
    objectFit: "contain",
  },
  title: {
    ...globalStyles.titleMDMedium,
    color: variants.contentSecondary,
    textAlign: "center",
  },
  description: {
    ...globalStyles.subheadSMMedium,
    ...globalStyles.textGray400,
    textAlign: "center",
    maxWidth: "70%",
  },
  button: {
    backgroundColor: variants.primary,
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    borderRadius: 100,
  },
});
