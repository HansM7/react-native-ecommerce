import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Banner from "./banner";
import Form from "./form";

import { useNavigation } from "@react-navigation/native";
import { fetchSession } from "../../../db";
import { useDispatch } from "react-redux";
import { setUser } from "../../../features/user/user.slice";

function LoginScreen() {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  fetchSession()
    .then((res) => {
      const responses = res.rows._array;
      if (responses.length) {
        const session = responses[0];
        dispatch(setUser({ email: session.email, localId: session.localId }));
        navigation.replace("home");
      }
    })
    .catch((err) => {
      console.log("Error", err);
    });

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
