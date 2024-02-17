import React from "react";
import { StyleSheet, View } from "react-native";
import Banner from "./banner";
import Form from "./form";

function LoginScreen() {
  return (
    <View style={styles.container_login}>
      <Banner></Banner>
      <Form></Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container_login: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: 20,
  },
});

export default LoginScreen;
