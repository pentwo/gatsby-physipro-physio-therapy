import React from "react";
import { Box } from "@mantine/core";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  active?: string;
  hideHeader?: boolean;
  hideFooter?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  active,
  hideHeader = false,
  hideFooter = false,
}) => {
  return (
    <Box style={{ minHeight: "100vh", background: "var(--bg)" }}>
      {!hideHeader && <Header active={active} />}
      <Box component="main">{children}</Box>
      {!hideFooter && <Footer />}
    </Box>
  );
};
