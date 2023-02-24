export type SearchBarPropsType = {
  onChangeValue: (e: string) => void;
  value?: string;
  placeholder: string;
  onEndEditing: () => void;
};
