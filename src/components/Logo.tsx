import React from "react";
import { Box, Text } from "@mantine/core";

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
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lg-a" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7701CF" />
            <stop offset="55%" stopColor="#B16DFB" />
            <stop offset="100%" stopColor="#00B0F0" />
          </linearGradient>
          <linearGradient id="lg-b" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7030A0" />
            <stop offset="50%" stopColor="#00B0F0" />
            <stop offset="100%" stopColor="#A3E7FF" />
          </linearGradient>
        </defs>
        <g transform="translate(32 36)">
          <g transform="rotate(-18)">
            <text
              x="0"
              y="11"
              textAnchor="middle"
              fontFamily="Georgia, 'Times New Roman', serif"
              fontSize="56"
              fill="url(#lg-a)"
              fontStyle="italic"
            >
              P
            </text>
          </g>
          <g transform="rotate(22)">
            <text
              x="0"
              y="11"
              textAnchor="middle"
              fontFamily="Georgia, 'Times New Roman', serif"
              fontSize="56"
              fill="url(#lg-b)"
              fontStyle="italic"
            >
              P
            </text>
          </g>
        </g>
      </svg>
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
