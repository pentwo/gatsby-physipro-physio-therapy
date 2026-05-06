import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Title, Text, Grid } from "@mantine/core";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Eyebrow, PageHero, CtaBand } from "@/components/ui";
import { useLanguage } from "@/i18n";

const AboutPage: React.FC<PageProps> = () => {
  const { t } = useLanguage();

  const PHILOSOPHY = [
    { n: "01", t: t.about.phil1Title, d: t.about.phil1Desc },
    { n: "02", t: t.about.phil2Title, d: t.about.phil2Desc },
    { n: "03", t: t.about.phil3Title, d: t.about.phil3Desc },
  ];

  const CREDENTIALS = [
    { y: "2018", t: t.about.credMaster, org: t.about.credMasterOrg },
    { y: "2014", t: t.about.credBachelor, org: t.about.credBachelorOrg },
    { y: "Cert.", t: t.about.credDiploma, org: t.about.credDiplomaOrg },
    { y: "Cert.", t: t.about.credNKT, org: t.about.credNKTOrg },
    { y: "Cert.", t: t.about.credPelvic, org: t.about.credPelvicOrg },
    { y: "Cert.", t: t.about.credVestibular, org: t.about.credVestibularOrg },
  ];

  return (
    <Layout active="about">
      <PageHero
        eyebrow={t.about.eyebrow}
        crumb={t.nav.about}
        title={t.about.title}
        lede={t.about.lede}
      />

      {/* Bio + portrait */}
      <Box component="section" className="s">
        <Box className="wrap about-grid">
          <Box className="about-portrait">
            <StaticImage
              src="../images/hero/about.webp"
              alt="Vienn Chan"
              style={{ width: "100%", height: "100%" }}
              imgStyle={{ objectFit: "cover" }}
            />
            <Box className="about-cred">
              <Box>
                <b>{t.about.cred1Title}</b>{t.about.cred1Val}
              </Box>
              <Box>
                <b>{t.about.cred2Title}</b>{t.about.cred2Val}
              </Box>
              <Box>
                <b>{t.about.cred3Title}</b>{t.about.cred3Val}
              </Box>
            </Box>
          </Box>
          <Box className="about-body">
            <Eyebrow>{t.about.bioEyebrow}</Eyebrow>
            <Title
              order={2}
              className="h-section"
              style={{ margin: "14px 0 24px", maxWidth: "14ch" }}
            >
              {t.about.bioTitle}
            </Title>
            <Text>{t.about.bioPara1}</Text>
            <Text>{t.about.bioPara2}</Text>
            <Text>{t.about.bioPara3}</Text>
            <Box className="lang-line">
              <span className="l">{t.about.speaksLabel}</span>
              <span className="v" style={{ fontStyle: "italic" }}>
                {t.about.speaksVal}
              </span>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Philosophy strip */}
      <Box
        component="section"
        className="s"
        style={{
          background: "var(--paper)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          paddingTop: 80,
          paddingBottom: 80,
        }}
      >
        <Box className="wrap">
          <Grid gutter={32}>
            {PHILOSOPHY.map((c) => (
              <Grid.Col key={c.n} span={{ base: 12, md: 4 }}>
                <Box style={{ borderTop: "1px solid var(--line)", paddingTop: 24 }}>
                  <Text className="svc-num-big">{c.n}</Text>
                  <Title
                    order={3}
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 28,
                      margin: "8px 0 10px",
                    }}
                  >
                    {c.t}
                  </Title>
                  <Text
                    style={{
                      color: "var(--ink-2)",
                      margin: 0,
                      fontSize: 15,
                      lineHeight: 1.6,
                    }}
                  >
                    {c.d}
                  </Text>
                </Box>
              </Grid.Col>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Credentials */}
      <Box component="section" className="s">
        <Box className="wrap">
          <Box className="s-head">
            <Box>
              <Eyebrow>{t.trust.qualifications}</Eyebrow>
              <Title order={2} className="h-section" style={{ marginTop: 18 }}>
                {t.about.qualTitle}
              </Title>
            </Box>
            <Text className="lede">
              {t.about.qualLede}
            </Text>
          </Box>
          <Grid gutter={16}>
            {CREDENTIALS.map((c, i) => (
              <Grid.Col key={i} span={{ base: 12, md: 6 }}>
                <Box
                  style={{
                    background: "var(--paper)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius)",
                    padding: "20px 24px",
                    display: "grid",
                    gridTemplateColumns: "70px 1fr",
                    gap: 18,
                    alignItems: "flex-start",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 22,
                      color: "var(--violet)",
                    }}
                  >
                    {c.y}
                  </Text>
                  <Box>
                    <Text style={{ fontWeight: 600, fontSize: 16, lineHeight: 1.3 }}>
                      {c.t}
                    </Text>
                    <Text
                      style={{
                        color: "var(--muted)",
                        fontSize: 13,
                        marginTop: 4,
                      }}
                    >
                      {c.org}
                    </Text>
                  </Box>
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

export default AboutPage;

export const Head: HeadFC = () => <Seo title="About" />;
