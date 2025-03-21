import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

const ToggleSwitch = ({ label = "Enable Feature", initialState = false }) => {
  const [isEnabled, setIsEnabled] = useState(initialState);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        value={isEnabled}
        onValueChange={() => setIsEnabled(!isEnabled)}
        trackColor={{ false: "#767577", true: "#007BFF" }}
        thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
});

export default ToggleSwitch;
