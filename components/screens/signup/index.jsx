import React from "react";
import { StyleSheet, View } from "react-native";
import FormSignup from "./form";

function SignupScreeen() {
  return (
    <View style={styles.container_login}>
      <FormSignup></FormSignup>
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

export default SignupScreeen;
