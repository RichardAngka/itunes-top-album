import { Image, Pressable, Text, View } from "react-native";
import * as Linking from "expo-linking";
import { styles } from "./styles";
import ArrowRight from "../../icons/ArrowRight";
import { AlbumCardPropsType } from "./types";

const AlbumCard: React.FC<AlbumCardPropsType> = ({
  title,
  images,
  artistName,
  category,
  releaseDate,
  price,
  onPressDetail,
}) => {
  return (
    <Pressable onPress={onPressDetail}>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Image
            source={{ uri: images.label }}
            style={{
              height: 80,
              aspectRatio: 1,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: "#ececec",
            }}
          />
          <View style={styles.detailContainer}>
            <View>
              <Text style={styles.titleText}>{title}</Text>
              <View style={styles.artistContainer}>
                <Text style={styles.artistNameText}>{artistName}</Text>
                <ArrowRight />
              </View>
            </View>
            <View style={styles.bottomDetail}>
              <View>
                <Text style={styles.genreText}>{category}</Text>
                <Text style={styles.dateText}>{releaseDate}</Text>
              </View>
              <Text style={styles.priceText}>{price}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default AlbumCard;
