import React from "react";
import { View, StyleSheet } from "react-native";

const ProgressBarNative = ({ progress = 0 }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${progress * 100}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    backgroundColor: "#007BFF",
  },
});

export default ProgressBarNative;
