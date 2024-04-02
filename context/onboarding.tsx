import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type OnboardingCtx = {
  isOnboardingCompleted: boolean;
  isLoading: boolean;
  setOnboardingCompleted: React.Dispatch<
    React.SetStateAction<OnboardingCtx["isOnboardingCompleted"]>
  >;
  setData: () => Promise<void>;
  clearData: () => Promise<void>;
};

const OnboardingContext = createContext<OnboardingCtx>({} as OnboardingCtx);

export const OnboardingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOnboardingCompleted, setOnboardingCompleted] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const setData = async () => {
    setOnboardingCompleted(true);
    await AsyncStorage.setItem("isOnboardingCompleted", "true");
  };

  const getData = async () => {
    try {
      setLoading(true);
      const value = await AsyncStorage.getItem("isOnboardingCompleted");
      setOnboardingCompleted(!!value);
    } catch (error) {
      return null;
    } finally {
      setLoading(false);
    }
  };

  const clearData = async () => {
    setOnboardingCompleted(false);
    await AsyncStorage.clear();
  };

  useEffect(() => {
    getData();
  }, [isOnboardingCompleted]);

  return (
    <OnboardingContext.Provider
      value={{ isOnboardingCompleted, setOnboardingCompleted, setData, clearData, isLoading }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => useContext(OnboardingContext);
