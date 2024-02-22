import { Image, StyleSheet, Text, View } from "react-native";
import FooterComponent from "../../elements/footer";
import { useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";

function CartScreen() {
  const route = useRoute();
  const screen = route.name;

  const [ammount, setAmmount] = useState(1);

  const items = [{}];

  function handleIncrement() {}
  function handleDecrement() {}

  return (
    <View style={styles.container_abs}>
      <View style={styles.container_card}>
        <View style={styles.content_card}>
          <Text style={styles.text_card}> My Cart</Text>
          <View style={styles.summary}>
            <View style={styles.items_card}>
              {/* item----------------------------------------- */}
              <View style={styles.item_card}>
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzB1e-FkP_iI3xR0fLGDz6SVbYPtIZ0sSrNK-GgsVl4A&s",
                  }}
                  style={styles.item_card_image}
                />
                <View style={styles.item_detail}>
                  <Text style={styles.item_title_card}>First product</Text>
                  <Text style={styles.item_title_secondary_card}>
                    Dtail product selected bla
                  </Text>
                  <View style={styles.item_ammount_detail}>
                    <Text style={styles.item_price_card}>$198.00</Text>
                    <View style={styles.content_ammount}>
                      <TouchableOpacity onPress={handleDecrement}>
                        <Text style={styles.text_ammount}>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.text_ammount}>{ammount}</Text>
                      <TouchableOpacity onPress={handleIncrement}>
                        <Text style={styles.text_ammount}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.item_card}>
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzB1e-FkP_iI3xR0fLGDz6SVbYPtIZ0sSrNK-GgsVl4A&s",
                  }}
                  style={styles.item_card_image}
                />
                <View style={styles.item_detail}>
                  <Text style={styles.item_title_card}>First product</Text>
                  <Text style={styles.item_title_secondary_card}>
                    Dtail product selected bla
                  </Text>
                  <View style={styles.item_ammount_detail}>
                    <Text style={styles.item_price_card}>$198.00</Text>
                    <View style={styles.content_ammount}>
                      <TouchableOpacity onPress={handleDecrement}>
                        <Text style={styles.text_ammount}>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.text_ammount}>{ammount}</Text>
                      <TouchableOpacity onPress={handleIncrement}>
                        <Text style={styles.text_ammount}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.item_card}>
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzB1e-FkP_iI3xR0fLGDz6SVbYPtIZ0sSrNK-GgsVl4A&s",
                  }}
                  style={styles.item_card_image}
                />
                <View style={styles.item_detail}>
                  <Text style={styles.item_title_card}>First product</Text>
                  <Text style={styles.item_title_secondary_card}>
                    Dtail product selected bla
                  </Text>
                  <View style={styles.item_ammount_detail}>
                    <Text style={styles.item_price_card}>$198.00</Text>
                    <View style={styles.content_ammount}>
                      <TouchableOpacity onPress={handleDecrement}>
                        <Text style={styles.text_ammount}>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.text_ammount}>{ammount}</Text>
                      <TouchableOpacity onPress={handleIncrement}>
                        <Text style={styles.text_ammount}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>

              {/* !item----------------------------------------- */}
            </View>
            <View style={styles.detail_voucher}>
              <View style={styles.detail_voucher_ammount}>
                <Text style={styles.detail_text_items}>Total (3items):</Text>
                <Text style={styles.detail_text_price}>$600.00</Text>
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
  },
  content_card: {
    marginTop: 20,
    height: "100%",
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
  },

  items_card: {
    marginTop: 16,
    flexDirection: "column",
    maxWidth: "100%",
    gap: 25,
  },
  item_card: {
    flexDirection: "row",
    justifyContent: "justify-content",
    elevation: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
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
