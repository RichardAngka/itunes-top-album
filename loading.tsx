import { ActivityIndicator, View } from "react-native";

const AppLoading = () => (
  <View style={{ flex: 1, justifyContent: "center" }}>
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
);

export default AppLoading;
