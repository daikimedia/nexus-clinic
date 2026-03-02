"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export const Footer = ({ locale }: { locale?: string }) => {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
    setMounted(true);
  }, [locale, i18n]);

  if (!mounted) {
    return (
      <footer className="bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <span className="text-2xl mb-6 block font-georgia text-brown">
                NEXUS<span className="text-wine">CLINIC</span>
              </span>
              <div className="h-20 bg-gray-100 animate-pulse rounded" />
            </div>
          </div>
        </div>
      </footer>
    );
  }

  const getNavHref = (path: string) => {
    if (!locale || locale === "en") return path;
    return `/${locale}${path}`;
  };

  const quickLinks = [
    { label: t("footer.aboutUs"), href: "/about-us" },
    { label: t("footer.services"), href: "/services" },
    { label: t("footer.treatments"), href: "/treatments" },
    { label: t("footer.blog"), href: "/blogs" },
    { label: t("footer.contact"), href: "/contact-us" },
  ];

  const legalLinks = [
    { label: t("footer.privacyPolicy"), href: "/privacy-policy" },
    { label: t("footer.termsOfUse"), href: "/terms-of-use" },
  ];

  return (
    <footer className="bg-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <span className="text-2xl mb-6 block font-georgia text-brown">
              NEXUS<span className="text-wine">CLINIC</span>
            </span>
            <p className="max-w-md mb-6 text-taupe">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-brown">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={getNavHref(link.href)}
                    whileHover={{ x: 5 }}
                    className="inline-block text-taupe hover:text-wine transition-colors"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-brown">{t("footer.contactTitle")}</h4>
            <ul className="space-y-3 text-taupe">
              <li>{t("footer.address")}</li>
              <li>
                <a href={`tel:${t("footer.phone").replace(/\s/g, '')}`} className="hover:text-wine transition-colors">
                  {t("footer.phone")}
                </a>
              </li>
              <li>
                <a href={`mailto:${t("footer.email")}`} className="hover:text-wine transition-colors">
                  {t("footer.email")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-taupe/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-taupe">
            {t("footer.copyright")}
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.href}
                href={getNavHref(link.href)}
                className="text-sm text-taupe hover:text-wine transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};