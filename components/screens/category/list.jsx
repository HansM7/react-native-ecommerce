import { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function CatergoryList({ dataCategory, setPage }) {
  const isTwoColumns = 2;
  return (
    <View style={styles.container_list}>
      <FlatList
        style={styles.element_list}
        data={dataCategory}
        keyExtractor={(dataCategory) => dataCategory.id}
        key={isTwoColumns ? "two-columns" : "single-column"}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card_category}>
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.image}
            />
            <View style={styles.card_info}>
              <Text style={styles.text_info}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container_list: {
    marginTop: 30,
  },
  element_list: {
    width: "100%",
    height: "100%",
    gap: 100,
  },
  card_category: {
    margin: 10,
    width: "45%",
    borderRadius: 20,
    justifyContent: "space-between",
    backgroundColor: "#e7e7e7",
    borderColor: "#e7e7e7",
    borderWidth: 1,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: 200,
  },
  card_info: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#e7e7e7",
    opacity: 0.6,
    paddingVertical: 20,
  },
  text_info: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CatergoryList;
