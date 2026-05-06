import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Box, Title, Text, Group } from "@mantine/core";
import {
  IconStar,
  IconWorld,
  IconActivity,
  IconArrowRight,
} from "@tabler/icons-react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Eyebrow, CtaBand } from "@/components/ui";
import { useLanguage, TranslationKeys } from "@/i18n";

const IndexPage: React.FC<PageProps> = () => {
  const { t } = useLanguage();

  const SERVICES = [
    {
      n: "01",
      t: t.services.s1,
      img: "musculoskeletal-pain",
      tags: t.services.s1Tags,
    },
    {
      n: "02",
      t: t.services.s2,
      img: "sports-injury",
      tags: t.services.s2Tags,
    },
    {
      n: "03",
      t: t.services.s3,
      img: "post-operative-rehab",
      tags: t.services.s3Tags,
    },
    {
      n: "04",
      t: t.services.s4,
      img: "prenatal-postnatal",
      tags: t.services.s4Tags,
    },
    {
      n: "05",
      t: t.services.s5,
      img: "womens-mens-health",
      tags: t.services.s5Tags,
    },
    {
      n: "06",
      t: t.services.s6,
      img: "vestibular-rehabilitation",
      tags: t.services.s6Tags,
    },
  ];
  return (
    <Layout active="home">
      {/* HERO */}
      <Box component="section" className="hero">
        <div className="hero-orn-1" />
        <div className="hero-orn-2" />
        <Box className="wrap hero-grid">
          <Box>
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <Title
              order={1}
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(48px, 7vw, 104px)",
                lineHeight: 0.98,
                letterSpacing: "-.025em",
                marginTop: 22,
              }}
            >
              {t.hero.titlePart1}
              <br />
              {t.hero.titlePart2} <em className="italic-violet">{t.hero.titlePart3}</em>
              <br />
              {t.hero.titlePart4}
            </Title>
            <Text className="lede" style={{ marginTop: 28 }}>
              {t.hero.lede}
            </Text>
            <Group className="hero-meta" gap={14} mt={36} wrap="wrap">
              <span className="pill">
                <IconStar size={14} className="ico" /> {t.hero.pill1}
              </span>
              <span className="pill">
                <IconWorld size={14} className="ico" /> {t.hero.pill2}
              </span>
              <span className="pill">
                <IconActivity size={14} className="ico" /> {t.hero.pill3}
              </span>
            </Group>
            <Group className="hero-cta-row" gap={12} mt={36} wrap="wrap">
              <Link to="/contact" className="cta">
                {t.hero.cta}
                <IconArrowRight size={14} className="arrow" />
              </Link>
              <Link to="/services" className="btn-line">
                {t.hero.ctaSecondary}
              </Link>
            </Group>
          </Box>
          <HeroPortrait t={t} />
        </Box>
      </Box>

      {/* TRUST STRIP */}
      <Box component="section" className="trust">
        <Box className="wrap trust-row">
          <Box>
            <span className="lbl">{t.trust.qualifications}</span>
            <span className="val">{t.trust.qualificationsVal}</span>
          </Box>
          <Box>
            <span className="lbl">{t.trust.specialisations}</span>
            <span className="val">{t.trust.specialisationsVal}</span>
          </Box>
          <Box>
            <span className="lbl">{t.trust.approach}</span>
            <span className="val">{t.trust.approachVal}</span>
          </Box>
          <Box>
            <span className="lbl">{t.trust.coverage}</span>
            <span className="val">{t.trust.coverageVal}</span>
          </Box>
        </Box>
      </Box>

      {/* ABOUT PREVIEW */}
      <Box component="section" className="s">
        <Box className="wrap">
          <Box className="s-head">
            <Box>
              <Eyebrow>{t.about.eyebrow}</Eyebrow>
              <Title
                order={2}
                className="h-section"
                style={{ marginTop: 18 }}
              >
                {t.about.title}
              </Title>
            </Box>
            <Text className="lede">
              {t.about.lede}
            </Text>
          </Box>
          <Box className="about-grid">
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
              <Text>
                {t.hero.lede}
              </Text>
              <Box className="lang-line">
                <span className="l">{t.about.speaksLabel}</span>
                <span className="v" style={{ fontStyle: "italic" }}>
                  {t.about.speaksVal}
                </span>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* SERVICES TEASER */}
      <Box
        component="section"
        className="s"
        style={{
          background: "linear-gradient(180deg, var(--bg) 0%, var(--tint) 100%)",
          paddingTop: 100,
          paddingBottom: 100,
        }}
      >
        <Box className="wrap">
          <Box className="s-head">
            <Box>
              <Eyebrow>{t.services.eyebrow}</Eyebrow>
              <Title order={2} className="h-section" style={{ marginTop: 18 }}>
                {t.services.title}
              </Title>
            </Box>
            <Text className="lede">
              {t.services.lede}
            </Text>
          </Box>
          <Box className="svc-grid">
            {SERVICES.map((s) => (
              <ServiceCard key={s.n} service={s} learnMoreText={t.services.learnMore} />
            ))}
          </Box>
        </Box>
      </Box>

      <CtaBand />
    </Layout>
  );
};

