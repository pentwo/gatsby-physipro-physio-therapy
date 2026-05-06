import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Box, Title, Text, Anchor, Grid } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Eyebrow, PageHero, CtaBand } from "@/components/ui";
import { useLanguage } from "@/i18n";

const HomeCarePage: React.FC<PageProps> = () => {
  const { t } = useLanguage();

  const HC_ITEMS = [
    t.homeCare.item1,
    t.homeCare.item2,
    t.homeCare.item3,
    t.homeCare.item4,
    t.homeCare.item5,
    t.homeCare.item6,
    t.homeCare.item7,
    t.homeCare.item8,
  ];

  const STEPS = [
    { n: "01", t: t.homeCare.step1Title, d: t.homeCare.step1Desc },
    { n: "02", t: t.homeCare.step2Title, d: t.homeCare.step2Desc },
    { n: "03", t: t.homeCare.step3Title, d: t.homeCare.step3Desc },
  ];

  return (
    <Layout active="homecare">
      <PageHero
        eyebrow={t.homeCare.eyebrow}
        crumb={t.nav.homeCare}
        title={t.homeCare.title}
        lede={t.homeCare.lede}
      />

      <Box component="section" className="s">
        <Box className="wrap hc-grid">
          <Box className="hc-img">
            <StaticImage
              src="../images/services/post-operative-rehab.webp"
              alt="Home care visit"
              style={{ width: "100%", height: "100%" }}
              imgStyle={{ objectFit: "cover" }}
            />
            <Box className="hc-radius">
              <Box className="v">25 km</Box>
              <Box className="l">{t.homeCare.radiusLabel}</Box>
            </Box>
          </Box>
          <Box>
            <Eyebrow>{t.homeCare.whatEyebrow}</Eyebrow>
            <Title order={2} className="h-section" style={{ marginTop: 18 }}>
              {t.homeCare.whatTitle}
            </Title>
            <Text className="lede" style={{ marginTop: 18 }}>
              {t.homeCare.whatLede}
            </Text>
            <Box component="ul" className="hc-list">
              {HC_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </Box>
            <Box style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Anchor href="tel:+61414783263" className="cta">
                {t.homeCare.cta}
                <IconArrowRight size={14} className="arrow" />
              </Anchor>
              <Link to="/contact" className="btn-line">
                {t.homeCare.ctaAlt}
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* How it works */}
      <Box
        component="section"
        className="s"
        style={{
          background: "var(--paper)",
          borderTop: "1px solid var(--line)",
        }}
      >
        <Box className="wrap">
          <Box className="s-head">
            <Box>
              <Eyebrow>{t.homeCare.howEyebrow}</Eyebrow>
              <Title order={2} className="h-section" style={{ marginTop: 18 }}>
                {t.homeCare.howTitle}
              </Title>
            </Box>
          </Box>
          <Grid gutter={24}>
            {STEPS.map((s) => (
              <Grid.Col key={s.n} span={{ base: 12, md: 4 }}>
                <Box
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-l)",
                    padding: "28px 28px 32px",
                  }}
                >
                  <Text className="svc-num-big">{s.n}</Text>
                  <Title
                    order={3}
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 24,
                      margin: "8px 0 12px",
                    }}
                  >
                    {s.t}
                  </Title>
                  <Text
                    style={{
                      color: "var(--ink-2)",
                      fontSize: 15,
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {s.d}
                  </Text>
                </Box>
              </Grid.Col>
            ))}
          </Grid>
        </Box>
      </Box>

      <CtaBand />
    </Layout>
  );
};

export default HomeCarePage;

export const Head: HeadFC = () => <Seo title="Home Care" />;
