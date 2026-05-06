import React from "react";
import { Box, Title, Text } from "@mantine/core";
import { Crumbs } from "./Crumbs";
import { Eyebrow } from "./Eyebrow";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lede?: string;
  crumb?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  lede,
  crumb,
}) => {
  return (
    <Box component="section" className="page-hero">
      <Box className="wrap">
        <Crumbs here={crumb || eyebrow} />
        <Eyebrow>{eyebrow}</Eyebrow>
        <Title
          order={1}
          dangerouslySetInnerHTML={{ __html: title }}
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(48px, 6.5vw, 88px)",
            lineHeight: 1,
            letterSpacing: "-.02em",
            marginTop: 18,
            maxWidth: "18ch",
          }}
        />
        {lede && (
          <Text className="lede" style={{ marginTop: 24 }}>
            {lede}
          </Text>
        )}
      </Box>
    </Box>
  );
};
