import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const CoffeeCard = ({ item }) => {
    const navigation = useNavigation();
  return (
    <View
      style={{
        borderRadius: 40,
        backgroundColor: themeColors.bgDark,
        height: 280,
        width: 220,
      }}
    >
      <View
        style={{
          shadowColor: "black",
          shadowRadius: 30,
          shadowOffset: { width: 0, height: 20 },
          shadowOpacity: 0.8,
          justifyContent: "center",
          alignItems: "center",
          marginTop: -35,
        }}
      >
        <Image source={item.image} style={{ width: 100, height: 100 }} />
      </View>

      <View style={{ marginTop: 18 }}>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            marginLeft: 20,
          }}
        >
          {item.name}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          backgroundColor: "rgba(255,255,255,0.2)",
          alignItems: "center",
          width: 60,
          justifyContent: "center",
          padding: 6,
          borderRadius: 20,
          marginLeft: 20,
          marginVertical: 10,
        }}
      >
        <AntDesign name="star" size={15} color="white" />
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            marginLeft: 8,
          }}
        >
          {item.stars}
        </Text>
      </View>

      <View style={{ flexDirection: "row", marginLeft: 20 }}>
        <Text style={{ color: "white", opacity: 0.5 }}>Volume </Text>
        <Text style={{ fontWeight: "bold", color: "white" }}>
          {item.volume}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
          marginTop: 30,
          alignItems: "center",
          shadowColor: themeColors.bgDark,
          shadowRadius: 25, 
          shadowOffset: {width: 0 , height: 40},
          shadowOpacity: 0.8,
          backgroundColor: themeColors.bgDark,
            borderRadius: 40
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          $ {item.price}
        </Text>
        <TouchableOpacity
        onPress={() => navigation.navigate('Product', {...item})}
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 45,
            height: 45,
            borderRadius: "50%",
            backgroundColor: "white",
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 20},
            shadowOpacity: 0.8,
            shadowRadius: 30
          }}
        >
          <Text style={{ fontSize: 25, color: themeColors.bgDark }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CoffeeCard;

const styles = StyleSheet.create({});
