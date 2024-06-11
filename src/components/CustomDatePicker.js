import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { format, startOfDay, addDays, isSameDay } from "date-fns";

const CustomDatePicker = ({ onSelect }) => {
  const today = startOfDay(new Date());
  const days = Array.from({ length: 7 }).map((_, index) =>
    addDays(today, index)
  );

  const handleSelect = (day) => {
    let timestamp;
    if (isSameDay(day, new Date())) {
      timestamp = Date.now();
    } else {
      timestamp = day.getTime();
    }
    onSelect(timestamp);
  };

  return (
    <View style={styles.container}>
      {days.map((day) => (
        <TouchableOpacity
          key={day.getTime()}
          onPress={() => handleSelect(day)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{format(day, "EEEE, dd/MM")}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  button: {
    width: "22%", // Adjust width to fit 4 items per row
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#dad2b4",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CustomDatePicker;
