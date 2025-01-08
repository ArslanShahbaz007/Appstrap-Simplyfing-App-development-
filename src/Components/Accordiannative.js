import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.item}>
          <TouchableOpacity
            onPress={() => toggleItem(index)}
            style={styles.header}
          >
            <Text style={styles.headerText}>{item.title}</Text>
          </TouchableOpacity>
          {activeIndex === index && (
            <View style={styles.content}>
              <Text style={styles.contentText}>{item.content}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  item: {
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  header: {
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  headerText: {
    fontWeight: "bold",
  },
  content: {
    padding: 16,
    backgroundColor: "#fff",
  },
  contentText: {
    color: "#333",
  },
});

export default Accordion;
