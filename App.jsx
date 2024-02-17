import { useFonts } from "expo-font";
import Routing from "./routing/routing";
import { fonts } from "./globals/fonts";

export default function App() {
  const [fontLoaded] = useFonts(fonts);
  if (!fontLoaded) return null;

  return <Routing></Routing>;
}
