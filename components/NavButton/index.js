import React from "react";
import { View, Text, Pressable, Button } from "react-native";
import styles from "./style";

const NavButton = (props) => {
  const { type, content, onPress } = props;

  const backgroundButtonColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textButtonColor = type === "primary" ? "#FFFFFF" : "#171A20";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundButtonColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textButtonColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default NavButton;
