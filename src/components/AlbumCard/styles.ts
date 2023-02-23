import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: "row",
    paddingVertical: 16,
  },
  detailContainer: {
    paddingLeft: 8,
    justifyContent: "space-between",
    flex: 1,
  },
  titleText: {
    fontSize: 14,
    fontWeight: "600",
  },
  artistNameText: {
    fontSize: 12,
    fontWeight: "400",
    paddingRight: 4,
  },
  artistContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 4,
  },
  genreText: {
    color: "#654c89",
    fontSize: 12,
    fontWeight: "700",
  },
  dateText: {
    fontSize: 10,
    fontWeight: "400",
  },
  bottomDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceText: {
    fontSize: 14,
    color: "#654c89",
    borderColor: "#654c89",
    borderWidth: 1,
    padding: 4,
    borderRadius: 4,
  },
});

export { styles };
