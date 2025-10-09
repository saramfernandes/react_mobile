import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MoedasScreen from "../screens/MoedasScreen";
import AcoesScreen from "../screens/AcoesScreen";
import CriptomoedasScreen from "../screens/CriptomoedasScreen";

const Tab = createBottomTabNavigator();

type IoniconsName = ComponentProps<typeof Ionicons>["name"];
const ICONS: Record<string, IoniconsName> = {
  Moedas: "cash",
  Ações: "trending-up",
  Criptomoedas: "logo-bitcoin",
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        headerStyle: {
          backgroundColor: "#118b2cff",
        },
        headerTintColor: "#fff",
        tabBarIcon: ({ color, size }) => {
          const iconName = ICONS[route.name] || "help-circle";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#118b2cff",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Moedas" component={MoedasScreen} />
      <Tab.Screen name="Ações" component={AcoesScreen} />
      <Tab.Screen name="Criptomoedas" component={CriptomoedasScreen} />
    </Tab.Navigator>
  );
}
