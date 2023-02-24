import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import TopAlbum from "./src/screens/TopAlbum";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AlbumDetail from "./src/screens/AlbumDetail";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen
            name="Album"
            component={TopAlbum}
            options={{ title: "Album" }}
          />
          <Stack.Screen
            name="Detail"
            component={AlbumDetail}
            options={{ title: "Detail" }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
