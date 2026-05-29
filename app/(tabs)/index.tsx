import { Feather } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function TripDetailsScreen() {
  const [owner, setOwner] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="chevron-left" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Trip Details</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Owner Name */}
        <Text style={styles.label}>Owner Name</Text>
        <View style={styles.inputBox}>
          <Picker
            selectedValue={owner}
            onValueChange={(itemValue) => setOwner(itemValue)}
            dropdownIconColor="#A34823"
          >
            <Picker.Item label="" value="" />
            <Picker.Item label="Owner 1" value="owner1" />
            <Picker.Item label="Owner 2" value="owner2" />
            <Picker.Item label="Owner 3" value="owner3" />
            <Picker.Item label="Owner 4" value="owner4" />
            <Picker.Item label="Owner 5" value="owner5" />
          </Picker>
        </View>

        {/* Customer Name */}
        <Text style={styles.label}>Customer Name</Text>
        <TextInput
          placeholder="Enter Customer Name"
          placeholderTextColor="#B99688"
          style={styles.input}
          value={customerName}
          onChangeText={setCustomerName}
        />

        {/* Mobile Number */}
        <Text style={styles.label}>Mobile Number</Text>
        <View style={styles.mobileContainer}>
          <Text style={styles.countryCode}>+91</Text>
          <TextInput
            placeholder="Enter Mobile Number"
            placeholderTextColor="#B99688"
            style={styles.mobileInput}
            keyboardType="phone-pad"
            value={mobile}
            onChangeText={setMobile}
          />
        </View>

        <TextInput
          placeholder="Enter Pickup Address"
          placeholderTextColor="#B99688"
          style={[
            styles.input,
            {
              height: 90,
              textAlign: "right",
              textAlignVertical: "top",
            },
          ]}
          multiline
          value={address}
          onChangeText={setAddress}
        />

        {/* Trip */}
        <Text style={styles.label}>Trip</Text>
        <View style={styles.tripRow}>
          <TextInput
            placeholder="From"
            placeholderTextColor="#B99688"
            style={styles.tripInput}
            value={fromLocation}
            onChangeText={setFromLocation}
          />

          <Feather name="repeat" size={22} color="#D15C2D" />

          <TextInput
            placeholder="To"
            placeholderTextColor="#B99688"
            style={styles.tripInput}
            value={toLocation}
            onChangeText={setToLocation}
          />
        </View>

        {/* Trip Beginning */}
        <Text style={styles.label}>Trip Beginning</Text>
        <TouchableOpacity style={styles.dateBox}>
          <Feather name="calendar" size={20} color="#444" />
          <Text style={styles.dateText}>Select Date And Time</Text>
        </TouchableOpacity>

        {/* Trip End */}
        <Text style={styles.label}>Trip End</Text>
        <TouchableOpacity style={styles.dateBox}>
          <Feather name="calendar" size={20} color="#444" />
          <Text style={styles.dateText}>Select Date And Time</Text>
        </TouchableOpacity>

        {/* Confirm Button */}
        <TouchableOpacity style={styles.buttonWrapper}>
          <LinearGradient
            colors={["#6B2F17", "#D15C2D"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Confirm Booking</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFF9",
  },
  header: {
    backgroundColor: "#D15C2D",
    paddingTop: 55,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
    marginLeft: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: 20,
    marginHorizontal: 20,
    color: "#000",
  },
  input: {
    backgroundColor: "#FBF6E9",
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 14,
    fontSize: 16,
    color: "#000",
  },
  inputBox: {
    backgroundColor: "#FBF6E9",
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 15,
    overflow: "hidden",
  },
  mobileContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FBF6E9",
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  countryCode: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: "500",
  },
  mobileInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 14,
    color: "#000",
  },
  tripRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 10,
  },
  tripInput: {
    backgroundColor: "#FBF6E9",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 14,
    width: "42%",
    fontSize: 16,
  },
  dateBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1b1400",
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 16,
  },
  dateText: {
    marginLeft: 10,
    color: "#B08974",
    fontSize: 16,
  },
  buttonWrapper: {
    marginHorizontal: 20,
    marginVertical: 30,
  },
  button: {
    borderRadius: 30,
    paddingVertical: 18,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
