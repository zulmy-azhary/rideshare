import { generateColors } from "../lib/utils";
import type { Color } from "../types/colors";

export const palettes = {
  teal: {
    50: "#E2F5ED",
    100: "#B9E5D1",
    200: "#8AD4B5",
    300: "#52C498",
    400: "#08B783",
    500: "#00AA6D",
    600: "#009B62",
    700: "#008955",
    800: "#007848",
    900: "#005932",
  },
  yellow: {
    50: "#FFFDE7",
    100: "#FFF9C4",
    200: "#FFF59D",
    300: "#FEF075",
    400: "#FCEB55",
    500: "#FAE635",
    600: "#FDD835",
    700: "#FBC02D",
    800: "#F9A825",
    900: "#F57F17",
  },
  red: {
    50: "#FFEBEE",
    100: "#FFCDD2",
    200: "#EF9A9A",
    300: "#E57373",
    400: "#EF5350",
    500: "#F44336",
    600: "#E53935",
    700: "#D32F2F",
    800: "#C62828",
    900: "#B71B1C",
  },
  green: {
    50: "#E8F5E9",
    100: "#C8E6C9",
    200: "#A5D6A7",
    300: "#81C784",
    400: "#66BB6B",
    500: "#4CAF51",
    600: "#43A048",
    700: "#388E3D",
    800: "#2E7D33",
    900: "#1B5E21",
  },
  secondary: {
    50: "#FCE2E7",
    100: "#F8B7C3",
    200: "#F2899B",
    300: "#EA5A75",
    400: "#E23859",
    500: "#DB1740",
    600: "#CB103F",
    700: "#B7083C",
    800: "#A4003B",
    900: "#820036",
  },
  gray: {
    50: "#F7F7F7",
    100: "#E8E8E8",
    200: "#D0D0D0",
    300: "#B8B8B8",
    400: "#A0A0A0",
    500: "#898989",
    600: "#717171",
    700: "#5A5A5A",
    800: "#414141",
    900: "#2A2A2A",
  },
  shades: {
    white: "#FFFFFF",
    black: "#000000",
  },
} as const satisfies Color.Palettes;

// Generate text, background, and border colors
const textColors = generateColors(palettes, "text");
const backgroundColors = generateColors(palettes, "background");
const borderColors = generateColors(palettes, "border");

export const colors = {
  ...textColors,
  ...backgroundColors,
  ...borderColors,
}

// Color variants
export const variants = {
  // Base colors
  primary: palettes.teal[400],
  secondary: palettes.secondary[700],
  accent: palettes.teal[400],
  warning: "#FB8A00",
  error: palettes.red[500],
  info: palettes.gray[300],
  success: palettes.green[600],
  // Texts and icons
  contentTertiary: palettes.gray[700],
  contentPrimary: palettes.gray[900],
  contentSecondary: palettes.gray[800],
  contentDisabled: palettes.gray[300],
};