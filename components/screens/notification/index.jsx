import { FlatList, StyleSheet, Text, View } from "react-native";
import FooterComponent from "../../elements/footer";
import { useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

function NotificationScreen() {
  const route = useRoute();
  const screen = route.name;

  const promotions = [
    {
      id: 1,
      title: "Promotion 1",
      offert: 60,
    },
    {
      id: 2,
      title: "Promotion 2",
      offert: 35,
    },
    {
      id: 3,
      title: "Promotion 3",
      offert: 50,
    },
    {
      id: 4,
      title: "Promotion 4",
      offert: 25,
    },
    {
      id: 5,
      title: "Promotion 5",
      offert: 45,
    },
  ];

  return (
    <View style={styles.container_abs}>
      <View style={styles.container_card}>
        <FlatList
          style={styles.content_notifications}
          data={promotions}
          keyExtractor={(promotions) => promotions.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.notification}></TouchableOpacity>
          )}
        ></FlatList>
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
    marginBottom: 50,
    flexDirection: "column",
    minHeight: "100%",
    height: "100%",
    paddingBottom: 150,
  },
  content_notifications: {
    width: "100%",
    flexDirection: "column",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  notification: {
    width: "100%",
    height: 200,
    backgroundColor: "violet",
    borderRadius: 20,
    marginBottom: 20,
  },
});

export default NotificationScreen;
