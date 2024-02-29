import { Animated, StyleSheet, Text, View } from "react-native";
import CategorySearch from "./search";
import { useEffect, useState } from "react";
import CategoryList from "./list";
import { useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { useGetCategoriesQuery } from "../../../services/shop.service";
import { setProducts } from "../../../features/product/product.slice";

function CategoryScreen() {
  // const route = useRoute();
  // const screen = route.name;

  const menu = useSelector((state) => state.menu.value);

  const { data, isLoading, error } = useGetCategoriesQuery();

  const [dataCategory, setdataCategory] = useState([]);
  const [dataTemporal, setDataTemporal] = useState(dataCategory);

  // ok:  Aqui el filtro ya no requiere de llamar a firebase
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

  // todo: considerando usar redux para el almacenamiento de datos
  useEffect(() => {
    setdataCategory(data);
    setDataTemporal(data);
  }, [isLoading]);

  const menuAnimation = useState(new Animated.Value(0))[0];

  useEffect(() => {
    if (menu) {
      Animated.timing(menuAnimation, {
        toValue: 300,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(menuAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [menu]);

  return (
    <View style={styles.container_abs}>
      <View style={styles.container_category}>
        <CategorySearch handleSearch={handleSearch}></CategorySearch>
        {isLoading ? (
          <Text>Cargando...</Text>
        ) : (
          <CategoryList dataCategory={dataTemporal}></CategoryList>
        )}
      </View>

      <Animated.View
        style={[
          styles.menu,
          {
            transform: [{ translateX: menuAnimation }],
          },
        ]}
      ></Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    display: "flex",
    position: "absolute",
    backgroundColor: "white",
    elevation: 20,
    height: "100%",
    width: 300,
    top: 0,
    left: -300,
  },
  container_abs: {
    width: "100%",
    height: "100%",
    position: "relative",
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
