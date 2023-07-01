import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { themeColors } from "../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { categories, coffeeItems } from "../data";
import Carousel from "react-native-snap-carousel";
import CoffeeCard from "../components/CoffeeCard";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState(1);
  const [moveCategories, setMoveCategories] = useState(false);
  return (
    <View style={{ flex: 1, position: "relative", backgroundColor: "white" }}>
      <StatusBar />
      <Image
        style={{ position: "absolute", top: -280, opacity: 0.1 }}
        source={require("../assets/img/beansBackground1.png")}
      />
      <SafeAreaView />

      {/* Header */}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 5,
        }}
      >
        <Pressable>
          <Ionicons name="person-circle-outline" size={35} color="#8c5319" />
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="location" size={24} color="#8c5319" />
          <Text style={{ color: themeColors.text, fontWeight: "bold" }}>
            Ho Chi Minh, VN
          </Text>
        </View>
        <Pressable>
          <MaterialCommunityIcons
            name="bell-outline"
            size={30}
            color="#8c5319"
          />
        </Pressable>
      </View>

      {/* Search bar */}

      <View
        style={{
          width: "100%",
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={() => navigation.navigate('Search')}
          style=
          {{
            width: "90%",
            backgroundColor: "#e6e6e6",
            borderRadius: 30,
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 5,
          }}
          >
          <TextInput placeholder="enter coffee ... " />
          <Pressable
            style={{
              borderRadius: "50%",
              backgroundColor: themeColors.bgLight,
            }}
          >
            <Feather
              style={{ padding: 8 }}
              name="search"
              size={20}
              color="white"
            />
          </Pressable>
        </Pressable>
      </View>

      {/* Categories */}

      <View style={{ padding: 8, marginTop: 10 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({ item }) => {
            let isActive = item.id === active;
            let activeTextClass = isActive ? "white" : themeColors.text;
            return (
              <TouchableOpacity
                onPress={() => setActive(item.id)}
                style={{
                  padding: 8,
                  backgroundColor: isActive
                    ? themeColors.bgLight
                    : "rgba(0,0,0,0.07)",
                  marginRight: 10,
                  borderRadius: 20,
                  paddingVertical: 10,
                }}
              >
                <Text style={{ color: activeTextClass, fontWeight: "500" }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* Coffee Card */}

      <View style={{ marginTop: 60 }}>
        <Carousel
          containerCustomStyle={{ overflow: "visible" }}
          data={coffeeItems}
          renderItem={({ item }) => <CoffeeCard item={item} />}
          firstItem={1}
          inactiveSlideOpacity={0.75}
          sliderWidth={375}
          loop={true}
          itemWidth={240}
          slideStyle={{ display: "flex", alignItems: "center" }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
