import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const AlertNative = ({ title = "Default Alert", message = "This is an alert message." }) => {
  const showAlert = () => {
    Alert.alert(title, message, [{ text: "OK" }]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={showAlert}>
        <Text style={styles.buttonText}>Show Alert</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AlertNative;
