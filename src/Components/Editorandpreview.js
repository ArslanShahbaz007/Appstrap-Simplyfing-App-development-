import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Editor } from "@monaco-editor/react";
import * as Babel from "@babel/standalone";
import Accordion from "./Accordiannative";
import AlertNative from "./AlertNative"; // Import AlertNative here

const EditorAndPreview = ({ code }) => {
  const [editorCode, setEditorCode] = useState(code);

  const handleEditorChange = (value) => {
    setEditorCode(value);
  };

  const renderComponent = () => {
    try {
      const wrappedCode = `
        const App = () => {
          return (
            ${editorCode}
          );
        };
        App;
      `;

      const transformedCode = Babel.transform(wrappedCode, {
        presets: ["react"],
      }).code;

      const Component = new Function(
        "React",
        "Accordion",
        "AlertNative",
        `${transformedCode}; return App;`
      );
      return Component(React, Accordion, AlertNative)();
    } catch (err) {
      return <Text style={{ color: "red" }}>Error: {err.message}</Text>;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.editor}>
        <Editor
          height="200px"
          defaultLanguage="javascript"
          value={editorCode}
          onChange={handleEditorChange}
          theme="light"
        />
      </View>
      <View style={styles.preview}>
        <Text style={styles.previewTitle}>Preview:</Text>
        {renderComponent()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  editor: {
    marginBottom: 16,
  },
  preview: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  previewTitle: {
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default EditorAndPreview;
