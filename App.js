import React from "react";
import { StyleSheet, View } from "react-native";
import Product from "./src/screens/ReviewScreen";
import LoginScreen from "./src/screens/LoginScreen";
import GeneratePasswordScreen from "./src/screens/GeneratePasswordScreen";
import CartScreen from "./src/screens/CartScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginScreen /> */}
      {/* <Product /> */}
      {/* <GeneratePasswordScreen /> */}
      <CartScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#F0C200",
    backgroundColor: "#23235B",
  },
});
