import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { typographies } from "./typographies";

export const globalStyles = StyleSheet.create({
  ...typographies,
  ...colors,
});
