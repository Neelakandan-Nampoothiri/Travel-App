import React from "react";
import { Image, StatusBar, StyleSheet, View } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image
        source={require("../assets/images/Group 1.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F1EC", // matches your light background
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 280,
    height: 150,
  },
});
