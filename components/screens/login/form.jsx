import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import { setUser } from "../../../features/user/user.slice";
import { useLoginMutation } from "../../../services/auth.service";

function Form() {
  const navigation = useNavigation();

  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const [triggerLogin, result] = useLoginMutation();

  const dispatch = useDispatch();

  // fixme hacer la validacion por firebase con los reducers de redux
  function handleClick() {
    triggerLogin(dataForm);
  }

  useEffect(() => {
    validation();
  }, [result.isLoading]);

  function validation() {
    if (result.data) {
      dispatch(setUser({ email: result.data.email }));
      // ok aqui ya recibo el token con result.data.idToken
      // todo las demas validaciones que ayuden al login
      navigation.replace("home");
    }
    if (result.error) {
      Alert.alert(
        "Error",
        "Ha ocurrido un error. Por favor, inténtalo de nuevo.",
        [{ text: "OK" }]
      );
    }
  }

  function redirectSignup() {
    navigation.navigate("signup");
  }

  return (
    <View style={styles.container_form}>
      <View style={styles.form_group}>
        <Text style={styles.label_text}>Email</Text>
        <TextInput
          onChangeText={(value) => setDataForm({ ...dataForm, email: value })}
          defaultValue="example@gmail.com"
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
          <Text style={styles.text_button_login}>
            {result.isLoading ? "Cargando..." : "Login"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container_button_signup}>
        <TouchableOpacity style={styles.button_login} onPress={redirectSignup}>
          <Text style={styles.text_button_login}>Signup</Text>
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
  container_button_signup: {
    marginTop: 8,
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
