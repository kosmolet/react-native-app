import React from "react";
import { View, Text, ImageBackground } from "react-native";
import NavButton from "../NavButton";
import styles from "./style";

const PastryItem = (props) => {
  const { title, price, imagePath } = props.pastry;
  return (
    <View style={styles.croissantContainer}>
      <ImageBackground source={imagePath} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{`från ${price} kr`}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <NavButton
          type="primary"
          content={"Beställa"}
          onPress={() => {
            console.warn("Order was pressed");
          }}
        />
      </View>
    </View>
  );
};

export default PastryItem;
