import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import MainContent from "./Maincontent";
import EditorAndPreview from "./Editorandpreview";

function About() {
  const [selectedComponent, setSelectedComponent] = useState({
    title: "Welcome",
    description: "Select a component to view its details.",
    code: "", // Default empty code
  });

  const components = [
    {
      title: "Accordion",
      description: "Details about Accordion",
      code: `
        <Accordion 
          items={[
            { title: "Item 1", content: "Content for Item 1" },
            { title: "Item 2", content: "Content for Item 2" },
            { title: "Item 3", content: "Content for Item 3" },
          ]}
        />
      `,
      example: (
        <EditorAndPreview
          code={`<Accordion items={[{ title: "Item 1", content: "Content for Item 1" }, { title: "Item 2", content: "Content for Item 2" }, { title: "Item 3", content: "Content for Item 3" }]} />`}
        />
      ),
    },
    {
      title: "Alert",
      description: "Details about Alert",
      code: `
        <AlertNative 
          title="Hello!" 
          message="This is an alert example." 
        />
      `,
      example: (
        <EditorAndPreview
          code={`<AlertNative title="Hello!" message="This is an alert example." />`}
        />
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <div className="flex">
          <Sidebar
            items={components.map((comp) => comp.title)}
            onSelect={(title) => {
              const comp = components.find((comp) => comp.title === title);
              setSelectedComponent(comp);
            }}
          />
          <MainContent content={selectedComponent} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
