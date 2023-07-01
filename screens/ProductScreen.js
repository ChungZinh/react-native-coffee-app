import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { themeColors } from "../theme";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const ProductScreen = (props) => {
  const item = props.route.params;
  const [size, setSize] = useState("small");
  const [count, setCount] = useState(1);
  const navigation = useNavigation();
  const [like, setLike] = useState(false)
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Image
        style={{
          width: "100%",
          height: 180,
          position: "absolute",
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
        source={require("../assets/img/beansBackground2.png")}
      />
      <SafeAreaView>
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back-circle-outline"
              size={40}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setLike(!like)}>
            <Ionicons name="heart-circle-outline" size={40} color={like?'red':'white'} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignItems: "center",
            shadowColor: themeColors.bgDark,
            shadowRadius: 30,
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.8,
          }}
        >
          <Image style={{ width: 200, height: 200 }} source={item.image} />
        </View>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: themeColors.bgLight,
              alignItems: "center",
              width: 60,
              justifyContent: "center",
              padding: 6,
              borderRadius: 20,
              marginLeft: 10,
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

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: themeColors.text,
                fontWeight: "bold",
                fontSize: 23,
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                color: themeColors.bgLight,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              $ {item.price}
            </Text>
          </View>

          <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Coffee size</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => setSize("small")}
                style={{
                  width: 90,
                  paddingVertical: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    size == "small" ? themeColors.bgLight : "rgba(0,0,0,0.15)",
                  borderRadius: 20,
                }}
              >
                <Text>Small</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setSize("medium")}
                style={{
                  width: 90,
                  paddingVertical: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    size == "medium" ? themeColors.bgLight : "rgba(0,0,0,0.15)",
                  borderRadius: 20,
                }}
              >
                <Text>Medium</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setSize("large")}
                style={{
                  width: 90,
                  paddingVertical: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    size == "large" ? themeColors.bgLight : "rgba(0,0,0,0.15)",
                  borderRadius: 20,
                }}
              >
                <Text>Large</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "500", marginBottom: 5 }}>
              About
            </Text>
            <Text>{item.desc}</Text>
          </View>

          <View
            style={{
              marginTop: 20,
              paddingHorizontal: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 15, opacity: 0.5 }}>Volume</Text>
              <Text style={{ fontWeight: "600" }}> {item.volume}</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: 100,
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderWidth: 1,
                borderColor: themeColors.bgDark,
                borderRadius: 20,
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => setCount(count - 1)}>
                <Text
                  style={{
                    fontSize: 20,
                    color: themeColors.bgDark,
                    opacity: 0.5,
                  }}
                >
                  -
                </Text>
              </TouchableOpacity>
              <Text>{count}</Text>
              <TouchableOpacity onPress={() => setCount(count + 1)}>
                <Text
                  style={{
                    fontSize: 20,
                    color: themeColors.bgDark,
                    opacity: 0.5,
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              padding: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                borderWidth: 1,
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
              }}
            >
              <SimpleLineIcons name="handbag" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: themeColors.bgDark,
                marginLeft: 10,
                borderRadius: 25,
                padding: 15,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Buy now
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
