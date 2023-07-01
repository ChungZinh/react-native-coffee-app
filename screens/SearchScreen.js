import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { themeColors } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { coffeeItems } from "../data";
import SearchResults from "../components/SearchResults";
const SearchScreen = () => {
  const [input, setInput] = useState("");
  const navigation = useNavigation();
  const data = coffeeItems;
  return (
    <View>
      <SafeAreaView>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ marginVertical: 10, marginLeft: 10 }}
        >
          <Ionicons name="arrow-back" size={28} color="#8c5319" />
        </Pressable>

        {/* SEARCH BAR */}
        <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 10}}>
          <Pressable
            onPress={() => navigation.navigate("Search")}
            style={{
              width: "90%",
              backgroundColor: "#e6e6e6",
              borderRadius: 30,
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 5,
            }}
          >
            <TextInput
              style={{ marginLeft: 10 , paddingRight: 20, paddingVertical: 10}}
              placeholder="enter coffee ... "
              value={input}
              onChangeText={(text) => setInput(text)}
            />
            {console.log(input)}
            <Pressable
              style={{
                borderRadius: "50%",
                backgroundColor: themeColors.bgLight,
                alignItems: 'center',
                justifyContent: 'center'
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

        {/* Product */}

        <SearchResults data={data} input={input} setInput={setInput} />
      </SafeAreaView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
