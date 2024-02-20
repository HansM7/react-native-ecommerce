import { Image, StyleSheet, Text, View } from "react-native";
import FooterComponent from "../../elements/footer";
import { useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";

function CardScreen() {
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
        </View>
      </View>
      <FooterComponent screen={screen}></FooterComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container_abs: {
    maxWidth: "100%",
    backgroundColor: "white",
  },
  container_card: {
    paddingHorizontal: 40,
    marginBottom: 50,
    flexDirection: "column",
    minHeight: "100%",
  },
  content_card: {},
  text_card: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "sansRegular",
  },

  items_card: {
    marginTop: 16,
    flexDirection: "column",
    maxWidth: "100%",
    gap: 16,
  },
  item_card: {
    flexDirection: "row",
    justifyContent: "justify-content",
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
});

export default CardScreen;
