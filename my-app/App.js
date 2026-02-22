import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";
import SplashScreen from "./screens/SplashScreen";
import TripDetails from "./screens/tripdetails";
import InnovaScreen from "./screens/InnovaScreen";
import OwnerHomeScreen from "./screens/OwnerHomeScreen";
import BookingConfirmedScreen from "./screens/BookingConfirmedScreen";

const Stack = createNativeStackNavigator();

export default function App() {
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
        <Stack.Screen name="OwnerHomeScreen" component={OwnerHomeScreen} options={{ headerShown: false }} />
      
        <Stack.Screen name="BookingConfirmedScreen" component={BookingConfirmedScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
