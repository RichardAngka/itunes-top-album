import { ActivityIndicator, View } from "react-native";

const AppLoading = () => (
  <View style={{ flex: 1, justifyContent: "center" }}>
    <ActivityIndicator size="large" color="#ececec" />
  </View>
);

export default AppLoading;
