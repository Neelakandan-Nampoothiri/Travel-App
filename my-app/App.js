import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import SplashScreen from "./screens/SplashScreen";
import TripDetails from "./screens/tripdetails";
import InnovaScreen from "./screens/InnovaScreen";
import SeventeenSeaterScreen from "./screens/SeventeenSeaterScreen";
import ElevenSeaterScreen from "./screens/ElevenSeaterScreen";
import OwnerHomeScreen from "./screens/OwnerHomeScreen";
import BookingConfirmedScreen from "./screens/BookingConfirmedScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Serpentine-Bold": require("./assets/Serpentine-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      console.log("Global loaded fonts:", Font.getLoadedFonts ? Object.keys(Font.getLoadedFonts()) : "Unknown");
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="TripDetails" component={TripDetails} options={{ headerShown: false }} />
        <Stack.Screen name="InnovaScreen" component={InnovaScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SeventeenSeaterScreen" component={SeventeenSeaterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ElevenSeaterScreen" component={ElevenSeaterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OwnerHomeScreen" component={OwnerHomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BookingConfirmedScreen" component={BookingConfirmedScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
