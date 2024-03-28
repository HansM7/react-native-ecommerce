import { useFonts } from "expo-font";
import Routing from "./routing/routing";
import { fonts } from "./globals/fonts";
import { Provider } from "react-redux";
import store from "./store";
import { init } from "./db";

init()
  .then((result) => {
    console.log("created id ok!");
    // console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

export default function App() {
  const [fontLoaded] = useFonts(fonts);
  if (!fontLoaded) return null;

  return (
    <Provider store={store}>
      <Routing></Routing>
    </Provider>
  );
}
