import React, { useState, useEffect } from "react";
import Joyride from "react-joyride";
import type { Step } from "react-joyride";

const Tutorial: React.FC = () => {
  const [run, setRun] = useState(false);

  const steps: Step[] = [
    {
      target: ".visa-form-card",
      content: "Welcome to the Visa Design AI Assistant! Let's take a quick tour.",
      placement: "center",
      disableBeacon: true,
    },
    {
      target: ".visa-examples-list",
      content: "Here are some example components you can generate.",
      placement: "bottom",
    },
    {
      target: ".visa-input",
      content: "Type the name of the component you want to build here.",
      placement: "bottom",
    },
    {
      target: ".visa-button--primary",
      content: "Click Generate to create your component using Visa Nova design.",
      placement: "right",
    },
    {
      target: ".output-section",
      content: "Your generated component and code will appear here.",
      placement: "top",
    },
  ];
  useEffect(() => {
    const timer = setTimeout(() => setRun(true), 500); // Wait for DOM to mount
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const hasSeenTour = localStorage.getItem("hasSeenTour");
    if (!hasSeenTour) {
      setRun(true);
    }
  }, []);

  const handleTourEnd = () => {
    localStorage.setItem("hasSeenTour", "true");
    setRun(false);
  };

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      showSkipButton
      showProgress
      styles={{
        options: {
          primaryColor: "#142787", // Visa blue
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
