import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Counter from "../../counter";
import { useSelector } from "react-redux";

function ProfileScreen() {
  const user = useSelector((state) => state.user.value);
  return (
    <View style={styles.container_abs}>
      <ScrollView>
        <View style={styles.container_profile}>
          <View style={styles.profile_info}>
            <Image
              source={{
                uri: "https://img.wattpad.com/a030a2f1e5f19ad50a8547e5711cac6a258eb508/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6645743139624c6c3433633645773d3d2d313135362e313436626633363765636665386266353333303636393034303538352e6a7067?s=fit&w=720&h=720",
              }}
              style={styles.profile_info_image}
            />
            <View style={styles.profile_info_data}>
              <Text style={styles.profile_info_name}>{user.name}</Text>
              <Text style={styles.profile_info_email}>{user.email}</Text>
            </View>
          </View>
          <View style={styles.item}>
            <Counter></Counter>
          </View>
          {/* <View style={styles.item}></View> */}
        </View>
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
});

export default ProfileScreen;
