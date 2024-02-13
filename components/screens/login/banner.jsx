import { Image, StyleSheet, Text, View } from "react-native";

function Banner() {
  return (
    <View style={styles.container_banner}>
      <Image
        source={{
          uri: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/151/posts/33040/image/chanel-logo.jpg",
        }}
        style={styles.image}
      />
      <View style={styles.container_text}>
        <Text style={styles.text_principal}>Welcome!</Text>
        <Text style={styles.text_secondary}>
          Please login or signup up to continue our app {":)"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container_banner: {
    fontFamily: "sansRegular",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 50,
  },

  container_text: {
    width: "100%",
    marginTop: 60,
    flexDirection: "column",
    textAlign: "left",
  },

  image: {
    width: "70%",
    height: 200,
  },

  text_principal: {
    fontFamily: "sansRegular",
    color: "#3d3d3d",
    fontWeight: "bold",
    fontSize: 28,
  },

  text_secondary: {
    fontFamily: "sansRegular",

    fontSize: 18,
    color: "#5d5d5d",
  },
});

export default Banner;
