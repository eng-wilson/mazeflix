import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";

import Shows from "../screens/Shows";
import ShowDetails from "../screens/ShowDetails";
import EpisodeDetails from "../screens/EpisodeDetails";

import People from "../screens/People";

import { Icon } from "./styles";

const AuthRoutes: React.FC = () => {
  const AppStack = createNativeStackNavigator();
  const AppTabs = createBottomTabNavigator();

  function TabScreens() {
    const theme = useTheme();

    return (
      <AppTabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let focusedRoute;

            if (route.name === "Shows") {
              iconName = "tv";
              focusedRoute = focused && "tv";
            }

            if (route.name === "People") {
              iconName = "user";
              focusedRoute = focused && "user";
            }

            return (
              <Icon
                name={iconName}
                focused={focusedRoute === iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: theme.colors.yellow300,
          tabBarInactiveTintColor: theme.colors.gray400,
          tabBarStyle: { backgroundColor: theme.colors.gray900 },
          headerShown: false,
        })}
      >
        <AppTabs.Screen name="Shows" component={Shows} />
        <AppTabs.Screen name="People" component={People} />
      </AppTabs.Navigator>
    );
  }

  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Tabs" component={TabScreens} />
      <AppStack.Screen name="ShowDetails" component={ShowDetails} />
      <AppStack.Screen name="EpisodeDetails" component={EpisodeDetails} />
    </AppStack.Navigator>
  );
};

export default AuthRoutes;
