import React from "react";
import { Link } from "gatsby";
import { Box, Group, Button, UnstyledButton } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { Logo } from "./Logo";
import { useLanguage } from "@/i18n";

interface HeaderProps {
  active?: string;
}

export const Header: React.FC<HeaderProps> = ({ active = "" }) => {
  const { lang, setLang, t } = useLanguage();

  const navItems = [
    { href: "/about", label: t.nav.about, key: "about" },
    { href: "/services", label: t.nav.services, key: "services" },
    { href: "/treatments", label: t.nav.treatments, key: "treatments" },
    { href: "/nkt", label: t.nav.nkt, key: "nkt" },
    { href: "/home-care", label: t.nav.homeCare, key: "homecare" },
    { href: "/contact", label: t.nav.contact, key: "contact" },
  ];
  return (
    <Box
      component="header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        background: "rgba(248,246,240,.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <Box
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          paddingTop: 18,
          paddingBottom: 18,
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo />
        </Link>

        <Box component="ul" style={{ display: "flex", gap: 28, listStyle: "none", margin: 0, padding: 0 }}>
          {navItems.map((item) => (
            <li key={item.key}>
              <Link
                to={item.href}
                style={{
                  fontSize: 14,
                  color: active === item.key ? "var(--ink)" : "var(--ink-2)",
                  textDecoration: "none",
                  padding: "6px 0",
                  borderBottom: active === item.key ? "1px solid var(--violet)" : "1px solid transparent",
                  transition: "color .2s",
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </Box>

        <Box style={{ flex: 1 }} />

        <Group gap={2} p={3} style={{ borderRadius: 999, background: "var(--tint)" }}>
          <UnstyledButton
            onClick={() => setLang("en")}
            style={{
              fontSize: 12,
              padding: "6px 12px",
              borderRadius: 999,
              color: lang === "en" ? "var(--ink)" : "var(--ink-2)",
              background: lang === "en" ? "var(--paper)" : "transparent",
              boxShadow: lang === "en" ? "var(--shadow-sm)" : "none",
              transition: "all 0.2s ease",
            }}
          >
            EN
          </UnstyledButton>
          <UnstyledButton
            onClick={() => setLang("zh")}
            style={{
              fontSize: 12,
              padding: "6px 12px",
              borderRadius: 999,
              color: lang === "zh" ? "var(--ink)" : "var(--ink-2)",
              background: lang === "zh" ? "var(--paper)" : "transparent",
              boxShadow: lang === "zh" ? "var(--shadow-sm)" : "none",
              transition: "all 0.2s ease",
            }}
          >
            中文
          </UnstyledButton>
        </Group>

        <Link to="/contact" className="cta">
          {t.nav.bookOnline}
          <IconArrowRight size={14} className="arrow" />
        </Link>
      </Box>
    </Box>
  );
};
