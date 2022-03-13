import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import defaultTheme from "./src/styles/theme/default";

import Routes from "./src/routes";

import "./src/config/ReactotronConfig";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
