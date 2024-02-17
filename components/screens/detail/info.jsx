import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";

function ProductInfo({ screen }) {
  const navigation = useNavigation();

  function handlePress(name) {
    navigation.navigate(name);
  }

  return (
    <View style={styles.container_detail}>
      <View style={styles.element_detail}>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container_detail: {
    position: "absolute",
    top: "85%",
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "white",
    paddingTop: 20,
    paddingBottom: 40,
    borderColor: "#f6f6f6",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    // height: "100%",
  },
  element_detail: {
    marginBottom: 20,
    flexDirection: "col",
    justifyContent: "space-around",
  },
  element_icon: {
    borderRadius: 20,
    overflowY: "hidden",
    padding: 10,
    // backgroundColor: "black",
    // opacity: 0.5,
  },
  icon: {
    width: 35,
    height: 35,
    // zIndex: 10,
  },
});

export default ProductInfo;
