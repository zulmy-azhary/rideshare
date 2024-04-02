import { Slot } from "expo-router";
import { OnboardingProvider } from "../context/onboarding";
import { SplashScreenProvider } from "../context/splash-screen";

export default function RootLayout() {
  return (
    <OnboardingProvider>
      <SplashScreenProvider>
        <Slot />
      </SplashScreenProvider>
    </OnboardingProvider>
  );
}
