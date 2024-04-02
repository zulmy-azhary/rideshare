import { Redirect, Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useOnboarding } from "../../context/onboarding";

export default function Root() {
  const { isOnboardingCompleted } = useOnboarding();

  if (!isOnboardingCompleted) return <Redirect href="/onboarding" />;

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false, animation: "fade" }}>
        <Stack.Screen name="index" />
      </Stack>
    </SafeAreaProvider>
  );
}
