import React from "react";
import DetailScreen from "./src/screens/DetailScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { Parametros } from "./src/tipos/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator<Parametros>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="tela1">
        <Stack.Screen
          name="tela1"
          component={HomeScreen}
          options={{ title: "Tela principal" }}
        />
        <Stack.Screen
          name="tela2"
          component={DetailScreen}
          options={{ title: "Detalhes" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
