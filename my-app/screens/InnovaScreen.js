import { Feather } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import { useMemo, useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Calendar } from "react-native-calendars";

const BOOKED_DATES = [
  { id: 1, date: "2026-01-08", label: "Wed, January 8", route: "TVM - KTYM" },
  { id: 2, date: "2026-01-09", label: "Thu, January 9", route: "KYKM - CHN" },
  { id: 3, date: "2026-01-20", label: "Tue, January 20", route: "KYKM - CHN" },
  { id: 4, date: "2026-01-24", label: "Sat, January 24", route: "KYKM - CHN" },
  { id: 5, date: "2026-01-28", label: "Thu, January 28", route: "KYKM - CHN" },
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function InnovaScreen({ navigation }) {
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedYear, setSelectedYear] = useState(2026);
  const [showPicker, setShowPicker] = useState(false);

  const currentDate = `${selectedYear}-${String(selectedMonth + 1).padStart(2, "0")}-01`;
  const minDateOfMonth = `${selectedYear}-${String(selectedMonth + 1).padStart(2, "0")}-01`;
  const maxDateOfMonth = `${selectedYear}-${String(selectedMonth + 1).padStart(2, "0")}-${new Date(selectedYear, selectedMonth + 1, 0).getDate()}`;

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

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 180,
        }}
      >
        {/* Calendar */}
        <View style={styles.calendarWrapper}>
          <View style={styles.monthYearHeaderContainer}>
            <TouchableOpacity
              style={styles.arrowButton}
              onPress={() => {
                let newMonth = selectedMonth - 1;
                let newYear = selectedYear;
                if (newMonth < 0) {
                  newMonth = 11;
                  newYear = selectedYear - 1;
                }
                setSelectedMonth(newMonth);
                setSelectedYear(newYear);
              }}
            >
              <Feather name="chevron-left" size={24} color="#D15C2D" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.monthYearOverlay}
              onPress={() => setShowPicker(true)}
              activeOpacity={0.7}
            >
              <Text style={styles.monthYearOverlayText}>
                {MONTHS[selectedMonth]} {selectedYear}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.arrowButton}
              onPress={() => {
                let newMonth = selectedMonth + 1;
                let newYear = selectedYear;
                if (newMonth > 11) {
                  newMonth = 0;
                  newYear = selectedYear + 1;
                }
                setSelectedMonth(newMonth);
                setSelectedYear(newYear);
              }}
            >
              <Feather name="chevron-right" size={24} color="#D15C2D" />
            </TouchableOpacity>
          </View>

          <Calendar
            current={currentDate}
            minDate={minDateOfMonth}
            maxDate={maxDateOfMonth}
            markedDates={markedDates}
            enableSwipeMonths={false}
            hideExtraDays={false}
            hideArrows={true}
            renderHeader={() => null}
            theme={{
              backgroundColor: "#F8F1E6",
              calendarBackground: "#F8F1E6",
              dayTextColor: "#6B2F17",
              textDisabledColor: "#6B2F17",
              todayTextColor: "#D15C2D",
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

      {/* Month/Year Picker Modal */}
      <Modal
        visible={showPicker}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowPicker(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Month & Year</Text>
              <TouchableOpacity onPress={() => setShowPicker(false)}>
                <Feather name="x" size={28} color="#6B2F17" />
              </TouchableOpacity>
            </View>

            <View style={styles.pickerContainer}>
              <View style={styles.pickerColumn}>
                <Text style={styles.pickerLabel}>Month</Text>
                <Picker
                  selectedValue={selectedMonth}
                  onValueChange={(itemValue) => setSelectedMonth(itemValue)}
                  style={styles.picker}
                >
                  {MONTHS.map((month, index) => (
                    <Picker.Item key={index} label={month} value={index} />
                  ))}
                </Picker>
              </View>

              <View style={styles.pickerColumn}>
                <Text style={styles.pickerLabel}>Year</Text>
                <Picker
                  selectedValue={selectedYear}
                  onValueChange={(itemValue) => setSelectedYear(itemValue)}
                  style={styles.picker}
                >
                  {[2024, 2025, 2026, 2027, 2028].map((year) => (
                    <Picker.Item key={year} label={String(year)} value={year} />
                  ))}
                </Picker>
              </View>
            </View>

            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => setShowPicker(false)}
            >
              <LinearGradient
                colors={["#6B2F17", "#D15C2D"]}
                style={styles.confirmButtonGradient}
              >
                <Text style={styles.confirmButtonText}>Done</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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

  monthYearOverlay: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  monthYearHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  arrowButton: {
    padding: 8,
  },

  monthYearOverlayText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6B2F17",
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

  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "flex-end",
  },

  modalContent: {
    backgroundColor: "#FFF9F3",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingBottom: 40,
  },

  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#6B2F17",
  },

  pickerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 24,
  },

  pickerColumn: {
    flex: 1,
    alignItems: "center",
  },

  pickerLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6B2F17",
    marginBottom: 8,
  },

  picker: {
    height: 200,
    width: "100%",
  },

  confirmButton: {
    marginTop: 16,
  },

  confirmButtonGradient: {
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },

  confirmButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
