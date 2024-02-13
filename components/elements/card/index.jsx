import { Text, View } from "react-native";

function Card({ title = "Card default" }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

export default Card;
