import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  croissantContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "darkgrey",
    opacity: 0.7,
    borderRadius: 25,
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 30,
    color: "white",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
});

export default styles;
