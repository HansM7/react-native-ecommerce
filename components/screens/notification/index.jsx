import { StyleSheet, Text, View } from "react-native";
import FooterComponent from "../../elements/footer";
import { useRoute } from "@react-navigation/native";

function NotificationScreen() {
  const route = useRoute();
  const screen = route.name;
  return (
    <View style={styles.container_abs}>
      <View style={styles.container_card}>
        <Text> Hello Notification</Text>
      </View>
      <FooterComponent screen={screen}></FooterComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container_abs: {
    width: "100%",
  },
  container_card: {
    position: "relative",
    paddingHorizontal: 20,
    width: "100%",
    marginTop: 50,
    flexDirection: "column",
    backgroundColor: "red",
    minHeight: "100%",
  },
});

export default NotificationScreen;
