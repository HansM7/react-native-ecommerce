import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import FooterComponent from "../../elements/footer";
import { useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  removeProduct,
  setNewDataToCart,
} from "../../../features/cart/cart.slice";
import {
  useAddAmountToOrderMutation,
  useDeleteOrderMutation,
  useFindOrdersQuery,
  useReduceAmmountToOrderMutation,
} from "../../../services/shop.service";

// todo cargaremos una sola vez la cart, guardaremos una variable en el storage, desde el detail add, modificaremos, si es modificado llama de nuevo a firebase 📊

function CartScreen() {
  const route = useRoute();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.value);

  const { data, error, isLoading } = useFindOrdersQuery(user.email);

  const [triggerAddAmountToOrder, res] = useAddAmountToOrderMutation();

  const [triggerReduceAmmountToRoder, resReduce] =
    useReduceAmmountToOrderMutation();

  const [triggerDeleteOrder, resDelete] = useDeleteOrderMutation();

  console.log(data);

  useEffect(() => {
    if (!isLoading) {
      if ((data !== null) & data) {
        const transformedData = Object.keys(data).map((key) => ({
          id: key,
          data: data[key],
        }));
        dispatch(setNewDataToCart(transformedData));
      }
    }
  }, [data]);

  function handleIncrement(item) {
    try {
      triggerAddAmountToOrder({
        id: item.id,
        ammount: item.data.ammount + 1,
      });
      dispatch(addProduct(item));
    } catch (error) {
      console.log(error);
    }
  }

  function handleDecrement(item) {
    try {
      if (item.data.ammount === 1) {
        triggerDeleteOrder(item.id);
      } else {
        triggerReduceAmmountToRoder({
          id: item.id,
          ammount: item.data.ammount - 1,
        });
      }
      dispatch(removeProduct(item));
    } catch (error) {
      console.log(error);
    }
  }

  const products = useSelector((state) => state.cart.value);

  const priceTotal = products.reduce(
    (acc, item) => acc + item.data.ammount * item.data.product.price,
    0
  );

  return (
    <View style={styles.container_abs}>
      <View style={styles.container_card}>
        <View style={styles.content_card}>
          <Text style={styles.text_card}> My Cart</Text>
          <View style={styles.summary}>
            {/* item----------------------------------------- */}

            {isLoading ? (
              <Text>"Loading..."</Text>
            ) : (
              <FlatList
                style={styles.items_card}
                data={products}
                keyExtractor={(products) => products.id}
                renderItem={({ item }) => (
                  <View style={styles.item_card}>
                    <Image
                      source={{
                        uri: item.data.product.image,
                      }}
                      style={styles.item_card_image}
                    />
                    <View style={styles.item_detail}>
                      <Text style={styles.item_title_card}>
                        {item.data.product.title}
                      </Text>
                      <Text style={styles.item_title_secondary_card}>
                        {item.data.product.price}
                      </Text>
                      <View style={styles.item_ammount_detail}>
                        <Text style={styles.item_price_card}>
                          {item.data.ammount * item.data.product.price}
                        </Text>
                        <View style={styles.content_ammount}>
                          <TouchableOpacity
                            onPress={() => handleDecrement(item)}
                          >
                            <Text style={styles.text_ammount}>-</Text>
                          </TouchableOpacity>
                          <Text style={styles.text_ammount}>
                            {item.data.ammount}
                          </Text>
                          <TouchableOpacity
                            onPress={() => handleIncrement(item)}
                          >
                            <Text style={styles.text_ammount}>+</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                )}
              ></FlatList>
            )}

            {/* !item----------------------------------------- */}
            <View style={styles.detail_voucher}>
              <View style={styles.detail_voucher_ammount}>
                <Text style={styles.detail_text_items}>
                  Total ({products.length} items):
                </Text>
                <Text style={styles.detail_text_price}>${priceTotal}</Text>
              </View>
              <View style={styles.detail_voucher_proccess}>
                <Text style={styles.detail_voucher_proccess_text}>
                  Proceded to checkout
                </Text>
                <TouchableOpacity style={styles.detail_voucher_proccess_icon_c}>
                  <Image
                    style={styles.detail_voucher_proccess_icon}
                    source={require("../../../assets/icons/next.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* <FooterComponent screen={screen}></FooterComponent> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container_abs: {
    maxWidth: "100%",
    backgroundColor: "white",
    height: "100%",
  },
  container_card: {
    paddingHorizontal: 40,
    marginBottom: 50,
    flexDirection: "column",
    minHeight: "100%",
    backgroundColor: "white",
  },
  content_card: {
    marginTop: 20,
    height: "100%",
    backgroundColor: "white",
  },
  text_card: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "sansRegular",
  },

  summary: {
    height: "90%",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "white",
  },

  items_card: {
    marginTop: 16,
    flexDirection: "column",
    maxWidth: "100%",
    backgroundColor: "white",
    // height: "100%",
  },
  item_card: {
    flexDirection: "row",
    justifyContent: "justify-content",
    elevation: 2,
    backgroundColor: "white",
    borderColor: "#e7e7e7",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    // borderColor: "gray",
    // borderWidth: 1,
  },
  item_detail: {
    position: "relative",
    paddingHorizontal: 10,
  },
  item_card_image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  item_title_card: {
    fontFamily: "sansRegular",
    fontSize: 20,
    fontWeight: "bold",
  },
  item_title_secondary_card: {
    color: "gray",
  },
  item_ammount_detail: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  item_price_card: {
    fontSize: 20,
    fontFamily: "sansRegular",

    fontWeight: "bold",
  },

  content_ammount: {
    flexDirection: "row",
    backgroundColor: "#e7e7e7",
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "space-around",
    padding: 8,
    width: 100,
    marginRight: 100,
    marginTop: 16,
  },
  text_ammount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  detail_voucher: {
    width: "100%",
    height: 100,
    flexDirection: "column",
    // backgroundColor: "violet",
    gap: 16,
  },
  detail_voucher_ammount: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detail_text_items: {
    color: "gray",
    fontSize: 18,
  },
  detail_text_price: {
    fontWeight: "bold",
    fontSize: 22,
  },
  detail_voucher_proccess: {
    backgroundColor: "black",
    padding: 12,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detail_voucher_proccess_text: {
    fontSize: 18,
    color: "white",
  },
  detail_voucher_proccess_icon_c: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 4,
  },
  detail_voucher_proccess_icon: {
    width: 20,
    height: 20,
  },
});

export default CartScreen;
