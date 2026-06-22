import React from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

const VEHICLES = [
  {
    id: 1,
    title: "17 seater",
    image: require("../assets/17seater.png"),
  },
  {
    id: 2,
    title: "11 seater",
    image: require("../assets/11seater.png"),
  },
  {
    id: 3,
    title: "Innova",
    image: require("../assets/innova.png"),
  },
];

export default function HomeScreen({ navigation }) {
  const [fontsLoaded, fontError] = useFonts({
    "Serpentine-Bold": require("../assets/Serpentine-Bold.ttf"),
  });

  React.useEffect(() => {
    console.log("Fonts Loaded:", fontsLoaded);
    console.log("Font Error:", fontError);
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={{ color: "#fff", marginTop: 10 }}>Loading Fonts...</Text>
      </View>
    );
  }

  return (
    <LinearGradient
      colors={["#D15C2D", "#82391c", "#6B2F17", "#6B2F17"]}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.greeting}>HI, OWNER !</Text>

        <View style={styles.logoCircleWrapper}>
          <Image
            source={require("../assets/main.png")}
            style={styles.logoCircle}
            resizeMode="contain"
          />
        </View>

        <View style={{ height: 18 }} />

        <View style={styles.cardsBgWrapper}>
          {VEHICLES.map((vehicle) => (
            <TouchableOpacity
  key={vehicle.id}
  style={styles.cardOuterShadow}
  activeOpacity={0.85}
  onPress={() => {
    if (vehicle.title === "Innova") {
      navigation.navigate("InnovaScreen");
    }

    if (vehicle.title === "17 seater") {
      navigation.navigate("SeventeenSeaterScreen");
    }

    if (vehicle.title === "11 seater") {
      navigation.navigate("ElevenSeaterScreen");
    }
  }}
>
  <View style={styles.vehicleCard}>

                <View style={styles.vehicleCardLeft}>
                  {vehicle.title.match(/^\d+seater$/i) ? (
                    <>
                      <Text style={styles.vehicleTitleNum}>
                        {vehicle.title.split(/[\s-]+/)[0].toUpperCase()}
                      </Text>

                      <Text style={styles.vehicleTitleText}>
                        {vehicle.title.split(/[\s-]+/)[1]}
                      </Text>
                    </>
                  ) : (
                    <Text style={styles.vehicleTitleText}>
                      {vehicle.title}
                    </Text>
                  )}

                  <TouchableOpacity
                    style={styles.arrowBtn}
                    onPress={() => {
                      if (vehicle.title === "Innova") {
                        navigation.navigate("InnovaScreen");
                      }
                      if (vehicle.title === "17 seater") {
                        navigation.navigate("SeventeenSeaterScreen");
                      }
                      if (vehicle.title === "11 seater") {
                        navigation.navigate("ElevenSeaterScreen");
                      }
                    }}
                  >
                    <View style={styles.arrowCircle}>
                      <Feather name="arrow-right" size={22} color="#B45A2B" />
                    </View>
                  </TouchableOpacity>
                </View>

                <Image
                  source={vehicle.image}
                  style={styles.vehicleImage}
                  resizeMode="contain"
                />
              </View>
</TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6B2F17",
  },

  greeting: {
    color: "#fff",
    fontSize: 32,
    marginTop: 38,
    marginLeft: 24,
    marginBottom: 18,
    fontFamily: "Serpentine-Bold",
    fontWeight: "bold",
  },

  logoCircleWrapper: {
    alignItems: "center",
    marginBottom: 10,
  },

  logoCircle: {
    width: 250,
    height: 250,
    borderRadius: 250,
  },

  cardsBgWrapper: {
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingTop: 18,
    paddingBottom: 10,
  },

  cardOuterShadow: {
    marginHorizontal: 16,
    marginBottom: 28,
    borderRadius: 28,
    elevation: 4,
  },

  vehicleCard: {
    backgroundColor: "#D15C2D",
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 150,
    paddingLeft: 22,
    overflow: "hidden",
  },

  vehicleCardLeft: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  vehicleTitleNum: {
    color: "#fff",
    fontSize: 36,
    fontFamily: "Serpentine-Bold",
    fontWeight: "bold",
  
  },

  vehicleTitleText: {
    color: "#fff",
    fontSize: 28,
    fontFamily: "Serpentine-Bold",
      fontWeight: "bold",
  },

  vehicleImage: {
    width: 170,
    height: 100,
    margin: -10,
    resizeMode: "contain",
  },

  arrowBtn: {
    marginTop: 10,
  },

  arrowCircle: {
    backgroundColor: "#F8F1E6",
    borderRadius: 20,
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
  },
});
