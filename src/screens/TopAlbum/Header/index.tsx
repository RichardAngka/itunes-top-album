import { Button, Text, View } from "react-native";
import { styles } from "./styles";
import { HeaderPropsType } from "./types";

const Header: React.FC<HeaderPropsType> = ({
  onFilterPrice,
  onFilterArtist,
  onFilterDate,
}) => (
  <View style={styles.rowContainer}>
    <Text style={styles.headers}>Top 100 Playlist</Text>
    <View style={styles.buttonContainer}>
      <Button title="Price" onPress={onFilterPrice} />
      <Button title="Artist" onPress={onFilterArtist} />
      <Button title="Date" onPress={onFilterDate} />
    </View>
  </View>
);

export default Header;
