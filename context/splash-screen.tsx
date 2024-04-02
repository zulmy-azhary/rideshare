import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useOnboarding } from "./onboarding";

SplashScreen.preventAutoHideAsync();

export const SplashScreenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_Regular: require("../assets/fonts/Poppins-Regular.ttf"),
    Poppins_Medium: require("../assets/fonts/Poppins-Medium.ttf"),
    Poppins_SemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    Poppins_Bold: require("../assets/fonts/Poppins-Bold.ttf"),
    Poppins_ExtraBold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
  });
  const { isLoading } = useOnboarding();

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if ((!fontsLoaded && !fontError) || isLoading) {
    return null;
  }

  return children;
};
