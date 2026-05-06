import React from "react";
import { Link } from "gatsby";
import { Box, Text, Group, Anchor } from "@mantine/core";
import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";
import { Logo } from "./Logo";
import { useLanguage } from "@/i18n";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Box
      component="footer"
      style={{
        background: "#0B0F1F",
        color: "#B5B7C9",
        padding: "72px 0 32px",
        fontSize: 14,
      }}
    >
      <Box className="wrap">
        <Box
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            paddingBottom: 48,
            borderBottom: "1px solid rgba(255,255,255,.08)",
          }}
        >
          <Box>
            <Logo dark />
            <Text
              style={{
                marginTop: 14,
                maxWidth: "38ch",
                fontSize: 14,
                lineHeight: 1.65,
              }}
            >
              {t.footer.tagline}
            </Text>
            <Group gap={10} mt={18}>
              <Anchor
                href="https://www.facebook.com/vienn.physipro.physiotherapy.perth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{
                  width: 34,
                  height: 34,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,255,255,.16)",
                  borderRadius: 999,
                  color: "#B5B7C9",
                }}
              >
                <IconBrandFacebook size={14} />
              </Anchor>
              <Anchor
                href="https://www.instagram.com/vienn_perth_physio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: 34,
                  height: 34,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,255,255,.16)",
                  borderRadius: 999,
                  color: "#B5B7C9",
                }}
              >
                <IconBrandInstagram size={14} />
              </Anchor>
            </Group>
          </Box>

          <Box>
            <Text
              component="h4"
              style={{
                fontFamily: "var(--sans)",
                fontSize: 12,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "#fff",
                fontWeight: 600,
                marginBottom: 14,
              }}
            >
              {t.footer.explore}
            </Text>
            <FooterLink to="/about">{t.nav.about}</FooterLink>
            <FooterLink to="/services">{t.nav.services}</FooterLink>
            <FooterLink to="/treatments">{t.nav.treatments}</FooterLink>
            <FooterLink to="/nkt">{t.nav.nkt}</FooterLink>
            <FooterLink to="/home-care">{t.nav.homeCare}</FooterLink>
          </Box>

          <Box>
            <Text
              component="h4"
              style={{
                fontFamily: "var(--sans)",
                fontSize: 12,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "#fff",
                fontWeight: 600,
                marginBottom: 14,
              }}
            >
              Duncraig
            </Text>
            <FooterExternalLink href="tel:+61414783263">
              0414 783 263
            </FooterExternalLink>
            <FooterExternalLink href="mailto:physiprophysiotherapy@gmail.com">
              {t.contact.email}
            </FooterExternalLink>
            <Text style={{ display: "block", fontSize: 14, padding: "4px 0" }}>
              Tue · Thu · Sat
            </Text>
          </Box>

          <Box>
            <Text
              component="h4"
              style={{
                fontFamily: "var(--sans)",
                fontSize: 12,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "#fff",
                fontWeight: 600,
                marginBottom: 14,
              }}
            >
              Northbridge
            </Text>
            <FooterExternalLink href="tel:+61865585188">
              08 6558 5188
            </FooterExternalLink>
            <FooterExternalLink href="https://www.hotdoc.com.au/medical-centres/perth-WA-6000/skin-and-medical-northbridge/doctors">
              {t.contact.bookHotDoc}
            </FooterExternalLink>
            <Text style={{ display: "block", fontSize: 14, padding: "4px 0" }}>
              Mon · Wed · Fri
            </Text>
          </Box>
        </Box>

        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 28,
            fontSize: 12,
            color: "#6F7390",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <Text>{t.footer.copyright}</Text>
          <Text>{t.footer.credentials}</Text>
        </Box>
      </Box>
    </Box>
  );
};

const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({
  to,
  children,
}) => (
  <Link
    to={to}
    style={{
      display: "block",
      padding: "4px 0",
      color: "#B5B7C9",
      textDecoration: "none",
      transition: "color .2s",
    }}
  >
    {children}
  </Link>
);

const FooterExternalLink: React.FC<{
  href: string;
  children: React.ReactNode;
}> = ({ href, children }) => (
  <Anchor
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    style={{
      display: "block",
      padding: "4px 0",
      color: "#B5B7C9",
      textDecoration: "none",
      transition: "color .2s",
    }}
  >
    {children}
  </Anchor>
);
