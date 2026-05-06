import React from "react";
import { Link } from "gatsby";
import { Box } from "@mantine/core";

interface CrumbsProps {
  here: string;
  lightBg?: boolean;
}

export const Crumbs: React.FC<CrumbsProps> = ({ here, lightBg = false }) => {
  return (
    <Box
      className="crumbs"
      style={lightBg ? { color: "#B6A8FF" } : undefined}
    >
      <Link to="/" style={lightBg ? { color: "#B6A8FF" } : undefined}>
        Home
      </Link>
      <span>›</span>
      <span style={lightBg ? { color: "#fff" } : undefined}>{here}</span>
    </Box>
  );
};
