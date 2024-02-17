import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../components/screens/login";
import CategoryScreen from "../components/screens/category";
import CardScreen from "../components/screens/card";
import NotificationScreen from "../components/screens/notification";
import ProductsScreen from "../components/screens/products";
import ProductSreen from "../components/screens/detail";

const stack = createStackNavigator();

function Routing() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="login">
        <stack.Screen
          name="login"
          component={LoginScreen}
          // options={{ headerLeft: null, gestureEnabled: false }}
        ></stack.Screen>

        <stack.Screen
          name="home"
          component={CategoryScreen}
          // options={{ headerLeft: null }}
        ></stack.Screen>

        <stack.Screen name="cart" component={CardScreen}></stack.Screen>

        <stack.Screen
          name="notification"
          component={NotificationScreen}
        ></stack.Screen>

        <stack.Screen name="products" component={ProductsScreen}></stack.Screen>

        <stack.Screen name="product" component={ProductSreen}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default Routing;
