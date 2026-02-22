import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";

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
  const [fontsLoaded] = useFonts({
    "Serpentine-Bold": require("../assets/Serpentine-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
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
        <Text style={styles.greeting}>Hi, Owner !</Text>

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
            <View key={vehicle.id} style={styles.cardOuterShadow}>
              <View style={styles.vehicleCard}>
                {/* LEFT SIDE */}
                <View style={styles.vehicleCardLeft}>
                  {vehicle.title.match(/^\d+ seater$/i) ? (
                    <>
                      <Text style={styles.vehicleTitleNum}>
                        {vehicle.title.split(" ")[0]}
                      </Text>
                      <Text style={styles.vehicleTitleText}>
                        {vehicle.title.split(" ")[1]}
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
                    }}
                  >
                    <View style={styles.arrowCircle}>
                      <Feather
                        name="arrow-right"
                        size={22}
                        color="#B45A2B"
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                {/* RIGHT SIDE IMAGE */}
                <Image
                  source={vehicle.image}
                  style={styles.vehicleImage}
                  resizeMode="contain"
                />
              </View>
            </View>
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

  greeting: {
    color: "#fff",
    fontSize: 32,
    marginTop: 38,
    marginLeft: 24,
    marginBottom: 18,
    fontFamily: "Serpentine-Bold",
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
    justifyContent: "space-between", // 🔥 pushes image fully right
    height: 150,
    paddingLeft: 22,
    
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
  },

  vehicleTitleText: {
    color: "#fff",
    fontSize: 28,
    fontFamily: "Serpentine-Bold",
  },

  vehicleImage: {
    width: 170,
    height: 100,
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