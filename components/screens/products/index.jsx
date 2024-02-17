import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import FooterComponent from "../../elements/footer";
import { useState } from "react";
import { initialDataProducts } from "../../data/data-ecommerce";
import ProductSearch from "./search";
import ProductList from "./list";

function ProductsScreen() {
  const route = useRoute();
  let screen = route.name;
  if (screen === "products") screen = "home";

  const { category_id } = route.params;

  const [dataProducts, setDataProducts] = useState(
    initialDataProducts.filter((i) => i.category_id === category_id)
  );

  const [dataTemporal, setDataTemporal] = useState(dataProducts);

  function handleSearch(word) {
    if (word === "") {
      setDataTemporal(dataProducts);
    } else {
      const products = dataProducts.filter((item) =>
        item.title.toLowerCase().includes(word.toLowerCase())
      );
      setDataTemporal(products);
    }
  }

  return (
    <View style={styles.container_abs}>
      <View style={styles.container_products}>
        <ProductSearch handleSearch={handleSearch}></ProductSearch>
        <ProductList dataProduct={dataTemporal}></ProductList>
      </View>
      <FooterComponent screen={screen}></FooterComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container_abs: {
    width: "100%",
  },
  container_products: {
    position: "relative",
    paddingHorizontal: 20,
    width: "100%",
    marginTop: 50,
    flexDirection: "column",
    minHeight: "100%",
  },
});

export default ProductsScreen;
