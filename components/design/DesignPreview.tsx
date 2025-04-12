"use client";
import React from "react";
import { useDesign } from "@/context/DesignProvider"; // Import the custom hook

const DesignPreview = () => {
  const { designData } = useDesign(); // Access the current design data from the context

  const {
    imagestyle,
    heading,
    content,
    family,
    weight,
    alignment,
    backgroundcolor,
    textcolor,
    fontsize,
    imageopacity,
  } = designData;

  const headingStyle = {
    fontFamily: family,
    fontWeight: weight,
    fontSize: `${fontsize}px`,
    color: textcolor,
    textAlign: alignment,
  };

  const contentStyle = {
    fontFamily: family,
    fontWeight: weight,
    fontSize: `${fontsize}px`,
    color: textcolor,
    textAlign: alignment,
  };

  const imageStyle = {
    opacity: imageopacity / 100,
    backgroundImage:
      imagestyle === "image" ? "url('/assets/images/puppy.jpg')" : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "200px",
    width: "100%",
  };

  return (
    <div style={{ backgroundColor: backgroundcolor }} className="p-5 w-1/2">
      <div style={imageStyle}></div>
      <h2 style={headingStyle}>{heading}</h2>
      <p style={contentStyle}>{content}</p>
    </div>
  );
};

export default DesignPreview;
