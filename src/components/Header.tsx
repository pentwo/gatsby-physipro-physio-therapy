import React, { useState } from "react";
import { Link } from "gatsby";
import { Box, Group, Button, UnstyledButton, Drawer, Stack } from "@mantine/core";
import { IconArrowRight, IconMenu2, IconX } from "@tabler/icons-react";
import { Logo } from "./Logo";
import { useLanguage } from "@/i18n";

interface HeaderProps {
  active?: string;
}

export const Header: React.FC<HeaderProps> = ({ active = "" }) => {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: "/about", label: t.nav.about, key: "about" },
    { href: "/services", label: t.nav.services, key: "services" },
    { href: "/treatments", label: t.nav.treatments, key: "treatments" },
    { href: "/nkt", label: t.nav.nkt, key: "nkt" },
    { href: "/home-care", label: t.nav.homeCare, key: "homecare" },
    { href: "/contact", label: t.nav.contact, key: "contact" },
  ];

  return (
    <>
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

          {/* Desktop nav */}
          <Box
            component="ul"
            className="desktop-nav"
            style={{ display: "flex", gap: 28, listStyle: "none", margin: 0, padding: 0 }}
          >
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

          {/* Language toggle - desktop */}
          <Group gap={2} p={3} className="desktop-nav" style={{ borderRadius: 999, background: "var(--tint)" }}>
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

          {/* CTA - desktop */}
          <Link to="/contact" className="cta desktop-nav">
            {t.nav.bookOnline}
            <IconArrowRight size={14} className="arrow" />
          </Link>

          {/* Mobile hamburger */}
          <UnstyledButton
            className="mobile-nav"
            onClick={() => setMobileOpen(true)}
            style={{ padding: 8 }}
            aria-label="Open menu"
          >
            <IconMenu2 size={24} />
          </UnstyledButton>
        </Box>
      </Box>

      {/* Mobile drawer */}
      <Drawer
        opened={mobileOpen}
        onClose={() => setMobileOpen(false)}
        position="right"
        size="280px"
        withCloseButton={false}
        styles={{
          body: { padding: 0, height: "100%" },
          content: { background: "var(--bg)" },
        }}
      >
        <Box style={{ padding: 20, borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Logo size={28} />
          <UnstyledButton onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <IconX size={24} />
          </UnstyledButton>
        </Box>
        <Stack gap={0} style={{ padding: "12px 0" }}>
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "14px 24px",
                fontSize: 16,
                color: active === item.key ? "var(--violet)" : "var(--ink)",
                textDecoration: "none",
                borderLeft: active === item.key ? "3px solid var(--violet)" : "3px solid transparent",
                background: active === item.key ? "var(--tint)" : "transparent",
              }}
            >
              {item.label}
            </Link>
          ))}
        </Stack>
        <Box style={{ padding: "20px 24px", borderTop: "1px solid var(--line)" }}>
          <Group gap={2} p={3} style={{ borderRadius: 999, background: "var(--tint)", marginBottom: 16 }}>
            <UnstyledButton
              onClick={() => setLang("en")}
              style={{
                flex: 1,
                fontSize: 14,
                padding: "10px 16px",
                borderRadius: 999,
                textAlign: "center",
                color: lang === "en" ? "var(--ink)" : "var(--ink-2)",
                background: lang === "en" ? "var(--paper)" : "transparent",
                boxShadow: lang === "en" ? "var(--shadow-sm)" : "none",
              }}
            >
              EN
            </UnstyledButton>
            <UnstyledButton
              onClick={() => setLang("zh")}
              style={{
                flex: 1,
                fontSize: 14,
                padding: "10px 16px",
                borderRadius: 999,
                textAlign: "center",
                color: lang === "zh" ? "var(--ink)" : "var(--ink-2)",
                background: lang === "zh" ? "var(--paper)" : "transparent",
                boxShadow: lang === "zh" ? "var(--shadow-sm)" : "none",
              }}
            >
              中文
            </UnstyledButton>
          </Group>
          <Link
            to="/contact"
            className="cta"
            onClick={() => setMobileOpen(false)}
            style={{ width: "100%", justifyContent: "center" }}
          >
            {t.nav.bookOnline}
            <IconArrowRight size={14} className="arrow" />
          </Link>
        </Box>
      </Drawer>
    </>
  );
};
