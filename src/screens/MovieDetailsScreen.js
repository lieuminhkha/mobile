import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import WebView from "react-native-webview";
import YoutubePlayer from "react-native-youtube-iframe";

const { width } = Dimensions.get("window");
const movies = [
  {
    id: 1,
    duration: 136,
    release_date: "12-06-2024",
    title: "Lật mặt 7",
    poster: "../../assets/latmat.jpg",
  },
  {
    id: 2,
    duration: 136,
    release_date: "12-06-2024",
    title: "Lật mặt 6",
    poster: "../../assets/latmat.jpg",
  },
  {
    id: 3,
    duration: 136,
    release_date: "12-06-2024",
    title: "Lật mặt 5",
    poster: "../../assets/latmat.jpg",
  },
  {
    id: 4,
    duration: 136,
    release_date: "12-06-2024",
    title: "Lật mặt 4",
    poster: "../../assets/latmat.jpg",
  },
  {
    id: 5,
    duration: 136,
    release_date: "12-06-2024",
    title: "Lật mặt 3",
    poster: "../../assets/latmat.jpg",
  },
];
const MovieDetailsScreen = ({ route }) => {
  const { movieId } = route.params;
  const movie = movies.find((movie) => movie.id === movieId);

  return (
    <ScrollView style={styles.container}>
      {movie && (
        <View>
          <View style={styles.videoContainer}>
            <YoutubePlayer
              height={200}
              play={true}
              videoId={"d1ZHdosjNX8"}
              style={styles.video}
            />
          </View>
          <View style={styles.movieInfoContainer}>
            <Image
              source={require("../../assets/latmat.jpg")}
              style={styles.posterImage}
            />
            <View style={styles.movieInfo}>
              <Text style={styles.title}>{movie.title}</Text>
              <Text style={styles.text}>
                Ngày phát hành: {movie.release_date}
              </Text>
              <Text style={styles.text}>
                Thông tin cơ bản: {movie.duration} phút
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.buttonText}>Đặt vé</Text>
          </TouchableOpacity>
          <Text style={styles.summaryTitle}>Tóm tắt</Text>
          <Text style={styles.summaryText}>Mô tả chi tiết của phim</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  videoContainer: {
    width: "100%",
    paddingBottom: 10,
  },
  movieInfoContainer: {
    flexDirection: "row",
    alignItems: "start",
    padding: 10,
  },
  posterImage: {
    width: 100,
    height: 150,
    resizeMode: "cover",
    marginRight: 10,
  },
  movieInfo: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  bookButton: {
    width: 200,
    height: 50,
    backgroundColor: "#231f20",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: "#cdc197",
    fontWeight: "bold",
    fontSize: 16,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
  summaryText: {
    fontSize: 16,
    margin: 10,
  },
  carouselImage: {
    width: 200,
    height: 150,
    resizeMode: "cover",
    marginRight: 10,
  },
});

export default MovieDetailsScreen;
