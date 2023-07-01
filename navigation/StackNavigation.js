import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import { themeColors } from "../theme";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ProductScreen from "../screens/ProductScreen";
import SearchScreen from "../screens/SearchScreen";
import CartScreen from "../screens/CartScreen";
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="Main"
          options={{ headerShown: false }}
          component={HomeTabs}
        />
        <Stack.Screen
          name="Product"
          options={{ headerShown: false }}
          component={ProductScreen}
        />
        <Stack.Screen name="Search" options={{headerShown: false}} component={SearchScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 10,
          borderRadius: 10,
          marginHorizontal: 10,
          backgroundColor: themeColors.bgLight,
        },
        tabBarItemStyle: {},
      })}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="favourite" component={FavouriteScreen} />
      <Tab.Screen name="cart" component={CartScreen} />
    </Tab.Navigator>
  );
};

const menuIcons = (route, focused) => {
  let icon;
  if (route.name === "home") {
    icon = focused ? (
      <Entypo name="home" size={25} color="#d4a574" />
    ) : (
      <AntDesign name="home" size={25} color="white" />
    );
  } else if (route.name === "favourite") {
    icon = focused ? (
      <AntDesign name="heart" size={25} color="#d4a574" />
    ) : (
      <AntDesign name="hearto" size={25} color="white" />
    );
  } else if (route.name === "cart") {
    icon = focused ? (
      <Ionicons name="cart" size={25} color="#d4a574" />
    ) : (
      <Ionicons name="cart-outline" size={25} color="white" />
    );
  }
  let buttonClass = focused ? "white" : "";
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        padding: 8,
        backgroundColor: buttonClass,
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowColor: "black",
      }}
    >
      {icon}
    </View>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
