import React from "react";
import { View, Text, ImageBackground } from "react-native";
import NavButton from "../NavButton";
import styles from "./style";

const PastryItem = (props) => {
  const { title, price, imagePath } = props;
  return (
    <View style={styles.croissantContainer}>
      <ImageBackground source={imagePath} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{`from ${price}$`}</Text>
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
