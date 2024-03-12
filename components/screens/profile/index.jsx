import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Counter from "../../counter";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import * as ImagePicker from "expo-image-picker";
import {
  useGetProfileImageQuery,
  usePutProfileImageMutation,
} from "../../../services/shop.service";
import Location from "./location";

function ProfileScreen() {
  // todo section settings camera -----------------------------------------------------
  const user = useSelector((state) => state.user.value);
  const [modalVisible, setModalVisible] = useState(false);

  const [image, setImage] = useState(null);
  const [imageTemporal, setImageTemporal] = useState(null);

  const { data, isLoading, error } = useGetProfileImageQuery(user.localId);
  const [triggerPutProfileMutation, res] = usePutProfileImageMutation();

  async function verifyCameraPermissions() {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) return false;
    return true;
  }

  async function handleChangePhoto() {
    const isCameraOk = await verifyCameraPermissions();
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 1,
      });

      if (!result.canceled) {
        setImageTemporal(result.assets[0].uri);
      }
    }
  }

  function handleSavePhoto() {
    triggerPutProfileMutation({
      localId: user.localId,
      image: imageTemporal,
    });
    setImage(imageTemporal);
  }

  useEffect(() => {
    if (!isLoading) {
      if (data) {
        setImage(data.image);
      }
    }
  }, [isLoading]);

  function closeModal() {
    setImageTemporal(null);
    setModalVisible(!modalVisible);
  }

  // todo end section settings camera -----------------------------------------------------

  return (
    <View style={styles.container_abs}>
      <ScrollView>
        {isLoading ? (
          <Text>Loading....</Text>
        ) : (
          <View style={styles.container_profile}>
            <View style={styles.profile_info}>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image
                  source={{
                    uri: image
                      ? image
                      : "https://img.wattpad.com/a030a2f1e5f19ad50a8547e5711cac6a258eb508/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6645743139624c6c3433633645773d3d2d313135362e313436626633363765636665386266353333303636393034303538352e6a7067?s=fit&w=720&h=720",
                  }}
                  style={styles.profile_info_image}
                />
              </TouchableOpacity>

              <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                // onRequestClose={() => closeModal}
              >
                <View style={styles.modal}>
                  <View
                    style={{
                      backgroundColor: "white",
                      padding: 20,
                      borderRadius: 10,
                      width: "100%",
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        // paddingRight: 10,
                      }}
                      onPress={closeModal}
                    >
                      <Text style={{ fontSize: 18, fontWeight: "500" }}>
                        Photo profile
                      </Text>
                      <Text style={{ fontSize: 20 }}>✖️</Text>
                    </TouchableOpacity>

                    <View style={{ marginTop: 8 }}>
                      {/* here is check photo --------------------------------------------------------- */}
                      {image && imageTemporal === null ? (
                        <Image
                          source={{
                            uri: image,
                          }}
                          style={{
                            width: "100%",
                            height: 400,
                            borderRadius: 10,
                          }}
                        ></Image>
                      ) : imageTemporal !== null ? (
                        <Image
                          source={{
                            uri: imageTemporal,
                          }}
                          style={{
                            width: "100%",
                            height: 400,
                            borderRadius: 10,
                          }}
                        ></Image>
                      ) : (
                        <Image
                          source={{
                            uri: "https://img.wattpad.com/a030a2f1e5f19ad50a8547e5711cac6a258eb508/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6645743139624c6c3433633645773d3d2d313135362e313436626633363765636665386266353333303636393034303538352e6a7067?s=fit&w=720&h=720",
                          }}
                          style={{
                            width: "100%",
                            height: 400,
                            borderRadius: 10,
                          }}
                        ></Image>
                      )}

                      {/* here is check photo --------------------------------------------------------- */}

                      {/* here is check buttons --------------------------------------------------------- */}
                      <TouchableOpacity
                        onPress={handleChangePhoto}
                        style={styles.button}
                      >
                        <Text style={styles.button_text}>Change photo</Text>
                      </TouchableOpacity>

                      {imageTemporal && (
                        <TouchableOpacity
                          onPress={handleSavePhoto}
                          style={styles.button}
                        >
                          <Text style={styles.button_text}>Save photo</Text>
                        </TouchableOpacity>
                      )}

                      {/* here is check buttons --------------------------------------------------------- */}
                    </View>
                  </View>
                </View>
              </Modal>

              <View style={styles.profile_info_data}>
                <Text style={styles.profile_info_name}>{user.email}</Text>
                <Text style={styles.profile_info_email}>{user.email}</Text>
              </View>
            </View>
            {/* <View style={styles.item}><Counter></Counter></View> */}
            <View style={styles.separator}>
              <Text style={styles.separator_text}>Location user</Text>
            </View>
            <View style={styles.item}>
              <Location></Location>
            </View>
            <View>
              <TouchableOpacity style={styles.button_c_ubication}>
                <Text style={styles.button_c_text}>change ubication</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container_abs: {
    width: "100%",
    height: "100%",
  },
  container_profile: {
    position: "relative",
    paddingHorizontal: 20,
    width: "100%",
    // marginBottom: 600,
    flexDirection: "column",
    gap: 20,
    minHeight: "100%",
    height: "100%",
    backgroundColor: "white",
    // marginBottom: 50,
    paddingBottom: 50,
  },
  profile_info: {
    padding: 16,
    elevation: 10,
    borderRadius: 20,
    flexDirection: "row",
    backgroundColor: "white",
    gap: 20,
    marginTop: 10,
  },
  profile_info_image: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },
  profile_info_data: {
    flexDirection: "column",
    gap: 2,
  },
  profile_info_name: {
    fontSize: 25,
    fontWeight: "bold",
  },
  profile_info_email: {
    fontSize: 18,
    color: "gray",
  },
  item: {
    width: "100%",
    // height: 500,
    paddingHorizontal: 50,
    paddingVertical: 100,
    backgroundColor: "violet",
    borderRadius: 20,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
  },

  button: {
    width: "100%",
    backgroundColor: "black",
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 8,
  },

  button_text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  separator: {
    width: "100%",
    marginTop: 20,
  },
  separator_text: {
    fontSize: 18,
  },
  button_c_ubication: {
    width: "100%",
    paddingVertical: 8,
    backgroundColor: "black",
    borderRadius: 8,
  },
  button_c_text: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default ProfileScreen;
