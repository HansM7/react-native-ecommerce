import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function ProductList({ dataProduct }) {
  const navigation = useNavigation();
  const isTwoColumns = 2;

  function handlePress(product_id) {
    navigation.navigate("product", { product_id });
  }

  return (
    <View style={styles.container_list}>
      <FlatList
        style={styles.element_list}
        data={dataProduct}
        keyExtractor={(dataProduct) => dataProduct.id}
        key={isTwoColumns ? "two-columns" : "single-column"}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card_product}
            onPress={() => handlePress(item.id)}
          >
            <Image
              source={{
                uri: item.image
                  ? item.image
                  : "https://developers.google.com/static/maps/documentation/streetview/images/error-image-generic.png",
              }}
              style={styles.image}
            />
            <View style={styles.card_info}>
              <Text style={styles.text_info}>{item.title}</Text>
              <Text style={styles.text_price}>{item.price}</Text>
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
    maxHeight: "90%",
    paddingBottom: 200,
  },
  element_list: {
    width: "100%",
    height: "100%",
    gap: 100,
  },
  card_product: {
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
    paddingVertical: 10,
  },
  text_info: {
    textAlign: "center",
    fontSize: 18,
  },
  text_price: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default ProductList;
