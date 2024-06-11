import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function TheaterShowtimes({ showtimeList, theater }) {
  const navigateToShowtime = (showtimeId) => {
    // Implement your navigation logic here
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#FFD700",
          borderRadius: 4,
          padding: 20,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          {showtimeList[0].movie_name}
        </Text>
      </View>
      <View style={{ marginTop: 20, marginLeft: 20 }}>
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>
          {theater.display_name}
        </Text>
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>
          {showtimeList[0].movie_type.display_name}
        </Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          {showtimeList.map((showtime, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigateToShowtime(showtime.id)}
              style={{
                width: 115,
                height: 100,
                marginHorizontal: 5,
                alignItems: "center",
                justifyContent: "center",
                borderColor: "#eee",
                borderWidth: 1,
                borderRadius: 4,
              }}
            >
              <Text
                style={{ fontSize: 12, fontWeight: "bold", paddingVertical: 5 }}
              >
                {showtime.screen_name}
              </Text>
              <Text
                style={{ fontSize: 14, fontWeight: "bold", paddingVertical: 5 }}
              >
                {showtime.time_start}-{showtime.time_end}
              </Text>
              <Text
                style={{ fontSize: 12, fontWeight: "400", textAlign: "center" }}
              >
                {showtime.seat_count} Ghế ngồi
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

export default TheaterShowtimes;
