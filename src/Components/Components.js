import React, { useState, useMemo, lazy, Suspense } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import MainContent from "./Maincontent";
import ButtonNative from "./buttonNative";
import Card from "./card";
import ToggleSwitch from "./ToggleSwitch";
import BadgeNative from "./badge";
import ProgressBarNative from "./Progressbar";
// Lazy loading EditorAndPreview for performance
const EditorAndPreview = lazy(() => import("./Editorandpreview"));

function About() {
  const [selectedComponent, setSelectedComponent] = useState({
    title: "Welcome",
    description: "Select a component to view its details.",
    code: "",
  });

  // Memoized component list for performance
  const components = useMemo(
    () => [
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
          <Suspense fallback={<div>Loading...</div>}>
            <EditorAndPreview
              code={`<Accordion items={[{ title: "Item 1", content: "Content for Item 1" }, { title: "Item 2", content: "Content for Item 2" }, { title: "Item 3", content: "Content for Item 3" }]} />`}
            />
          </Suspense>
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
          <Suspense fallback={<div>Loading...</div>}>
            <EditorAndPreview
              code={`<AlertNative title="Hello!" message="This is an alert example." />`}
            />
          </Suspense>
        ),
      },
      {
        title: "Button",
        description: "A simple React Native button.",
        code: `
        <ButtonNative 
          label="Click Me" 
          onPress={() => alert("Button clicked!")} 
        />
      `,
        example: (
          <Suspense fallback={<div>Loading...</div>}>
            <EditorAndPreview
              code={`<ButtonNative label="Click Me" onPress={() => alert("Button clicked!")} />`}
              components={{ ButtonNative }}
            />
          </Suspense>
        ),
      },
      {
        title: "Card",
        description: "A simple Card component for displaying content.",
        code: `
    <Card 
      title="Sample Card" 
      description="This is a simple card component." 
    />
  `,
        example: (
          <Suspense fallback={<div>Loading...</div>}>
            <EditorAndPreview
              code={`<Card title="Sample Card" description="This is a simple card component." />`}
              components={{ Card }}
            />
          </Suspense>
        ),
      },
      {
        title: "ToggleSwitch",
        description:
          "A simple toggle switch for enabling or disabling features.",
        code: `
    <ToggleSwitch label="Dark Mode" initialState={false} />
  `,
        example: (
          <Suspense fallback={<div>Loading...</div>}>
            <EditorAndPreview
              code={`<ToggleSwitch label="Dark Mode" initialState={false} />`}
              components={{ ToggleSwitch }}
            />
          </Suspense>
        ),
      },
      {
        title: "Badge",
        description: "A simple badge component for displaying labels.",
        code: `
    <BadgeNative label="New" color="#FF5733" />
  `,
        example: (
          <Suspense fallback={<div>Loading...</div>}>
            <EditorAndPreview
              code={`<BadgeNative label="New" color="#FF5733" />`}
              components={{ BadgeNative }}
            />
          </Suspense>
        ),
      },
      {
        title: "ProgressBarNative",
        description: "A simple progress bar to show progress percentage.",
        code: `
    <ProgressBarNative progress={0.6} />
  `,
        example: (
          <Suspense fallback={<div>Loading...</div>}>
            <EditorAndPreview
              code={`<ProgressBarNative progress={0.6} />`}
              components={{ ProgressBarNative }}
            />
          </Suspense>
        ),
      },
    ],
    []
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        {/* Responsive Sidebar */}
        <div className="hidden md:block w-64">
          <Sidebar
            items={components.map((comp) => comp.title)}
            onSelect={(title) => {
              const comp = components.find((comp) => comp.title === title);
              setSelectedComponent(
                comp || {
                  title: "Not Found",
                  description: "Component not found.",
                  code: "",
                }
              );
            }}
          />
        </div>
        {/* Main Content */}
        <MainContent content={selectedComponent} />
      </div>
      <Footer />
    </div>
  );
}

export default About;
