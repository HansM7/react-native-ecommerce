import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Banner from "./banner";
import Form from "./form";

function LoginScreen({ setPage }) {
  function handleLogin(info) {
    if (info.email === "admin@gmail.com" && info.password === "admin") {
      setPage("home");
    } else {
      // lanzar error
      Alert.alert(
        "Error",
        "Ha ocurrido un error. Por favor, inténtalo de nuevo.",
        [{ text: "OK" }]
      );
    }
  }
  return (
    <View style={styles.container_login}>
      <Banner></Banner>
      <Form handleLogin={handleLogin} setPage={setPage}></Form>
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
