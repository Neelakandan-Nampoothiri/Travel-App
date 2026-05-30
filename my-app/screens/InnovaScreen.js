import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useMemo } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Calendar } from "react-native-calendars";

const BOOKED_DATES = [
  { id: 1, date: "2026-01-08", label: "Wed, January 8", route: "TVM - KTYM" },
  { id: 2, date: "2026-01-09", label: "Thu, January 9", route: "KYKM - CHN" },
  { id: 3, date: "2026-01-20", label: "Tue, January 20", route: "KYKM - CHN" },
  { id: 4, date: "2026-01-24", label: "Sat, January 24", route: "KYKM - CHN" },
  { id: 5, date: "2026-01-28", label: "Thu, January 28", route: "KYKM - CHN" },
];

export default function InnovaScreen({ navigation }) {
  const markedDates = useMemo(() => {
  const marks = {};

  BOOKED_DATES.forEach((item) => {
    marks[item.date] = {
      selected: true,
      selectedColor: "#B45A2B",
      selectedTextColor: "#FFFFFF",
      disableTouchEvent: true,
    };
  });

  return marks;
}, []);
  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient colors={["#D15C2D", "#6B2F17"]} style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Innova</Text>
      </LinearGradient>

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Calendar */}
        <View style={styles.calendarWrapper}>
   <Calendar
  current={"2026-01-01"}
  minDate={"2026-01-01"}
  maxDate={"2026-01-31"}
  markedDates={markedDates}

  enableSwipeMonths={true}
  hideExtraDays={false}

  theme={{
    backgroundColor: "#F8F1E6",
    calendarBackground: "#F8F1E6",

    dayTextColor: "#6B2F17",
    textDisabledColor: "#6B2F17",

    todayTextColor: "#D15C2D",
    monthTextColor: "#6B2F17",
    arrowColor: "#B08974",

    selectedDayBackgroundColor: "#B45A2B",
    selectedDayTextColor: "#FFFFFF",
  }}

  style={{
    borderRadius: 24,
  }}
/>
        </View>

        <Text style={styles.bookedTitle}>Booked Dates</Text>

        {BOOKED_DATES.map((item) => (
          <LinearGradient
            key={item.id}
            colors={["#D15C2D", "#D15C2D"]}
            style={styles.bookedCard}
          >
            <View style={{ flex: 1 }}>
              <Text style={styles.bookedDate}>{item.label}</Text>
              <Text style={styles.bookedRoute}>{item.route}</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Booked</Text>
            </View>
          </LinearGradient>
        ))}
      </ScrollView>

      {/* Book Now */}
      <View style={styles.sticky}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("TripDetails");
          }}
        >
          <LinearGradient
            colors={["#6B2F17", "#D15C2D"]}
            style={styles.bookNow}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.bookNowText}>Book Now</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF9F3", paddingBottom: 25 },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 55,
    paddingBottom: 18,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    marginLeft: 10,
  },

  calendarWrapper: {
    marginTop: 11,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.99,
    shadowRadius: 9,
    elevation: 9,
    backgroundColor: "#F8F1E6",
    borderRadius: 24,
    padding: 16,
    width: "92%",
    elevation: 4,
  },

  bookedTitle: {
    fontSize: 24,
    fontWeight: "700",
    margin: 20,
  },

  bookedCard: {
    marginHorizontal: 16,
    marginBottom: 14,
    borderRadius: 18,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
  },

  bookedDate: { color: "#fff", fontSize: 20, fontWeight: "490" },
  bookedRoute: { color: "#F7DBD8" },

  badge: {
    backgroundColor: "#F7DBD8",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  badgeText: {
    color: "#751517",
    fontWeight: "500",
  },

  sticky: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
  },

  bookNow: {
    borderRadius: 16,
    height: 56,

    justifyContent: "center",
    alignItems: "center",
  },
  bookNowText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },
});
