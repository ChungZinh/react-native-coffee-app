import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { coffeeItems } from "../data";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

const SearchResults = ({ data, input, setInput }) => {
  const navigation = useNavigation();
  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (item.name.toLowerCase().includes(input.toLowerCase())) {
            if (input === "") {
              return null;
            }
            return (
              <Pressable
                onPress={() => navigation.navigate("Product", { ...item })}
              >
                <View
                  style={{
                    padding: 10,
                    height: 100,
                    overflow: "hidden",
                    backgroundColor: themeColors.bgLight,
                    marginBottom: 18,
                    borderRadius: 10,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      shadowColor: "black",
                      shadowRadius: 30,
                      shadowOffset: { width: 0, height: 10 },
                      shadowOpacity: 0.8,
                      marginRight: 14,
                    }}
                  >
                    <Image
                      source={item.image}
                      style={{
                        width: 80,
                        height: 80,
                      }}
                    />
                  </View>

                  <View>
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 16,
                      }}
                    >
                      {item.name}
                    </Text>

                    <Text
                      style={{
                        color: "white",
                        fontWeight: "200",
                        fontSize: 16,
                        marginTop: 10,
                      }}
                    >
                      ${item.price}
                    </Text>
                  </View>
                </View>
              </Pressable>
            );
          }
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({});
