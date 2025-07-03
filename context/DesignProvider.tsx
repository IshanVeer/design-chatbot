"use client";
import React, { createContext, useContext, useState } from "react";

interface DesignData {
  imagestyle: "image" | "solid"; // or any other allowed values
  heading: string;
  content: string;
  family: string;
  weight: "normal" | "bold" | "lighter" | "bolder" | number; // valid CSS font weights
  alignment: "left" | "right" | "center" | "justify" | "start" | "end";
  backgroundcolor: string;
  textcolor: string;
  fontsize: number;
  imageopacity: number;
}

interface DesignContextType {
  designData: DesignData;
  updateDesignData: (newData: Partial<DesignData>) => void;
  resetDesign: () => void;
}

// Initial state for the design
const initialDesignState: DesignData = {
  imagestyle: "solid",
  heading: "Your Design Heading",
  content:
    "Your design content goes here. Customize the appearance using the controls.",
  family: "Arial",
  weight: "normal",
  alignment: "left",
  backgroundcolor: "#f0dda8",
  textcolor: "#000000",
  fontsize: 16,
  imageopacity: 50,
};

// Create the context with a default value of undefined
const DesignContext = createContext<DesignContextType | undefined>(undefined);

// Provider to manage the global state
export default function DesignProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [designData, setDesignData] = useState<DesignData>(initialDesignState);

  // Update design data based on partial new data
  const updateDesignData = (newData: Partial<DesignData>) => {
    setDesignData((prev) => ({ ...prev, ...newData }));
  };

  // Reset the design to its initial state
  const resetDesign = () => {
    setDesignData(initialDesignState);
  };

  // The context value that will be provided to the app
  const value: DesignContextType = {
    designData,
    updateDesignData,
    resetDesign,
  };

  return (
    <DesignContext.Provider value={value}>{children}</DesignContext.Provider>
  );
}

// Custom hook to use the context
export const useDesign = () => {
  const context = useContext(DesignContext);
  if (context === undefined) {
    throw new Error("useDesign must be used within a DesignProvider");
  }
  return context;
};
