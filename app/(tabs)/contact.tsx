import { View, Text, StyleSheet } from "react-native";
import React from "react";

const explore = () => {
  return (
    <View>
      <Text>Contact</Text>
    </View>
  );
};

export default explore;

const styles = StyleSheet.create({
  text: {
    color: "green",
    backgroundColor: "black",
    textAlign: "center",
  },
  Container: {
    width: "100%",
    height: "100%",
    wordWrap:"wrap"
  },
});
