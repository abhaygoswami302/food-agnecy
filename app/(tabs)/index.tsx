import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import HomeBanner from "@/assets/images/home-banner.jpg";

const index = () => {
  return (
    <View style={styles.Container}>
      <ImageBackground style={styles.image} source={HomeBanner}>
        <Text style={styles.text}>Food Agency</Text>
      </ImageBackground>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "column",
  },
  text: {
    color: "red",
    fontSize: 42,
    fontWeight: 400,
    padding: 5,
    backgroundColor: "rgba(0,0,0,0.56)",
    width: "100%",
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});
