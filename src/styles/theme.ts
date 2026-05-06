import { createTheme, MantineColorsTuple } from "@mantine/core";

// PhysiPro brand colors
const violet: MantineColorsTuple = [
  "#f3f0ff", // 0 - lightest
  "#EAE7FF", // 1 - violet-soft
  "#d4cbff",
  "#b9a8ff",
  "#9d85ff",
  "#8163ff",
  "#5B4BE0", // 6 - brand violet (primary)
  "#4A3CC4", // 7 - hover
  "#3a2fa0",
  "#2a227d",
];

const ink: MantineColorsTuple = [
  "#f5f5f6",
  "#e9e9ec",
  "#d3d4da",
  "#bcbdc7",
  "#a5a7b4",
  "#8B8FA3", // 5 - muted
  "#6B7392",
  "#3D4361", // 7 - ink-2
  "#232944",
  "#10162B", // 9 - ink (primary dark)
];

export const theme = createTheme({
  primaryColor: "violet",
  colors: {
    violet,
    ink,
  },
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, system-ui, 'Segoe UI', sans-serif",
  headings: {
    fontFamily:
      "'Fraunces', 'Cormorant Garamond', Georgia, 'Times New Roman', serif",
    fontWeight: "400",
  },
  defaultRadius: "md",
  radius: {
    sm: "10px",
    md: "14px",
    lg: "24px",
    xl: "32px",
  },
  shadows: {
    sm: "0 2px 12px rgba(16,22,43,.06)",
    md: "0 18px 48px rgba(16,22,43,.14)",
  },
  other: {
    // Custom design tokens
    bg: "#F8F6F0",
    paper: "#FFFFFF",
    tint: "#F1EEE6",
    line: "#E5E1D5",
    violetSoft: "#EAE7FF",
    logoMagenta: "#7701CF",
    logoCyan: "#00B0F0",
    success: "#1F8A5B",
  },
});
