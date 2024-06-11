import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import { View, StatusBar, ActivityIndicator } from "react-native";
import { Colors } from "./assets/theme";

import * as Font from "expo-font";
import TabNavigator from "./src/navigators/TabNavigator";
import MovieDetailsScreen from "./src/screens/MovieDetailsScreen";
import SeatBookingScreen from "./src/screens/SeatBookingScreen";
import OrderScreen from "./src/screens/OrderScreen";
const Stack = createNativeStackNavigator();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  async function prepare() {
    try {
      await Font.loadAsync({
        "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
        "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setAppIsReady(true);
    }
  }

  useEffect(() => {
    prepare();
  }, []);

  if (!appIsReady)
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StatusBar style="auto" />
      </View>
    );
  else
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="TabNavigator"
        >
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{ animation: "default" }}
          />

          <Stack.Screen
            name="MovieDetails"
            component={MovieDetailsScreen}
            options={{ animation: "slide_from_right" }}
          />
          {/* <Stack.Screen
            name="SeatBooking"
            component={SeatBookingScreen}
            options={{ animation: "slide_from_bottom" }}
          />
          <Stack.Screen
            name="Order"
            component={OrderScreen}
            options={{ animation: "slide_from_right" }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default App;
