import React from "react";
import { StyleSheet, View } from "react-native";
import Product from "./src/component/ReviewScreen";
import LoginScreen from "./src/component/LoginScreen";
import GeneratePasswordScreen from "./src/component/GeneratePasswordScreen";
import CartScreen from "./src/component/CartScreen";

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
