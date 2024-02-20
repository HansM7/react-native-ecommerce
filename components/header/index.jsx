import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function HeaderComponent() {
  const navigation = useNavigation();
  const route = useRoute();
  const screen = route.name;
  if (screen !== "login") {
    return (
      <View style={styles.header}>
        <View>
          {screen !== "home" ? (
            <TouchableOpacity onPress={navigation.goBack}>
              <Image
                source={require("../../assets/icons/back.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
          ) : (
            ""
          )}
        </View>
        <View>
          <Text style={styles.text_screen}>{screen}</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icons/settings.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    borderBottomColor: "#e7e7e7",
    borderBottomWidth: 2, // Establecer solo el borde inferior
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 40,
  },
  text_screen: {
    fontSize: 20,
    fontWeight: "500",
  },
  icon: {
    width: 30,
    height: 30,
    opacity: 0.7,
  },
});

export default HeaderComponent;
