import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import CategoryScreen from "../components/screens/category";
import CartScreen from "../components/screens/cart";
import { AntDesign, Entypo } from "@expo/vector-icons";
import NotificationScreen from "../components/screens/notification";
import ProfileScreen from "../components/screens/profile";

function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="home_tab"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={[
                  styles.tabContainer,
                  { backgroundColor: focused ? "black" : "white" },
                ]}
              >
                <Image
                  source={
                    focused
                      ? require("../assets/icons/home_white.png")
                      : require("../assets/icons/home_black.png")
                  }
                  style={[styles.icon]}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="cart_tab"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={[
                  styles.tabContainer,
                  { backgroundColor: focused ? "black" : "white" },
                ]}
              >
                <Image
                  source={
                    focused
                      ? require("../assets/icons/shop_white.png")
                      : require("../assets/icons/shop_black.png")
                  }
                  style={[styles.icon]}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="notification_tab"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={[
                  styles.tabContainer,
                  { backgroundColor: focused ? "black" : "white" },
                ]}
              >
                <Image
                  source={
                    focused
                      ? require("../assets/icons/notification_white.png")
                      : require("../assets/icons/notification_black.png")
                  }
                  style={[styles.icon]}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="profile_tag"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={[
                  styles.tabContainer,
                  { backgroundColor: focused ? "black" : "white" },
                ]}
              >
                <Image
                  source={
                    focused
                      ? require("../assets/icons/profile_white.png")
                      : require("../assets/icons/profile_black.png")
                  }
                  style={[styles.icon]}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "white",
    elevation: 20,
    height: 70,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  tabContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
  },
  icon: {
    width: 35,
    height: 35,
    // zIndex: 10,
  },
});

export default TabNavigation;
