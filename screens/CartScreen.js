import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { themeColors } from "../theme";

const CartScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        position: "relative",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar />
      <Image
        style={{ position: "absolute", top: -280, opacity: 0.1 }}
        source={require("../assets/img/beansBackground1.png")}
      />
      <Text style={{ fontSize: 30, color: themeColors.text, padding: 20 }}>
        CartScreen
      </Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
