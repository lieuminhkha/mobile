import React, { useEffect, useState, useContext } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  StatusBar,
  FlatList,
} from "react-native";
import MovieList from "../components/MovieList";
import { Colors } from "../../assets/theme";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import SlideShow from "../components/SlideShow";
import Carousel from "react-native-snap-carousel";
// import PopularMovieCard from "../components/PopularMovieCard";
// import ComingSoonMovieCard from "../components/ComingSoonMovieCard";
// import MovieCard from "../components/MovieCard";

const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const [nowShowingMoviesList, setNowShowingMoviesList] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoaded(false);
      try {
        console.log(1);
      } catch (error) {
        console.log("Error in FetchData HomeScreen:", error);
      } finally {
        setLoaded(true);
      }
    }

    fetchData();
  }, []);

  if (!loaded) {
    return (
      <ScrollView
        style={{ ...styles.container, paddingTop: insets.top }}
        bounces={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <StatusBar hidden />

        <View style={styles.loadingContainer}>
          <ActivityIndicator size={"large"} color={Colors.mainColor} />
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={{ ...styles.container, paddingTop: insets.top }}>
      <StatusBar hidden />
      <View style={styles.HeaderContainer}>
        <View style={styles.icon}>
          <Text style={{ ...styles.subText, paddingTop: 20 }}>Chào mừng</Text>
          <Text
            style={{
              ...styles.text,

              paddingVertical: 10,
            }}
          >
            Đặt vé xem phim với giá rẻ nhất tại đây
          </Text>
        </View>
        <View>
          <Image
            source={require("../../assets/1676599526.jpg")}
            style={{ borderRadius: 10, width: 50, height: 50 }}
          />
        </View>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Hot</Text>
        <SlideShow />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Phim đang chiếu</Text>
        <MovieList navigation={navigation} />
      </View>
      <View style={styles.footer}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
  },
  icon: {
    width: "75%",
  },
  loadingContainer: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  HeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#dad2b4",
  },
  genresSection: {
    marginLeft: 10,
    marginTop: 20,
  },
  genresButton: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "gray",
  },
  text: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
  subText: {
    fontFamily: "nunito-regular",
    fontSize: 16,
    color: "gray",
  },
  footer: {
    height: 80,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    padding: 20,
  },
});

export default HomeScreen;
