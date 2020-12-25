import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      <View style={styles.croissantContainer}>
        <ImageBackground
          source={require("./assets/images/cr1.jpg")}
          style={styles.image}
        />
        <Text style={styles.title}>Almond Croissant</Text>
        <Text style={styles.subtitle}>Starting at 3$</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  croissantContainer: {
    width: "100%",
    height: "100%",
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 16,
    color: "grey",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});
