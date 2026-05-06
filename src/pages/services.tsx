import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Box, Title, Text } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { PageHero, CtaBand } from "@/components/ui";
import { useLanguage } from "@/i18n";

const ServicesPage: React.FC<PageProps> = () => {
  const { t } = useLanguage();

  const SERVICES = [
    {
      n: "01",
      t: t.services.s1,
      img: "musculoskeletal-pain",
      d: t.services.s1Desc,
      items: t.services.s1Items,
    },
    {
      n: "02",
      t: t.services.s2Full,
      img: "sports-injury",
      d: t.services.s2Desc,
      items: t.services.s2Items,
    },
    {
      n: "03",
      t: t.services.s3Full,
      img: "post-operative-rehab",
      d: t.services.s3Desc,
      items: t.services.s3Items,
    },
    {
      n: "04",
      t: t.services.s4Full,
      img: "prenatal-postnatal",
      d: t.services.s4Desc,
      items: t.services.s4Items,
    },
    {
      n: "05",
      t: t.services.s5Full,
      img: "womens-mens-health",
      d: t.services.s5Desc,
      items: t.services.s5Items,
    },
    {
      n: "06",
      t: t.services.s6,
      img: "vestibular-rehabilitation",
      d: t.services.s6Desc,
      items: t.services.s6Items,
    },
  ];

  return (
    <Layout active="services">
      <PageHero
        eyebrow={t.services.eyebrow}
        crumb={t.nav.services}
        title={t.services.title}
        lede={t.services.lede}
      />

      <Box component="section" className="s" style={{ paddingTop: 24 }}>
        <Box className="wrap">
          {SERVICES.map((s, i) => (
            <ServiceDetail key={s.n} service={s} reversed={i % 2 === 1} bookText={t.services.bookThis} />
          ))}
        </Box>
      </Box>

      <CtaBand />
    </Layout>
  );
};

interface ServiceDetailProps {
  service: {
    n: string;
    t: string;
    img: string;
    d: string;
    items: readonly string[];
  };
  reversed: boolean;
  bookText: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, reversed, bookText }) => {
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
    <Box
      className="svc-detail"
      style={reversed ? { gridTemplateColumns: "1.2fr 1fr" } : undefined}
    >
      <Box
        className="svc-detail-img"
        style={reversed ? { order: 2 } : undefined}
      >
        {getImage(service.img)}
      </Box>
      <Box style={reversed ? { order: 1 } : undefined}>
        <Text className="svc-num-big">{service.n} / 06</Text>
        <Title
          order={2}
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(32px, 4vw, 48px)",
            margin: "12px 0 16px",
          }}
        >
          {service.t}
        </Title>
        <Text
          style={{
            color: "var(--ink-2)",
            fontSize: 17,
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {service.d}
        </Text>
        <Box component="ul" className="svc-detail-list">
          {service.items.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </Box>
        <Box style={{ marginTop: 28, display: "flex", gap: 12 }}>
          <Link
            to="/contact"
            className="cta"
            style={{ padding: "11px 18px", fontSize: 13 }}
          >
            {bookText}
            <IconArrowRight size={14} className="arrow" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesPage;

export const Head: HeadFC = () => <Seo title="Services" />;
