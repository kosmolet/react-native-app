import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import PastryItem from "../PastryItem";
import styles from "./style";
import menu from "../../Menu";

const PastryFlow = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={menu}
        renderItem={({ item }) => <PastryItem pastry={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default PastryFlow;
