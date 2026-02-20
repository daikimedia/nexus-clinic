"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

export const Footer = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "common");

  const quickLinks = [
    { label: t("footer.aboutUs"), href: "#" },
    { label: t("footer.services"), href: "#" },
    { label: t("footer.treatments"), href: "#" },
    { label: t("footer.blog"), href: "#" },
    { label: t("footer.contact"), href: "#" },
  ];

  return (
    <footer className="bg-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="text-2xl mb-6 block font-georgia text-brown">
              NEXUS<span className="text-wine">CLINIC</span>
            </span>
            <p className="max-w-md mb-6 text-taupe">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-brown">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="inline-block text-taupe hover:text-wine transition-colors"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-brown">{t("footer.contactTitle")}</h4>
            <ul className="space-y-3 text-taupe">
              <li>{t("footer.address")}</li>
              <li>{t("footer.phone")}</li>
              <li>{t("footer.email")}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-taupe/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-taupe">
            {t("footer.copyright")}
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-taupe hover:text-wine transition-colors"
            >
              {t("footer.privacyPolicy")}
            </a>
            <a
              href="#"
              className="text-sm text-taupe hover:text-wine transition-colors"
            >
              {t("footer.termsOfUse")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
