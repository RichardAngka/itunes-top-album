import { Fragment, useState } from "react";
import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import AlbumCard from "../../components/AlbumCard";
import AppLoading from "../../../loading";
import useHttpReq from "../../hooks/useHttpReq";
import Header from "./Header";

const TopAlbum = () => {
  const [sortBy, setSortBy] = useState<string | null>(null);
  const { data, isLoading } = useHttpReq({
    method: "get",
    baseUrl: "https://itunes.apple.com/us/rss/topalbums/limit=100/json",
  });

  const filteredData = () => {
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
        console.log(a["im:artist"]?.label, b["im:artist"]?.label);
        if (a["im:artist"]?.label > b["im:artist"]?.label) return 1;
        if (a["im:artist"]?.label < b["im:artist"]?.label) return -1;
        return 0;
      });

    if (sortBy === "date")
      return data?.feed?.entry?.sort((a: any, b: any) => {
        console.log(a["im:releaseDate"]?.label, b["im:releaseDate"]?.label);
        if (a["im:releaseDate"]?.label > b["im:releaseDate"]?.label) return 1;
        if (a["im:releaseDate"]?.label < b["im:releaseDate"]?.label) return -1;
        return 0;
      });

    return data?.feed?.entry;
  };

  if (isLoading) return <AppLoading />;
  return (
    <>
      <Header
        onFilterArtist={() => setSortBy("artist")}
        onFilterDate={() => setSortBy("date")}
        onFilterPrice={() => setSortBy("price")}
      />
      <ScrollView style={styles.scrollView}>
        {filteredData()?.map((item: any, idx: number) => (
          <Fragment key={idx}>
            {!!idx && <View style={styles.divider} />}
            <AlbumCard
              title={item["im:name"].label}
              images={item["im:image"][0]}
              artistName={item["im:artist"].label}
              artistDetailUrl={item["im:artist"]?.attributes?.href}
              category={item.category?.attributes?.label}
              releaseDate={item["im:releaseDate"]?.attributes?.label}
              price={item["im:price"]?.label}
              albumUrl={item.link?.attributes?.href}
            />
          </Fragment>
        ))}
      </ScrollView>
    </>
  );
};

export default TopAlbum;