interface HeroPortraitProps {
  t: TranslationKeys;
}

const HeroPortrait: React.FC<HeroPortraitProps> = ({ t }) => (
  <Box style={{ position: "relative" }}>
    <Box className="hero-portrait">
      <StaticImage
        src="../images/hero/banner-1.webp"
        alt="Vienn working with a client"
        style={{ width: "100%", height: "100%" }}
        imgStyle={{ objectFit: "cover", objectPosition: "center 18%" }}
      />
      <Box className="hero-tag">
        <Box>
          <Box className="role">{t.hero.role}</Box>
          <Box className="name">{t.hero.name}</Box>
        </Box>
      </Box>
    </Box>
    <Box className="hero-quote">
      {t.hero.quote}
    </Box>
    <Box className="hero-stats">
      <Box>
        <Box className="n">10+</Box>
        <Box className="l">{t.hero.yearsLabel}</Box>
      </Box>
      <Box className="div" />
      <Box>
        <Box className="n">2</Box>
        <Box className="l">{t.hero.clinicsLabel}</Box>
      </Box>
    </Box>
  </Box>
);

interface ServiceCardProps {
  service: {
    n: string;
    t: string;
    img: string;
    tags: readonly string[];
  };
  learnMoreText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, learnMoreText }) => {
  const getImage = (img: string) => {
    switch (img) {
      case "musculoskeletal-pain":
        return (
          <StaticImage
            src="../images/services/musculoskeletal-pain.webp"
            alt={service.t}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{ objectFit: "cover" }}
          />
        );
      case "sports-injury":
        return (
          <StaticImage
            src="../images/services/sports-injury.webp"
            alt={service.t}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{ objectFit: "cover" }}
          />
        );
      case "post-operative-rehab":
        return (
          <StaticImage
            src="../images/services/post-operative-rehab.webp"
            alt={service.t}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{ objectFit: "cover" }}
          />
        );
      case "prenatal-postnatal":
        return (
          <StaticImage
            src="../images/services/prenatal-postnatal.webp"
            alt={service.t}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{ objectFit: "cover" }}
          />
        );
      case "womens-mens-health":
        return (
          <StaticImage
            src="../images/services/womens-mens-health.webp"
            alt={service.t}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{ objectFit: "cover" }}
          />
        );
      case "vestibular-rehabilitation":
        return (
          <StaticImage
            src="../images/services/vestibular-rehabilitation.webp"
            alt={service.t}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{ objectFit: "cover" }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box component="article" className="svc">
      <Box className="svc-img">
        {getImage(service.img)}
        <span className="svc-num">{service.n}</span>
      </Box>
      <Box className="svc-body">
        <Title order={3}>{service.t}</Title>
        <Box className="svc-tags">
          {service.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </Box>
        <Link to="/services" className="svc-more">
          {learnMoreText}
          <IconArrowRight size={14} />
        </Link>
      </Box>
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo />;
