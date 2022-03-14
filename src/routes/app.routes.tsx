import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";

import Shows from "../screens/Shows";
import ShowDetails from "../screens/ShowDetails";
import EpisodeDetails from "../screens/EpisodeDetails";

import { Icon } from "./styles";

const AuthRoutes: React.FC = () => {
  const AppStack = createNativeStackNavigator();
  const AppTabs = createBottomTabNavigator();

  function ShowsStackScreen() {
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
      </AppTabs.Navigator>
    );
  }

  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Shows" component={ShowsStackScreen} />
      <AppStack.Screen name="ShowDetails" component={ShowDetails} />
      <AppStack.Screen name="EpisodeDetails" component={EpisodeDetails} />
    </AppStack.Navigator>
  );
};

export default AuthRoutes;
