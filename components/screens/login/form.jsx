import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import { useGetUsersQuery } from "../../../services/auth.service";
import { setUser } from "../../../features/user/user.slice";

function Form() {
  const navigation = useNavigation();

  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const { data, isLoading, error } = useGetUsersQuery();

  const dispatch = useDispatch();

  // fixme hacer la validacion por firebase con los reducers de redux
  function handleClick() {
    const login = data.find(
      (item) =>
        item.email === dataForm.email && item.password === dataForm.password
    );

    if (login) {
      navigation.replace("home");

      // ok mandar el usuario a redux para que mantenga la informacion
      dispatch(setUser(login));
    } else {
      Alert.alert(
        "Error",
        "Ha ocurrido un error. Por favor, inténtalo de nuevo.",
        [{ text: "OK" }]
      );
    }
  }

  return (
    <View style={styles.container_form}>
      <View style={styles.form_group}>
        <Text style={styles.label_text}>Email</Text>
        <TextInput
          onChangeText={(value) => setDataForm({ ...dataForm, email: value })}
          defaultValue="admin@gmail.com"
          keyboardType="email-address"
          style={styles.input_text}
        ></TextInput>
      </View>
      <View style={styles.form_group}>
        <Text style={styles.label_text}>Password</Text>
        <TextInput
          onChangeText={(value) =>
            setDataForm({ ...dataForm, password: value })
          }
          secureTextEntry={true}
          style={styles.input_text}
        ></TextInput>
      </View>
      <View style={styles.container_button}>
        <TouchableOpacity style={styles.button_login} onPress={handleClick}>
          <Text style={styles.text_button_login}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container_form: {
    marginTop: 60,
    width: "100%",
    flexDirection: "column",
    gap: 20,
  },
  form_group: {
    width: "100%",
    flexDirection: "column",
    gap: 2,
  },
  label_text: {
    fontFamily: "sansRegular",
    fontSize: 18,
    fontWeight: "bold",
    color: "#3d3d3d",
  },
  input_text: {
    paddingVertical: 5,
    borderColor: "gray",
    borderBottomWidth: 1,
    borderRadius: 5,
    fontSize: 18,
  },
  button: {
    backgroundColor: "black",
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  container_button: {
    marginTop: 20,
    width: "100%",
  },
  button_login: {
    backgroundColor: "#3d3d3d",
    borderRadius: 15,
    paddingVertical: 15,
  },
  text_button_login: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Form;
