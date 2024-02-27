import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmmount,
} from "../../features/counter/counter.slice";

function Counter() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();
  return (
    <View style={styles.content}>
      <Pressable style={styles.button} onPress={() => dispatch(decrement())}>
        <Text style={styles.button_text}>-</Text>
      </Pressable>
      <Text style={styles.text}>{count}</Text>
      <Pressable
        style={styles.button}
        onPress={() => dispatch(incrementByAmmount(2))}
      >
        <Text style={styles.button_text}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    flexDirection: "row",
    gap: 10,
  },
  button: {
    padding: 5,
    padding: 2,
    backgroundColor: "black",
    borderRadius: 5,
  },
  button_text: {
    color: "white",
    fontSize: 20,
  },
  text: {
    fontSize: 20,
  },
});

export default Counter;
