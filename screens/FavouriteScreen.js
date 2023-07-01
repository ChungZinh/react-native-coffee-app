import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { themeColors } from "../theme";

const FavouriteScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar style="light" />
      <Image
        style={{
          position: 'absolute',
          width: "100%",
          height: '100%',
          opacity: 0.1
        }}
        source={require("../assets/img/beansBackground2.png")}
      />
      <Text style={{fontSize: 30, color: themeColors.text, padding: 20 }}>FavouriteScreen</Text>
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({});
