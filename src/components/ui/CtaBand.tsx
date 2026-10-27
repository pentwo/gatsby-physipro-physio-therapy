import React from "react";
import { Box, Title, Text, Anchor } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { Eyebrow } from "./Eyebrow";
import { useLanguage } from "@/i18n";

export const CtaBand: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Box component="section" className="cta-band">
      <Box className="wrap cta-band-grid">
        <Box>
          <Eyebrow light>{t.ctaBand.eyebrow}</Eyebrow>
          <Title
            order={2}
            className="h-section"
            style={{ marginTop: 14, color: "#fff" }}
          >
            {t.ctaBand.title}
          </Title>
          <Text style={{ color: "#C8CAD9", maxWidth: "50ch", marginTop: 18 }}>
            {t.ctaBand.lede}
          </Text>
        </Box>
        <Box className="actions">
          <Anchor href="tel:+61414783263" className="btn-w">
            {t.ctaBand.callDuncraig}
            <IconArrowRight size={14} />
          </Anchor>
        </Box>
      </Box>
    </Box>
  );
};
