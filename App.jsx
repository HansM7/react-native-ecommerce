import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import LoginScreen from "./components/screens/login";
import { useFonts } from "expo-font";
import { fonts } from "./globals/fonts";
import Category from "./components/screens/category";

export default function App() {
  const [page, setPage] = useState("login");

  const [fontLoaded] = useFonts(fonts);
  if (!fontLoaded) return null;

  if (page === "login") {
    return (
      <SafeAreaView style={styles.container}>
        <LoginScreen setPage={setPage}></LoginScreen>
      </SafeAreaView>
    );
  } else if (page === "home") {
    return (
      <SafeAreaView style={styles.container}>
        <Category setPage={setPage} page={page}></Category>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" && 30,
  },
});
