export interface AlbumCardPropsType {
  title: string;
  images: {
    label: string;
  };
  artistName: string;
  category: string;
  releaseDate: string;
  price: string;
  onPressDetail: () => void;
}
