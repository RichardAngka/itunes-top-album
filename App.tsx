import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { styles } from "./styles";
import TopAlbum from "./src/screens/TopAlbum";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <TopAlbum />
    </SafeAreaView>
  );
}
