import { TextInput } from "react-native";
import { SearchBarPropsType } from "./types";
import { styles } from "./styles";

const SearchBar: React.FC<SearchBarPropsType> = ({
  onChangeValue,
  value,
  placeholder,
  onEndEditing,
}) => (
  <TextInput
    placeholder={placeholder}
    style={styles.input}
    onChangeText={onChangeValue}
    value={value}
    onEndEditing={onEndEditing}
  />
);

export default SearchBar;
