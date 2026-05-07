import React from "react";
import { Box, Text } from "@mantine/core";
import LogoSvg from "@/images/logo.svg";

interface LogoProps {
  size?: number;
  dark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 32, dark = false }) => {
  return (
    <Box
      component="span"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        color: dark ? "#fff" : "#10162B",
      }}
    >
      <img src={LogoSvg} alt="" width={size} height={size} aria-hidden="true" />
      <span
        style={{
          lineHeight: 1,
          fontFamily: "var(--serif)",
          fontSize: 24,
          letterSpacing: "-.01em",
        }}
      >
        PhysiPro
        <Text
          component="small"
          style={{
            display: "block",
            fontFamily: "var(--sans)",
            fontSize: 9.5,
            letterSpacing: ".22em",
            textTransform: "uppercase",
            color: dark ? "#9aa1c0" : "#6B7392",
            fontWeight: 500,
            marginTop: 2,
          }}
        >
          Physiotherapy
        </Text>
      </span>
    </Box>
  );
};
