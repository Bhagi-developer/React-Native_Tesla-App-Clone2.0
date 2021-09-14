import { StatusBar } from "expo-status-bar";
import React from "react";
import CarItem from "./components/CarItem/index";
import { StyleSheet, Text, View } from "react-native";
import CarsItem from "./components/CarsItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});