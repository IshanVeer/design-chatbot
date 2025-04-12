"use client";
import React, { createContext, useContext, useState } from "react";

interface DesignData {
  imagestyle: string;
  heading: string;
  content: string;
  family: string;
  weight: string;
  alignment: string;
  backgroundcolor: string;
  textcolor: string;
  fontsize: number;
  imageopacity: number;
}

interface DesignContextType {
  designData: DesignData;
  editMode: boolean;
  updateDesignData: (newData: Partial<DesignData>) => void;
  updateDesignProperty: (property: keyof DesignData, value: any) => void;
  toggleEditMode: () => void;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  resetDesign: () => void;
}

// Initial state
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

// Pass the correct type to createContext, and set default to undefined
const DesignContext = createContext<DesignContextType | undefined>(undefined);

// Provider
export default function DesignProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [designData, setDesignData] = useState<DesignData>(initialDesignState);
  const [editMode, setEditMode] = useState(true);

  const updateDesignData = (newData: Partial<DesignData>) => {
    setDesignData((prev) => ({ ...prev, ...newData }));
  };

  const updateDesignProperty = (property: keyof DesignData, value: any) => {
    setDesignData((prev) => ({ ...prev, [property]: value }));
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  const resetDesign = () => {
    setDesignData(initialDesignState);
  };

  const value: DesignContextType = {
    designData,
    editMode,
    updateDesignData,
    updateDesignProperty,
    toggleEditMode,
    setEditMode,
    resetDesign,
  };

  return (
    <DesignContext.Provider value={value}>{children}</DesignContext.Provider>
  );
}

// Hook
export const useDesign = () => {
  const context = useContext(DesignContext);
  if (context === undefined) {
    throw new Error("useDesign must be used within a DesignProvider");
  }
  return context;
};
