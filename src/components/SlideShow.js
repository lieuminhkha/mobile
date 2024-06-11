import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Swiper from "react-native-swiper";

const SlideShow = () => (
  <View style={styles.container}>
    <Swiper
      autoplay
      autoplayTimeout={3} // 3 seconds per slide
      showsPagination={true}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
    >
      <View style={styles.slide}>
        <Image
          source={require("../../assets/slide_show_1.jpeg")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("../../assets/slide_show_2.jpeg")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("../../assets/slide_show_3.jpeg")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("../../assets/slide_show_4.jpeg")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("../../assets/slide_show_5.jpeg")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </Swiper>
  </View>
);

const styles = StyleSheet.create({
  title: {
    color: "red",
    fontSize: 24,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  container: {
    backgroundColor: "transparent",
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: "90%",
  },
  dotStyle: {
    backgroundColor: "gray",
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  activeDotStyle: {
    backgroundColor: "#fff",
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});

export default SlideShow;
