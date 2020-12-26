import React from "react";
import { View, Text, ImageBackground } from "react-native";
import NavButton from "../NavButton";
import styles from "./style";

const PastryItem = () => {
  return (
    <View style={styles.croissantContainer}>
      <ImageBackground
        source={require("../../assets/images/cr1.jpg")}
        style={styles.image}
      />
      <Text style={styles.title}>Almond Croissant</Text>
      <Text style={styles.subtitle}>Starting at 3$</Text>
      <NavButton
        type="primary"
        content={"Order"}
        onPress={() => {
          console.warn("Order was pressed");
        }}
      />
    </View>
  );
};

export default PastryItem;
