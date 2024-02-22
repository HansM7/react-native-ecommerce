import { StyleSheet, View } from "react-native";
import CategorySearch from "./search";
import { useState } from "react";
import CategoryList from "./list";
import FooterComponent from "../../elements/footer";
import { initialDataCategory } from "../../data/data-ecommerce";
import { useRoute } from "@react-navigation/native";

function CategoryScreen() {
  const route = useRoute();
  const screen = route.name;

  const [dataCategory, setdataCategory] = useState(initialDataCategory);
  const [dataTemporal, setDataTemporal] = useState(dataCategory);

  function handleSearch(word) {
    if (word === "") {
      setDataTemporal(dataCategory);
    } else {
      const categories = dataCategory.filter((item) =>
        item.title.toLowerCase().includes(word.toLowerCase())
      );
      setDataTemporal(categories);
    }
  }
  return (
    <View style={styles.container_abs}>
      <View style={styles.container_category}>
        <CategorySearch handleSearch={handleSearch}></CategorySearch>
        <CategoryList dataCategory={dataTemporal}></CategoryList>
      </View>
      {/* <FooterComponent screen={screen}></FooterComponent> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container_abs: {
    width: "100%",
    height: "100%",
  },
  container_category: {
    position: "relative",
    paddingHorizontal: 20,
    width: "100%",
    marginTop: 50,
    flexDirection: "column",
    minHeight: "100%",
  },
});

export default CategoryScreen;
