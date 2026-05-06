import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Box, Title, Text, Grid, Anchor } from "@mantine/core";
import {
  IconPhone,
  IconMail,
  IconClock,
  IconMapPin,
  IconArrowRight,
} from "@tabler/icons-react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Eyebrow, Crumbs } from "@/components/ui";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/i18n";

const ContactPage: React.FC<PageProps> = () => {
  const { t } = useLanguage();

  return (
    <Layout hideFooter>
      {/* Dark Contact Hero */}
      <Box
        component="section"
        className="contact-bg"
        style={{ padding: "88px 0 96px" }}
      >
        <Box className="wrap">
          <Crumbs here={t.nav.contact} lightBg />
          <Eyebrow light>{t.contact.eyebrow}</Eyebrow>
          <Title
            order={1}
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(48px, 7vw, 96px)",
              lineHeight: 1,
              letterSpacing: "-.02em",
              marginTop: 18,
              maxWidth: "20ch",
              color: "#fff",
            }}
          >
            {t.contact.title}
          </Title>
          <Text
            className="lede"
            style={{ marginTop: 24, maxWidth: "52ch", color: "#C8CAD9" }}
          >
            {t.contact.lede}
          </Text>

          <Box className="loc-grid" style={{ marginTop: 56 }}>
            {/* Duncraig */}
            <Box className="loc">
              <Title
                order={3}
                style={{
                  color: "#fff",
                  fontFamily: "var(--serif)",
                  fontSize: 30,
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                  marginBottom: 0,
                }}
              >
                Duncraig{" "}
                <Text
                  component="small"
                  style={{
                    fontSize: 12,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: "#B6A8FF",
                    fontFamily: "var(--sans)",
                    fontWeight: 500,
                  }}
                >
                  {t.contact.duncraigDays}
                </Text>
              </Title>
              <Box className="row">
                <Box className="ico">
                  <IconPhone size={16} />
                </Box>
                <Box>
                  <Box className="lbl">{t.contact.phoneSms}</Box>
                  <Box className="val">
                    <Anchor href="tel:+61414783263">+61 414 783 263</Anchor>
                  </Box>
                </Box>
              </Box>
              <Box className="row">
                <Box className="ico">
                  <IconMail size={16} />
                </Box>
                <Box>
                  <Box className="lbl">{t.contact.email}</Box>
                  <Box className="val">
                    <Anchor href="mailto:physiprophysiotherapy@gmail.com">
                      physiprophysiotherapy@gmail.com
                    </Anchor>
                  </Box>
                </Box>
              </Box>
              <Box className="row">
                <Box className="ico">
                  <IconClock size={16} />
                </Box>
                <Box style={{ flex: 1 }}>
                  <Box className="lbl">{t.contact.hours}</Box>
                  <Box className="hours">
                    <Box>
                      <Box className="d">{t.contact.tue}</Box>
                      <Box className="t">9:00–17:00</Box>
                    </Box>
                    <Box>
                      <Box className="d">{t.contact.thu}</Box>
                      <Box className="t">9:00–17:00</Box>
                    </Box>
                    <Box>
                      <Box className="d">{t.contact.sat}</Box>
                      <Box className="t">9:00–13:00</Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Anchor href="tel:+61414783263" className="loc-cta">
                {t.contact.callNow}
                <IconArrowRight size={14} />
              </Anchor>
            </Box>

            {/* Northbridge */}
            <Box className="loc">
              <Title
                order={3}
                style={{
                  color: "#fff",
                  fontFamily: "var(--serif)",
                  fontSize: 30,
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                  marginBottom: 0,
                }}
              >
                Northbridge{" "}
                <Text
                  component="small"
                  style={{
                    fontSize: 12,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: "#B6A8FF",
                    fontFamily: "var(--sans)",
                    fontWeight: 500,
                  }}
                >
                  {t.contact.northbridgeDays}
                </Text>
              </Title>
              <Box className="row">
                <Box className="ico">
                  <IconMapPin size={16} />
                </Box>
                <Box>
                  <Box className="lbl">{t.contact.address}</Box>
                  <Box className="val">
                    Skin and Medical Northbridge
                    <br />
                    Perth WA 6000
                  </Box>
                </Box>
              </Box>
              <Box className="row">
                <Box className="ico">
                  <IconPhone size={16} />
                </Box>
                <Box>
                  <Box className="lbl">{t.contact.phoneSms}</Box>
                  <Box className="val">
                    <Anchor href="tel:+61865585188">08 6558 5188</Anchor>
                  </Box>
                </Box>
              </Box>
              <Box className="row">
                <Box className="ico">
                  <IconClock size={16} />
                </Box>
                <Box style={{ flex: 1 }}>
                  <Box className="lbl">{t.contact.hours}</Box>
                  <Box className="hours">
                    <Box>
                      <Box className="d">{t.contact.mon}</Box>
                      <Box className="t">9:00–17:00</Box>
                    </Box>
                    <Box>
                      <Box className="d">{t.contact.wed}</Box>
                      <Box className="t">9:00–17:00</Box>
                    </Box>
                    <Box>
                      <Box className="d">{t.contact.fri}</Box>
                      <Box className="t">9:00–17:00</Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Anchor
                href="https://www.hotdoc.com.au/medical-centres/perth-WA-6000/skin-and-medical-northbridge/doctors"
                target="_blank"
                rel="noopener noreferrer"
                className="loc-cta alt"
              >
                {t.contact.bookHotDoc}
                <IconArrowRight size={14} />
              </Anchor>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Home visit + telehealth row */}
      <Box component="section" className="s">
        <Box className="wrap">
          <Grid gutter={24}>
            {[
              {
                title: t.contact.homeVisits,
                desc: t.contact.homeVisitsDesc,
                cta: t.contact.requestHomeVisit,
              },
              {
                title: t.contact.telehealth,
                desc: t.contact.telehealthDesc,
                cta: t.contact.bookTelehealth,
              },
            ].map((c) => (
              <Grid.Col key={c.title} span={{ base: 12, md: 6 }}>
                <Box
                  style={{
                    background: "var(--paper)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-l)",
                    padding: 32,
                  }}
                >
                  <Eyebrow>{t.contact.offSiteEyebrow}</Eyebrow>
                  <Title
                    order={3}
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 32,
                      margin: "14px 0 12px",
                    }}
                  >
                    {c.title}
                  </Title>
                  <Text
                    style={{
                      color: "var(--ink-2)",
                      fontSize: 15,
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {c.desc}
                  </Text>
                  <Anchor
                    href="tel:+61414783263"
                    className="btn-line"
                    style={{ marginTop: 22 }}
                  >
                    {c.cta}
                  </Anchor>
                </Box>
              </Grid.Col>
            ))}
          </Grid>
        </Box>
      </Box>

      <Footer />
    </Layout>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <Seo title="Contact" />;
