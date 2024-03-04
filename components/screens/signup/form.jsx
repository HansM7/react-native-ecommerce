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
import { useSignUpMutation } from "../../../services/auth.service";

// todo no borrar importacion
import { setUser } from "../../../features/user/user.slice";
import { signupSchema } from "../../../models/signup.schema";

function FormSignup() {
  const navigation = useNavigation();

  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [triggerSignup, result] = useSignUpMutation();

  const dispatch = useDispatch();

  // fixme hacer la validacion por firebase con los reducers de redux
  async function handleClick() {
    try {
      signupSchema.validateSync(dataForm);
      await triggerSignup({
        email: dataForm.email,
        password: dataForm.password,
      });

      dispatch(setUser({ email: dataForm.email }));

      navigation.replace("home");
    } catch (error) {
      Alert.alert(
        "Error",
        "Ha ocurrido un error. Por favor, verifique los camppos",
        [{ text: "OK" }]
      );
    }
  }

  return (
    <View style={styles.container_form}>
      <View style={styles.form_group}>
        <Text style={styles.label_text}>Name</Text>
        <TextInput
          onChangeText={(value) => setDataForm({ ...dataForm, name: value })}
          style={styles.input_text}
        ></TextInput>
      </View>
      <View style={styles.form_group}>
        <Text style={styles.label_text}>Email</Text>
        <TextInput
          onChangeText={(value) => setDataForm({ ...dataForm, email: value })}
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

      <View style={styles.form_group}>
        <Text style={styles.label_text}>Confirm Password</Text>
        <TextInput
          onChangeText={(value) =>
            setDataForm({ ...dataForm, confirm_password: value })
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

export default FormSignup;
