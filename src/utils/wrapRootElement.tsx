import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { theme } from "@/styles/theme";
import { LanguageProvider } from "@/i18n";

interface WrapperProps {
  element: React.ReactNode;
}

export const wrapRootElement = ({ element }: WrapperProps) => {
  return (
    <MantineProvider theme={theme}>
      <ColorSchemeScript />
      <Notifications position="top-right" />
      <LanguageProvider>{element}</LanguageProvider>
    </MantineProvider>
  );
};
