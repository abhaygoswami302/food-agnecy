import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import HomeBanner from "@/assets/images/home-banner.jpg";
import { Link } from "expo-router";

const index = () => {
  return (
    <View style={styles.Container}>
      <ImageBackground style={styles.image} source={HomeBanner}>
        <Text style={styles.text}>Food Agency</Text>
        <Link href={"/contact"}  asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact</Text>
          </Pressable>
        </Link>
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
  buttonText: {
    color: "white",
    fontSize:18
  },
  button: {
    padding: 6,
    backgroundColor: "gray",
    borderRadius:12,
    marginTop:4,
    justifyContent:"center",
    alignItems:"center"
  },
});
