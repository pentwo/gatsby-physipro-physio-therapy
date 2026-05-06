import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Title, Text, Grid } from "@mantine/core";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Eyebrow, PageHero, CtaBand } from "@/components/ui";
import { useLanguage } from "@/i18n";

const TreatmentsPage: React.FC<PageProps> = () => {
  const { t } = useLanguage();

  const TREATMENTS = [
    { n: "01", t: t.treatments.t1, img: "acupuncture", d: t.treatments.t1Desc },
    { n: "02", t: t.treatments.t2, img: "exercise-prescription", d: t.treatments.t2Desc },
    { n: "03", t: t.treatments.t3, img: "soft-tissue-release", d: t.treatments.t3Desc },
    { n: "04", t: t.treatments.t4, img: "taping", d: t.treatments.t4Desc },
    { n: "05", t: t.treatments.t5, img: "cupping", d: t.treatments.t5Desc },
    { n: "06", t: t.treatments.t6, img: "vestibular", d: t.treatments.t6Desc },
    { n: "07", t: t.treatments.t7, img: "neurokinetic-therapy", d: t.treatments.t7Desc },
    { n: "08", t: t.treatments.t8, img: "ultrasound", d: t.treatments.t8Desc },
  ];

  return (
    <Layout active="treatments">
      <PageHero
        eyebrow={t.treatments.eyebrow}
        crumb={t.nav.treatments}
        title={t.treatments.title}
        lede={t.treatments.lede}
      />

      <Box component="section" className="s" style={{ paddingTop: 24 }}>
        <Box className="wrap">
          {/* compact grid */}
          <Box className="tx-row">
            {TREATMENTS.map((tx) => (
              <TreatmentTile key={tx.n} treatment={tx} />
            ))}
          </Box>

          {/* detailed cards */}
          <Box style={{ marginTop: 80 }}>
            <Box className="s-head" style={{ marginBottom: 36 }}>
              <Box>
                <Eyebrow>{t.treatments.detailEyebrow}</Eyebrow>
                <Title order={2} className="h-section" style={{ marginTop: 18 }}>
                  {t.treatments.detailTitle}
                </Title>
              </Box>
              <Text className="lede">
                {t.treatments.detailLede}
              </Text>
            </Box>
            <Grid gutter={24}>
              {TREATMENTS.map((tx) => (
                <Grid.Col key={tx.n} span={{ base: 12, md: 6 }}>
                  <TreatmentCard treatment={tx} />
                </Grid.Col>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>

      <CtaBand />
    </Layout>
  );
};

interface TreatmentProps {
  treatment: {
    n: string;
    t: string;
    img: string;
    d: string;
  };
}

const TreatmentTile: React.FC<TreatmentProps> = ({ treatment }) => {
  const getImage = (img: string) => {
    switch (img) {
      case "acupuncture":
        return (
          <StaticImage
            src="../images/treatments/acupuncture.webp"
            alt={treatment.t}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{ objectFit: "cover" }}
          />
        );
      case "cupping":
        return (
          <StaticImage
            src="../images/treatments/cupping.webp"
            alt={treatment.t}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{ objectFit: "cover" }}
          />
        );
      case "exercise-prescription":
        return (
          <StaticImage
            src="../images/treatments/exercise-prescription.webp"
            alt={treatment.t}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{ objectFit: "cover" }}
          />
        );
      case "neurokinetic-therapy":
        return (
          <StaticImage
            src="../images/treatments/neurokinetic-therapy.webp"
            alt={treatment.t}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{ objectFit: "cover" }}
          />
        );
      case "soft-tissue-release":
        return (
          <StaticImage
            src="../images/treatments/soft-tissue-release.webp"
            alt={treatment.t}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{ objectFit: "cover" }}
          />
        );
      case "taping":
        return (
          <StaticImage
            src="../images/treatments/taping.webp"
            alt={treatment.t}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{ objectFit: "cover" }}
          />
        );
      case "ultrasound":
        return (
          <StaticImage
            src="../images/treatments/ultrasound.webp"
            alt={treatment.t}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{ objectFit: "cover" }}
          />
        );
      case "vestibular":
        return (
          <StaticImage
            src="../images/treatments/vestibular.webp"
            alt={treatment.t}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{ objectFit: "cover" }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box component="article" className="tx">
      <Box className="tx-img">{getImage(treatment.img)}</Box>
      <Box className="tx-cap">
        <span className="name">{treatment.t}</span>
        <span className="num">{treatment.n}</span>
      </Box>
    </Box>
  );
};

const TreatmentCard: React.FC<TreatmentProps> = ({ treatment }) => {
  const getImage = (img: string) => {
    switch (img) {
      case "acupuncture":
        return (
          <StaticImage
            src="../images/treatments/acupuncture.webp"
            alt={treatment.t}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{ objectFit: "cover" }}
          />
        );
      case "cupping":
        return (
          <StaticImage
            src="../images/treatments/cupping.webp"
            alt={treatment.t}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{ objectFit: "cover" }}
          />
        );
      case "exercise-prescription":
        return (
          <StaticImage
            src="../images/treatments/exercise-prescription.webp"
            alt={treatment.t}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{ objectFit: "cover" }}
          />
        );
      case "neurokinetic-therapy":
        return (
          <StaticImage
            src="../images/treatments/neurokinetic-therapy.webp"
            alt={treatment.t}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{ objectFit: "cover" }}
          />
        );
      case "soft-tissue-release":
        return (
          <StaticImage
            src="../images/treatments/soft-tissue-release.webp"
            alt={treatment.t}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{ objectFit: "cover" }}
          />
        );
      case "taping":
        return (
          <StaticImage
            src="../images/treatments/taping.webp"
            alt={treatment.t}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{ objectFit: "cover" }}
          />
        );
      case "ultrasound":
        return (
          <StaticImage
            src="../images/treatments/ultrasound.webp"
            alt={treatment.t}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{ objectFit: "cover" }}
          />
        );
      case "vestibular":
        return (
          <StaticImage
            src="../images/treatments/vestibular.webp"
            alt={treatment.t}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{ objectFit: "cover" }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box className="tx-card">
      <Box className="img">{getImage(treatment.img)}</Box>
      <Box className="body">
        <Text className="num">{treatment.n} / 08</Text>
        <Title
          order={3}
          style={{
            fontFamily: "var(--serif)",
            fontSize: 22,
            lineHeight: 1.15,
          }}
        >
          {treatment.t}
        </Title>
        <Text
          style={{
            margin: 0,
            fontSize: 14,
            color: "var(--ink-2)",
            lineHeight: 1.55,
          }}
        >
          {treatment.d}
        </Text>
      </Box>
    </Box>
  );
};

export default TreatmentsPage;

export const Head: HeadFC = () => <Seo title="Treatments" />;
