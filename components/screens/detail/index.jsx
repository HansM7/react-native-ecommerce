import { Image, StyleSheet, Text, View } from "react-native";
import FooterComponent from "../../elements/footer";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { initialDataProducts } from "../../data/data-ecommerce";

function ProductSreen() {
  const screen = "home";
  const route = useRoute();

  const { product_id } = route.params;

  const [product, setProduct] = useState(
    initialDataProducts.filter((i) => i.id === product_id)
  );

  return (
    <View style={styles.container_abs}>
      <View style={styles.container_product}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyp3nqDGy3wgij0eEf0JjQiFL-3RqQ7jWSVsOvRFcEcQ&s",
          }}
          style={styles.image}
        />
      </View>
      <FooterComponent screen={screen}></FooterComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container_abs: {
    width: "100%",
  },
  container_product: {
    position: "relative",
    paddingHorizontal: 20,
    width: "100%",
    marginBottom: 50,
    flexDirection: "column",
    minHeight: "100%",
    backgroundColor: "red",
  },
  image: {
    width: "100%",
    height: "400",
  },
});

export default ProductSreen;
