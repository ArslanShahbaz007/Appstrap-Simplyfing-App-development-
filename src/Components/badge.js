import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BadgeNative = ({ label, color = "#FF5733" }) => {
  return (
    <View style={[styles.badge, { backgroundColor: color }]}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  text: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default BadgeNative;
