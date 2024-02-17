import { Image, StyleSheet, TextInput, View } from "react-native";

function ProductSearch({ handleSearch }) {
  return (
    <View style={styles.container_search}>
      <View style={styles.element_search}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/694/694985.png",
          }}
          style={styles.image}
        />
        <TextInput
          onChangeText={(value) => handleSearch(value)}
          style={styles.text_input}
          placeholder="Search Product"
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container_search: {
    width: "100%",
    flexDirection: "column",
  },
  element_search: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#e7e7e7",
    borderRadius: 30,
  },
  image: {
    width: 30,
    height: 30,
  },
  text_input: {
    fontFamily: "sansRegular",
    fontSize: 18,
    width: "100%",
    color: "#3d3d3d",
  },
});

export default ProductSearch;
