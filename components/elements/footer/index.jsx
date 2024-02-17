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

function FooterComponent({ screen }) {
  const navigation = useNavigation();

  function handlePress(name) {
    navigation.navigate(name);
  }

  return (
    <View style={styles.container_footer}>
      <View style={styles.element_footer}>
        <TouchableOpacity
          onPress={() => handlePress("home")}
          style={[
            styles.element_icon,
            { backgroundColor: screen === "home" ? "black" : "white" },
          ]}
        >
          <Image
            source={
              screen === "home"
                ? require("../../../assets/icons/home_white.png")
                : require("../../../assets/icons/home_black.png")
            }
            style={[styles.icon]}
          />
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          onPress={() => handlePress("cart")}
          style={[
            styles.element_icon,
            { backgroundColor: screen === "cart" ? "black" : "white" },
          ]}
        >
          <Image
            source={
              screen === "cart"
                ? require("../../../assets/icons/shop_white.png")
                : require("../../../assets/icons/shop_black.png")
            }
            style={styles.icon}
          />
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          onPress={() => handlePress("notification")}
          style={[
            styles.element_icon,
            { backgroundColor: screen === "notification" ? "black" : "white" },
          ]}
        >
          <Image
            source={
              screen === "notification"
                ? require("../../../assets/icons/notification_white.png")
                : require("../../../assets/icons/notification_black.png")
            }
            style={styles.icon}
          />
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity style={styles.element_icon}>
          <Image
            source={require("../../../assets/icons/profile_black.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container_footer: {
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
  element_footer: {
    marginBottom: 20,
    flexDirection: "row",
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

export default FooterComponent;
