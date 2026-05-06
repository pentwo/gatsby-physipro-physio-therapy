import React from "react";
import { Text } from "@mantine/core";

interface EyebrowProps {
  children: React.ReactNode;
  light?: boolean;
}

export const Eyebrow: React.FC<EyebrowProps> = ({ children, light = false }) => {
  return (
    <Text
      component="span"
      className={`eyebrow${light ? " light" : ""}`}
    >
      {children}
    </Text>
  );
};
