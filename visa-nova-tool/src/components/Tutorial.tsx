import React, { useState, useEffect } from "react";
import Joyride from "react-joyride";
import type { Step } from "react-joyride";

//Implementation of the tutorial is done via react joyride
const Tutorial: React.FC = () => {
  const [run, setRun] = useState(false);

  const steps: Step[] = [
    {
      target: "body",
      content: "Welcome to the Visa Design AI Assistant! Let's take a quick tour of how to build components.",
      placement: "center",
      disableBeacon: true,
    },
    {
      target: ".visa-design-ai-assistant",
      content: "This is your AI assistant. You can ask it to build various Visa components.",
      placement: "bottom",
      disableBeacon: true,
    },
    {
      target: "input[type='text']",
      content: "Type the name of the component you want to build here. Try: 'responsive login form with remember me', 'search bar', 'payment card form', 'news letter', or '2fa verification form'.",
      placement: "top",
      disableBeacon: true,
    },
    {
      target: "button[disabled]",
      content: "Click the send button to generate your component using Visa Nova design.",
      placement: "left",
      disableBeacon: true,
    },
    {
      target: "[style*='flex: 1.5']",
      content: "Your generated component and code will appear here in the output section.",
      placement: "left",
      disableBeacon: true,
    },
  ];

  //Start tutorial if showTutorial is true
  useEffect(() => {
    const showTutorial = localStorage.getItem("showTutorial");
    if (showTutorial !== "false") {
      const timer = setTimeout(() => setRun(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  //This code is incase the tutorial is started from the tutorial button AND we are currently on the build page
  useEffect(() => {
    const handleTutorialEvent = (event: CustomEvent) => {
      if (event.detail.key === 'showTutorial' && event.detail.value === 'true') {
        setRun(true);
      }
    };

    window.addEventListener('localStorageChange', handleTutorialEvent as EventListener);
    return () => {
      window.removeEventListener('localStorageChange', handleTutorialEvent as EventListener);
    };
  }, []);

  //End tutorial and set showTutorial to false
  const handleTourEnd = () => {
    localStorage.setItem("showTutorial", "false");
    setRun(false);
  };

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      showSkipButton
      showProgress
      disableOverlayClose
      locale={{
        last: "5/5 (End)"
      }}
      styles={{
        options: {
          primaryColor: "#142787",
          zIndex: 1000,
        },
      }}
      callback={(data) => {
        const { status } = data;
        if (status === "finished" || status === "skipped") {
          handleTourEnd();
        }
      }}
    />
  );
};

export default Tutorial;
