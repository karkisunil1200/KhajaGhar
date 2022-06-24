import { StatusBar, StyleSheet, Text, View, Platform } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
