import { Fragment, useState } from "react";
import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import AlbumCard from "../../components/AlbumCard";
import AppLoading from "../../../loading";
import useHttpReq from "../../hooks/useHttpReq";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { useNavigation } from "@react-navigation/native";

const TopAlbum = () => {
  const { navigate } = useNavigation();
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [value, setValue] = useState<string>("");
  const { data, isLoading } = useHttpReq({
    method: "get",
    baseUrl: "https://itunes.apple.com/us/rss/topalbums/limit=100/json",
  });
  const [filteredData, setFilteredData] = useState([]);

  const sortData = () => {
    if (sortBy === "price")
      return data?.feed?.entry?.sort((a: any, b: any) => {
        if (
          Number(a["im:price"]?.attributes?.amount) >
          Number(b["im:price"]?.attributes?.amount)
        )
          return 1;
        if (
          Number(a["im:price"]?.attributes?.amount) <
          Number(b["im:price"]?.attributes?.amount)
        )
          return -1;
        return 0;
      });

    if (sortBy === "artist")
      return data?.feed?.entry?.sort((a: any, b: any) => {
        if (a["im:artist"]?.label > b["im:artist"]?.label) return 1;
        if (a["im:artist"]?.label < b["im:artist"]?.label) return -1;
        return 0;
      });

    if (sortBy === "date")
      return data?.feed?.entry?.sort((a: any, b: any) => {
        if (a["im:releaseDate"]?.label > b["im:releaseDate"]?.label) return 1;
        if (a["im:releaseDate"]?.label < b["im:releaseDate"]?.label) return -1;
        return 0;
      });

    return data?.feed?.entry;
  };

  const handleSearchAlbum = () => {
    if (value) {
      const newData = data?.feed?.entry?.filter((item: any) => {
        const itemData = item.title.label
          ? item.title.label.toUpperCase()
          : "".toUpperCase();
        const textData = value.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      return setFilteredData(newData);
    }
    return setFilteredData(data);
  };

  const albumData = () => {
    if (Boolean(value)) return filteredData;
    return sortData();
  };

  if (isLoading) return <AppLoading />;

  return (
    <>
      <Header
        onFilterArtist={() => setSortBy("artist")}
        onFilterDate={() => setSortBy("date")}
        onFilterPrice={() => setSortBy("price")}
      />
      <SearchBar
        onChangeValue={(text: string) => setValue(text)}
        value={value}
        placeholder="Search Music"
        onEndEditing={handleSearchAlbum}
      />
      <ScrollView style={styles.scrollView}>
        {albumData()?.map((item: any, idx: number) => (
          <Fragment key={idx}>
            {!!idx && <View style={styles.divider} />}
            <AlbumCard
              title={item["im:name"].label}
              images={item["im:image"][0]}
              artistName={item["im:artist"].label}
              category={item.category?.attributes?.label}
              releaseDate={item["im:releaseDate"]?.attributes?.label}
              price={item["im:price"]?.label}
              onPressDetail={() =>
                // @ts-ignore
                navigate("Detail", {
                  images: item["im:image"][0],
                  artistName: item["im:artist"].label,
                  title: item["im:name"].label,
                  genre: item.category?.attributes?.label,
                  rights: item.rights?.label,
                })
              }
            />
          </Fragment>
        ))}
      </ScrollView>
    </>
  );
};

export default TopAlbum;
