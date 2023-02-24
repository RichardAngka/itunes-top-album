import { useRoute } from "@react-navigation/native";
import { Image, Text, View } from "react-native";

const AlbumDetail = () => {
  const { images, artistName, title, genre, rights }: any = useRoute().params;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16,
      }}>
      <Image
        source={{ uri: images.label }}
        style={{ height: 200, aspectRatio: 1 }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          paddingTop: 16,
          color: "#654c89",
        }}>
        {artistName}
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "500",
          paddingTop: 8,
          color: "#654c89",
        }}>
        {title}
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "500",
          paddingTop: 8,
          color: "#654c89",
        }}>
        {genre}
      </Text>
      <Text
        style={{
          fontSize: 10,
          fontWeight: "500",
          paddingTop: 8,
          color: "#654c89",
          textAlign: "center",
        }}>
        {rights}
      </Text>
    </View>
  );
};

export default AlbumDetail;
