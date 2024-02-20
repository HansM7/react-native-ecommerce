import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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

  const priceBase = 100;
  const [ammount, setAmmount] = useState(1);
  function handleIncrement() {
    setAmmount(ammount + 1);
  }
  function handleDecrement() {
    if (ammount !== 1) setAmmount(ammount - 1);
  }

  // sizes--------
  const sizes = ["S", "M", "L", "XL"];

  const [size, setSize] = useState("S");

  function handleChangeSize(newSise) {
    setSize(newSise);
  }

  const colors = ["y", "b", "v", "bl"];

  return (
    <View style={styles.container_abs}>
      <View style={styles.container_product}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyp3nqDGy3wgij0eEf0JjQiFL-3RqQ7jWSVsOvRFcEcQ&s",
          }}
          style={styles.image}
        />
        <View style={styles.container_detail}>
          <View style={styles.first_content}>
            <View style={styles.first_content_left}>
              <Text style={styles.title}>Title product</Text>
              <Text style={styles.description}>Description product</Text>
              <View style={styles.content_calification}>
                <View style={styles.content_stars}>
                  <Text>⭐</Text>
                  <Text>⭐</Text>
                  <Text>⭐</Text>
                  <Text>⭐</Text>
                  <Text>⭐</Text>
                </View>
                <Text> {"(300)"} Reviews</Text>
              </View>
            </View>
            <View style={styles.first_content_right}>
              <View style={styles.content_ammount}>
                <TouchableOpacity onPress={handleDecrement}>
                  <Text style={styles.text_ammount}>-</Text>
                </TouchableOpacity>
                <Text style={styles.text_ammount}>{ammount}</Text>
                <TouchableOpacity onPress={handleIncrement}>
                  <Text style={styles.text_ammount}>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.text_stock}>Aviable in stock</Text>
            </View>
          </View>
          {/* Second -------------------------------------- */}
          <View style={styles.second_content}>
            <View style={styles.size_content}>
              <Text style={styles.text_size}>Size</Text>
              <View style={styles.option_size}>
                {sizes.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleChangeSize(item)}
                    style={[
                      styles.item_size,
                      { backgroundColor: size === item ? "white" : "black" },
                      { borderColor: size === item ? "black" : "white" },
                    ]}
                  >
                    <Text
                      style={[
                        styles.text_item_size,
                        { color: size === item ? "black" : "white" },
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={styles.color_content}>
              <View style={styles.color_1}></View>
              <View style={styles.color_2}></View>
              <View style={styles.color_3}></View>
              <View style={styles.color_4}></View>
            </View>
          </View>
          {/* third -------------------------------------- */}
          <View style={styles.third_content}>
            <Text style={styles.title_description}>Description</Text>
            <Text style={styles.content_description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque est
              aperiam assumenda magnam et cumque illo doloribus. Assumenda ae
              quia rerum ex odit.
            </Text>
            <View style={styles.final_cotent}>
              <View style={styles.final_price}>
                <Text style={styles.price_title}>Total price</Text>
                <Text style={styles.price_ammount}>
                  ${priceBase * ammount}.00
                </Text>
              </View>
              <View>
                <TouchableOpacity style={styles.button_add}>
                  <Image
                    style={[{ width: 30, height: 20 }]}
                    source={require("../../../assets/icons/icon_shop_white.png")}
                    // style={styles.icon}
                  />
                  <Text style={styles.text_button_add}>Add to card</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container_abs: {
    width: "100%",
  },
  container_product: {
    position: "relative",
    // paddingHorizontal: 20,
    width: "100%",
    // marginBottom: 50,
    flexDirection: "column",
    minHeight: "100%",
    backgroundColor: "red",
  },
  image: {
    width: "100%",
    height: 500,
  },
  container_detail: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "white",
    paddingVertical: 40,
    borderColor: "#f6f6f6",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    paddingHorizontal: 40,
    // height: "100%",
  },

  first_content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  first_content_left: {
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  description: {
    color: "gray",
    fontSize: 16,
  },
  first_content_right: {
    flexDirection: "column",
    gap: 2,
    alignItems: "flex-end",
  },
  content_calification: {
    flexDirection: "row",
    gap: 8,
  },
  content_ammount: {
    flexDirection: "row",
    backgroundColor: "#e7e7e7",
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "space-around",
    padding: 8,
    width: 100,
  },
  text_ammount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text_stock: {
    fontSize: 16,
    fontWeight: "bold",
  },
  content_stars: {
    flexDirection: "row",
    gap: 4,
  },
  // ----------------------------------------

  second_content: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  size_content: {
    flexDirection: "column",
    gap: 4,
  },
  text_size: {
    fontSize: 20,
    fontWeight: "bold",
  },
  option_size: {
    flexDirection: "row",
    gap: 8,
  },
  item_size: {
    borderRadius: 20,
    backgroundColor: "black",
    width: 40,
    height: 40,
    justifyContent: "center",
    borderWidth: 1,
  },
  text_item_size: {
    textAlign: "center",
    color: "white",
  },
  color_content: {
    flexDirection: "column",
    gap: 4,
    borderRadius: 10,
    elevation: 10,
    backgroundColor: "white",
    padding: 8,
    alignItems: "center",
  },

  color_1: {
    borderRadius: 20,
    width: 30,
    height: 30,
    backgroundColor: "yellow",
  },
  color_2: {
    borderRadius: 20,

    width: 25,
    height: 25,
    backgroundColor: "blue",
  },
  color_3: {
    borderRadius: 20,

    width: 25,
    height: 25,
    backgroundColor: "violet",
  },
  color_4: {
    borderRadius: 20,

    width: 25,
    height: 25,
    backgroundColor: "black",
  },

  // ----------------------------------------

  third_content: {
    marginTop: 20,
    flexDirection: "column",
    gap: 12,
  },
  title_description: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content_description: {
    color: "gray",
  },
  final_cotent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  final_price: {
    flexDirection: "column",
  },
  price_title: {
    fontSize: 14,
    color: "gray",
  },
  price_ammount: {
    fontSize: 20,
    fontWeight: "bold",
  },

  button_add: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  text_button_add: {
    color: "white",
    fontSize: 18,
  },
});

export default ProductSreen;
