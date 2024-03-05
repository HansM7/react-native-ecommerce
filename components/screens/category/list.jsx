import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useFindOrdersQuery } from "../../../services/shop.service";

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { setNewDataToCart } from "../../../features/cart/cart.slice";

function CategoryList({ dataCategory, setPage }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function handlePress(category_id) {
    navigation.navigate("products", { category_id });
  }

  const user = useSelector((state) => state.user.value);

  // ! por ahora lo dejo aqui

  const { data, isLoading, error } = useFindOrdersQuery(user.email);

  console.log(error);

  useEffect(() => {
    console.log(data);
    if (!isLoading) {
      if (data !== null && data) {
        const transformedData = Object.keys(data).map((key) => ({
          id: key,
          data: data[key],
        }));
        dispatch(setNewDataToCart(transformedData));
      } else {
        console.log("error!!!!!!!!!");
      }
    }
  }, [isLoading]);

  // console.log(data);

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
          <TouchableOpacity
            style={styles.card_category}
            onPress={() => handlePress(item.id)}
          >
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
    maxHeight: "90%",
    // paddingBottom: 200,
  },
  element_list: {
    width: "100%",
    height: "100%",
    gap: 100,
    marginBottom: 100,
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

export default CategoryList;
