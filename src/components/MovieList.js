import { useCallback, useEffect, useState } from "react";
import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import axios from "axios";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import Carousel from "react-native-snap-carousel";
const { width, height } = Dimensions.get("window");
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
const MovieList = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getMovies = async () => {
      // try {
      //     const response = await axios.get('http://localhost:8080/api/movies/current-showing?limit=5&offset=0');
      //     setMovies(response.data.current_showing_movie_list);
      // } catch (e) {
      //     if (!axios.isAxiosError(e)) {
      //         throw e;
      //     }
      //     toast.error('Có lỗi xảy ra khi fetch dữ liệu!');
      //     switch (e.response?.status) {
      //         case 401:
      //             toast.error("chua dang nhap may oi");
      //             break;
      //         default:
      //             console.error('Error fetching data:', e);
      //             throw e;
      //     }
      // }
    };

    getMovies();
  }, []); //
  return (
    <View style={styles.container}>
      <Carousel
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.push("MovieDetails", { movieId: item.id });
                }}
              >
                <Image
                  source={require("../../assets/latmat.jpg")}
                  style={{ width: "100%", height: 300 }}
                />
                {index === currentIndex ? (
                  <View style={{ paddingVertical: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      {item.title}
                    </Text>
                    <Text>{`${item.duration} phút | ${item.release_date}`}</Text>
                  </View>
                ) : (
                  ""
                )}
              </TouchableOpacity>
            </View>
          );
        }}
        layout={"stack"}
        inactiveSlideScale={0.85}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.8}
        onSnapToItem={(index) => setCurrentIndex(index)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MovieList;
