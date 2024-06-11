import React, { useCallback, useEffect, useState } from "react";
import { format } from "date-fns";
import { View, Text, Button, ScrollView } from "react-native";
import CustomDatePicker from "../components/CustomDatePicker";
import axios from "axios";
// // import { ToastContainer, toast } from "react-toastify";
// import TheaterShowtimes from "./TheaterShowtimes";
import CustomButton from "../components/CustomButton";
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
const theaters = [
  {
    id: 1,
    display_name: "Cr7 vấp cỏ",
  },
  {
    id: 2,
    display_name: "M10 vuốt râu",
  },
];

const BookingScreen = ({ navigation }) => {
  // const [theaters, setTheaters] = useState([]);
  // const [movies, setMovies] = useState([]);
  // const [showtimes, setShowtimes] = useState({});

  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedCinema, setSelectedCinema] = useState({});
  const [selectedMovie, setSelectedMovie] = useState({});

  // const isObjectEmpty = useCallback((object) => {
  //   return Object.keys(object).length === 0;
  // }, []);

  // useEffect(() => {
  //   const getShowtimes = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:8080/api/theaters/${selectedCinema.id}/movies/${selectedMovie.id}/showtimes`,
  //         {
  //           params: {
  //             request_time: selectedDate,
  //           },
  //         }
  //       );

  //       setShowtimes({
  //         theater: response.data.theater,
  //         showtimeList: response.data.showtime_list,
  //       });
  //     } catch (e) {
  //       if (!axios.isAxiosError(e)) {
  //         throw e;
  //       }
  //       toast.error("Có lỗi xảy ra khi fetch dữ liệu!");
  //       switch (e.response?.status) {
  //         case 401:
  //           toast.error("chua dang nhap may oi");
  //           break;
  //         default:
  //           console.error("Error fetching data:", e);
  //           throw e;
  //       }
  //     }
  //   };
  //   if (
  //     selectedDate &&
  //     selectedCinema &&
  //     !isObjectEmpty(selectedCinema) &&
  //     selectedMovie &&
  //     !isObjectEmpty(selectedMovie)
  //   ) {
  //     getShowtimes();
  //   }

  //   const getMovies = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8080/api/movies/current-showing?limit=5&offset=0"
  //       );

  //       setMovies(response.data.current_showing_movie_list);
  //     } catch (e) {
  //       if (!axios.isAxiosError(e)) {
  //         throw e;
  //       }
  //       toast.error("Có lỗi xảy ra khi fetch dữ liệu!");
  //       switch (e.response?.status) {
  //         case 401:
  //           toast.error("chua dang nhap may oi");
  //           break;
  //         default:
  //           console.error("Error fetching data:", e);
  //           throw e;
  //       }
  //     }
  //   };

  //   const getTheaters = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8080/api/theaters");
  //       setTheaters(response.data.theater_list);
  //     } catch (e) {
  //       if (!axios.isAxiosError(e)) {
  //         throw e;
  //       }
  //       toast.error("Có lỗi xảy ra khi fetch dữ liệu!");
  //       switch (e.response?.status) {
  //         case 401:
  //           toast.error("chua dang nhap may oi");
  //           break;
  //         default:
  //           console.error("Error fetching data:", e);
  //           throw e;
  //       }
  //     }
  //   };

  //   getMovies();
  //   getTheaters();
  // }, [selectedDate, selectedCinema, selectedMovie, isObjectEmpty]);

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "black",
          paddingBottom: 10,
        }}
      >
        Chọn Ngày
      </Text>
      <CustomDatePicker onSelect={setSelectedDate} />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
            paddingBottom: 10,
          }}
        >
          Chọn Rạp
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
            paddingBottom: 10,
          }}
        >
          Chọn Phim
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "column", gap: 10 }}>
          {theaters.map((theater) => (
            <CustomButton
              key={theater.id}
              title={theater.display_name}
              onPress={() =>
                setSelectedCinema({
                  id: theater.id,
                  displayName: theater.display_name,
                })
              }
            />
          ))}
          {!selectedCinema && <Text>Vui lòng chọn rạp</Text>}
        </View>

        <View style={{ flexDirection: "column", gap: 10 }}>
          {movies.map((movie) => (
            <CustomButton
              style={{ color: "red" }}
              key={movie.id}
              title={movie.title}
              onPress={() =>
                setSelectedMovie({ id: movie.id, title: movie.title })
              }
            />
          ))}
          {!selectedMovie && <Text>Vui lòng chọn phim</Text>}
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#dad2b4",
          flexWrap: "wrap",
          padding: 10,
          borderRadius: 4,
          marginTop: 20,
        }}
      >
        <Text>
          Ngày: {selectedDate ? format(selectedDate, "PPP") : "Chưa chọn"}
        </Text>
        <Text>Rạp: {selectedCinema.displayName}</Text>
        <Text>Phim: {selectedMovie.title}</Text>
      </View>
      {/* {showtimes && !isObjectEmpty(showtimes) && (
        <TheaterShowtimes
          theater={showtimes?.theater}
          showtimeList={showtimes?.showtimeList}
        />
      )} */}
    </ScrollView>
  );
};

export default BookingScreen;
