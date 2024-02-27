import { useFonts } from "expo-font";
import Routing from "./routing/routing";
import { fonts } from "./globals/fonts";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  const [fontLoaded] = useFonts(fonts);
  if (!fontLoaded) return null;

  return (
    <Provider store={store}>
      <Routing></Routing>
    </Provider>
  );
}
