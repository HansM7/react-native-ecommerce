import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../components/screens/login";
import CategoryScreen from "../components/screens/category";
import CardScreen from "../components/screens/cart";
import NotificationScreen from "../components/screens/notification";
import ProductsScreen from "../components/screens/products";
import ProductSreen from "../components/screens/detail";
import HeaderComponent from "../components/header";
import ProfileScreen from "../components/screens/profile";
import TabNavigation from "./tab_navigation";

const stack = createStackNavigator();

function Routing() {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="login"
        screenOptions={({ route }) => ({
          header: () => {
            return <HeaderComponent />;
          },
        })}
      >
        <stack.Screen
          name="login"
          component={LoginScreen}
          // options={{ headerLeft: null, gestureEnabled: false }}
        ></stack.Screen>

        <stack.Screen
          name="home"
          component={TabNavigation}
          // options={{ headerLeft: null }}
        ></stack.Screen>

        <stack.Screen name="products" component={ProductsScreen}></stack.Screen>

        <stack.Screen name="product" component={ProductSreen}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default Routing;
