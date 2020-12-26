import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PastryItem from "./components/PastryItem";

export default function App() {
  return (
    <View style={styles.container}>
      <PastryItem
        title="Almond Croissant"
        price="5"
        imagePath={require("./assets/images/cr1.jpg")}
      />
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
});
