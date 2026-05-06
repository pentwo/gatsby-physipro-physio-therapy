import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Box, Title, Text, Grid, Anchor } from "@mantine/core";
import { IconArrowRight, IconCreditCard } from "@tabler/icons-react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Eyebrow, Crumbs, CtaBand } from "@/components/ui";
import { useLanguage } from "@/i18n";

const NktPage: React.FC<PageProps> = () => {
  const { t } = useLanguage();

  const NKT_POINTS = [
    { t: t.nkt.point1Title, d: t.nkt.point1Desc },
    { t: t.nkt.point2Title, d: t.nkt.point2Desc },
    { t: t.nkt.point3Title, d: t.nkt.point3Desc },
    { t: t.nkt.point4Title, d: t.nkt.point4Desc },
  ];

  const WHO_FOR = [
    { t: t.nkt.who1Title, d: t.nkt.who1Desc },
    { t: t.nkt.who2Title, d: t.nkt.who2Desc },
    { t: t.nkt.who3Title, d: t.nkt.who3Desc },
    { t: t.nkt.who4Title, d: t.nkt.who4Desc },
    { t: t.nkt.who5Title, d: t.nkt.who5Desc },
    { t: t.nkt.who6Title, d: t.nkt.who6Desc },
  ];

  const PAYMENT = [
    { n: t.nkt.pay1, s: t.nkt.pay1Sub },
    { n: t.nkt.pay2, s: t.nkt.pay2Sub },
    { n: t.nkt.pay3, s: t.nkt.pay3Sub },
    { n: t.nkt.pay4, s: t.nkt.pay4Sub },
    { n: t.nkt.pay5, s: t.nkt.pay5Sub },
    { n: t.nkt.pay6, s: t.nkt.pay6Sub },
    { n: t.nkt.pay7, s: t.nkt.pay7Sub },
  ];

  return (
    <Layout active="nkt">
      {/* Dark Hero */}
      <Box component="section" className="nkt-hero">
        <Box className="wrap">
          <Crumbs here={t.nav.nkt} lightBg />
          <Eyebrow light>{t.nkt.eyebrow}</Eyebrow>
          <Title
            order={1}
            style={{
              color: "#fff",
              fontFamily: "var(--serif)",
              fontSize: "clamp(48px, 7vw, 96px)",
              lineHeight: 1,
              letterSpacing: "-.02em",
              marginTop: 18,
            }}
          >
            {t.nkt.title}
          </Title>
          <Text
            className="lede"
            style={{ marginTop: 24, maxWidth: "60ch", color: "#DCDDE7" }}
          >
            {t.nkt.lede}
          </Text>

          <Box className="nkt-grid" style={{ marginTop: 56 }}>
            <Box>
              <Box className="nkt-points">
                {NKT_POINTS.map((p, i) => (
                  <Box className="nkt-point" key={p.t}>
                    <Box className="num">{String(i + 1).padStart(2, "0")}</Box>
                    <Box>
                      <Text
                        component="h4"
                        style={{
                          color: "#fff",
                          fontFamily: "var(--sans)",
                          fontSize: 15,
                          fontWeight: 600,
                          marginBottom: 4,
                        }}
                      >
                        {p.t}
                      </Text>
                      <Text
                        style={{ fontSize: 14, color: "#B7BACB", margin: 0 }}
                      >
                        {p.d}
                      </Text>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Link to="/contact" className="nkt-cta">
                {t.nkt.cta}
                <IconArrowRight size={14} />
              </Link>
            </Box>
            <Box className="nkt-img">
              <StaticImage
                src="../images/services/musculoskeletal-pain.webp"
                alt="NKT assessment"
                style={{ width: "100%", height: "100%" }}
                imgStyle={{ objectFit: "cover" }}
              />
              <span className="nkt-badge">
                <span className="dot" />
                {t.nkt.badge}
              </span>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Who NKT is for */}
      <Box
        component="section"
        className="s"
        style={{ background: "var(--paper)" }}
      >
        <Box className="wrap">
          <Box className="s-head">
            <Box>
              <Eyebrow>{t.nkt.whoEyebrow}</Eyebrow>
              <Title order={2} className="h-section" style={{ marginTop: 18 }}>
                {t.nkt.whoTitle}
              </Title>
            </Box>
            <Text className="lede">
              {t.nkt.whoLede}
            </Text>
          </Box>
          <Grid gutter={16}>
            {WHO_FOR.map((c) => (
              <Grid.Col key={c.t} span={{ base: 12, md: 4 }}>
                <Box
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius)",
                    padding: 24,
                  }}
                >
                  <Title
                    order={3}
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 19,
                      marginBottom: 8,
                    }}
                  >
                    {c.t}
                  </Title>
                  <Text
                    style={{
                      color: "var(--ink-2)",
                      fontSize: 14,
                      lineHeight: 1.55,
                      margin: 0,
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

      {/* Payment */}
      <Box component="section" className="s">
        <Box className="wrap">
          <Box className="s-head">
            <Box>
              <Eyebrow>{t.nkt.paymentEyebrow}</Eyebrow>
              <Title order={2} className="h-section" style={{ marginTop: 18 }}>
                {t.nkt.paymentTitle}
              </Title>
            </Box>
            <Text className="lede">
              {t.nkt.paymentLede}
            </Text>
          </Box>
          <Box className="pay-grid">
            {PAYMENT.map((p) => (
              <Box key={p.n} className="pay">
                <IconCreditCard size={30} className="ico" />
                <Text className="name">{p.n}</Text>
                <Text className="sub">{p.s}</Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <CtaBand />
    </Layout>
  );
};

export default NktPage;

export const Head: HeadFC = () => <Seo title="Neurokinetic Therapy" />;
