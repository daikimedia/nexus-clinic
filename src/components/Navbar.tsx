"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Globe,
  ShoppingCart,
  Phone,
  ChevronRight,
  Sparkles,
  Calendar,
} from "lucide-react";
import {
  languages as supportedLanguages,
  fallbackLng,
  languageNames,
  languageFlags,
} from "@/src/i18n/settings";
import { useTranslation } from "@/src/i18n/client";

const toSlug = (name: string): string => {
  return (
    "/" +
    name
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim()
  );
};

const navItems = [
  {
    label: "Weight Loss",
    href: "#",
    submenu: {
      weightLoss: [
        "Ozempic Malaysia",
        "Wegovy Malaysia",
        "Mounjaro Malaysia",
        "Duromine Malaysia",
        "Doctor Monitored Malaysia",
        "HCG Weight Loss Malaysia",
        "Fat Freezing Malaysia",
        "CoolSculpting Malaysia",
        "GLP-1 Programme Malaysia",
        "ZepBound Malaysia",
        "Semaglutide Malaysia",
        "Tirzepatide Malaysia",
      ],
    },
  },
  {
    label: "Aesthetic Treatments",
    href: "#",
    submenu: {
      skin: [
        "Acne Treatment KL",
        "Acne Scar Treatment KL",
        "Pigmentation Treatment KL",
        "Melasma Treatment KL",
        "Mole Removal KL",
        "HydraFacial KL",
        "Pico Laser KL",
        "Dark Eye Circle Treatment KL",
        "Skin Whitening Treatment KL",
        "Eczema Treatment KL",
      ],
      face: [
        "Botox",
        "Wrinkle & Fine Line Removal",
        "Facial Sculpting / Contouring",
        "Non-surgical Face Lift",
        "Face Contouring",
        "Cheek Augmentation",
      ],
      hair: [
        "Hair Transplant",
        "Fue Hair Transplant",
        "PRP Hair Treatment",
        "Hair Loss Treatment",
        "Beard Transplant",
        "Mesotherapy Hair Loss",
        "Exosome Hair Treatment",
        "Minoxidil Treatment",
        "Finasteride",
      ],
      body: [
        "Stretch Marks",
        "Body Contouring",
        "Emsculpt - Muscle Toning & Fat Loss",
        "Vanquish ME - Fat Reduction",
        "Clatuu - Fat Freezing",
      ],
    },
  },
  { label: "Products", href: "/products" },
  { label: "Blogs", href: "/blogs" },
  { label: "Cart", href: "/cart", icon: ShoppingCart },
];

function getLanguageSwitchHref(targetLocale: string, currentLocale: string, pathname: string) {
  // Remove current locale prefix from pathname
  let cleanPath = pathname;
  const nonDefaultLocales = supportedLanguages.filter((l) => l !== fallbackLng);
  for (const locale of nonDefaultLocales) {
    if (cleanPath.startsWith(`/${locale}/`)) {
      cleanPath = cleanPath.slice(`/${locale}`.length);
      break;
    }
    if (cleanPath === `/${locale}`) {
      cleanPath = "/";
      break;
    }
  }

  // English (default) = no prefix, others get prefix
  if (targetLocale === fallbackLng) {
    return cleanPath || "/";
  }
  return `/${targetLocale}${cleanPath}`;
}

const categoryLabels: Record<string, string> = {
  weightLoss: "Fat & Weight Loss",
  skin: "Skin",
  face: "Face",
  hair: "Hair",
  body: "Body",
};

const Navbar = ({ locale = fallbackLng }: { locale?: string }) => {
  const pathname = usePathname();
  const { t } = useTranslation(locale, "common");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const currentLangCode = locale.toUpperCase();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setMobileSubmenu(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-light/95 backdrop-blur-xl shadow-lg shadow-brown/5"
            : "bg-transparent"
        }`}
      >
        {/* Top Bar - Hidden on scroll */}
        <AnimatePresence>
          {!isScrolled && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="hidden lg:block bg-brown text-light/90 text-xs"
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-6">
                    <a
                      href="tel:0167025699"
                      className="flex items-center gap-2 hover:text-cream transition-colors"
                    >
                      <Phone size={12} />
                      <span>016-702 5699</span>
                    </a>
                    <span className="text-light/40">|</span>
                    <span className="text-light/70">
                      Mon - Sat: 9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <Sparkles size={12} className="text-rose" />
                      <span>Free Consultation Available</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="shrink-0 relative z-10">
              <motion.span
                whileTap={{ scale: 0.98 }}
                className="text-2xl font-georgia text-brown"
              >
                NEXUS<span className="text-wine">CLINIC</span>
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.submenu && handleMouseEnter(item.label)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  {item.submenu ? (
                    <span
                      className={`group flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-inter font-medium transition-all duration-300 cursor-pointer ${
                        isScrolled
                          ? activeDropdown === item.label
                            ? "bg-wine/10 text-wine"
                            : "text-brown hover:text-wine hover:bg-cream"
                          : activeDropdown === item.label
                            ? "bg-light/20 text-wine"
                            : "text-wine/90 hover:bg-light/10"
                      }`}
                    >
                      <span>{item.label}</span>
                      <motion.div
                        animate={{
                          rotate: activeDropdown === item.label ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={14} />
                      </motion.div>
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className={`group flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-inter font-medium transition-all duration-300 cursor-pointer ${
                        isScrolled
                          ? "text-brown hover:text-wine hover:bg-cream"
                          : "text-wine/90 hover:bg-light/10"
                      }`}
                    >
                      {item.icon && <item.icon size={16} />}
                      <span>{item.label}</span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.submenu && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3"
                        style={{
                          width:
                            Object.keys(item.submenu).length > 1
                              ? "720px"
                              : "280px",
                        }}
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {/* Dropdown Arrow */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-light rotate-45 rounded-sm shadow-lg" />

                        <div className="relative bg-light rounded-2xl shadow-2xl shadow-brown/10 border border-cream overflow-hidden">
                          <div className="p-6">
                            <div
                              className={`grid gap-8 ${
                                Object.keys(item.submenu).length > 1
                                  ? "grid-cols-4"
                                  : "grid-cols-1"
                              }`}
                            >
                              {Object.entries(item.submenu).map(
                                ([category, items]) => (
                                  <div key={category}>
                                    <div className="flex items-center gap-2 mb-4">
                                      {/* <span className="text-lg">
                                        {[category]}
                                      </span> */}
                                      <h4 className="text-brown font-georgia font-semibold text-sm">
                                        {categoryLabels[category]}
                                      </h4>
                                    </div>
                                    <div className="h-px bg-linear-to-r from-wine/20 to-transparent mb-3" />
                                    <ul className="space-y-0.5">
                                      {(items as string[]).map(
                                        (subItem, idx) => (
                                          <li key={idx}>
                                            <Link href={toSlug(subItem)}>
                                              <motion.span
                                                whileHover={{ x: 4 }}
                                                className="group/item flex items-center gap-2 text-taupe hover:text-wine text-sm py-1.5 transition-all duration-200"
                                              >
                                                <span className="w-1.5 h-1.5 rounded-full bg-taupe/30 group-hover/item:bg-wine group-hover/item:scale-125 transition-all duration-200" />
                                                <span>{subItem}</span>
                                              </motion.span>
                                            </Link>
                                          </li>
                                        ),
                                      )}
                                    </ul>
                                  </div>
                                ),
                              )}
                            </div>
                          </div>

                          {/* Bottom CTA */}
                          <div className="bg-linear-to-r from-cream to-cream/50 px-6 py-4 border-t border-rose/10">
                            <Link
                              href="/contact-us"
                              className="flex items-center justify-between group"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center">
                                  <Calendar size={18} className="text-wine" />
                                </div>
                                <div>
                                  <p className="text-brown font-inter font-medium text-sm">
                                    Ready to transform?
                                  </p>
                                  <p className="text-taupe text-xs">
                                    Book your free consultation today
                                  </p>
                                </div>
                              </div>
                              <motion.div
                                whileHover={{ x: 4 }}
                                className="flex items-center gap-1 text-wine font-inter font-semibold text-sm"
                              >
                                <span>Book Now</span>
                                <ChevronRight size={16} />
                              </motion.div>
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Language Selector */}
              <div className="relative ml-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-full transition-all duration-300 ${
                    isScrolled
                      ? "text-brown hover:bg-cream"
                      : "text-brown hover:text-wine hover:bg-cream/50"
                  }`}
                >
                  <Globe size={16} />
                  <span className="text-sm font-inter font-medium">{currentLangCode}</span>
                  <ChevronDown size={12} />
                </motion.button>

                <AnimatePresence>
                  {isLangOpen && (
                    <>
                      {/* Backdrop */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0"
                        onClick={() => setIsLangOpen(false)}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-3 bg-light rounded-xl shadow-xl shadow-brown/10 py-2 min-w-44 border border-cream overflow-hidden"
                      >
                        <div className="px-3 pb-2 mb-2 border-b border-cream">
                          <p className="text-taupe text-xs font-inter">
                            {t("nav.selectLanguage")}
                          </p>
                        </div>
                        {supportedLanguages.map((lng, idx) => (
                          <motion.div
                            key={lng}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.03 }}
                          >
                            <Link
                              href={getLanguageSwitchHref(lng, locale, pathname)}
                              onClick={() => setIsLangOpen(false)}
                              className={`flex items-center gap-3 px-4 py-2.5 hover:bg-cream transition-colors ${
                                lng === locale ? "text-wine bg-cream/50" : "text-brown hover:text-wine"
                              }`}
                            >
                              <span className="text-lg">{languageFlags[lng]}</span>
                              <div>
                                <span className="text-sm font-inter font-medium block">
                                  {lng.toUpperCase()}
                                </span>
                                <span className="text-xs text-taupe">
                                  {languageNames[lng]}
                                </span>
                              </div>
                              {lng === locale && (
                                <span className="ml-auto w-2 h-2 rounded-full bg-wine" />
                              )}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact-us"
                className="ml-4 bg-wine text-light px-6 py-2.5 rounded-full font-inter font-semibold text-sm shadow-lg shadow-wine/20 hover:bg-wine/90 transition-all duration-300 flex items-center gap-2"
              >
                <Calendar size={16} />
                <span>{t("nav.bookNow")}</span>
              </Link>
            </nav>

            {/* Mobile: Right Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  setMobileSubmenu(null);
                }}
                className={`p-2.5 mr-6 rounded-full transition-colors ${
                  isScrolled
                    ? "text-brown hover:bg-cream"
                    : "text-brown hover:bg-light/10"
                }`}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X size={22} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu size={22} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-light border-t border-cream overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1 }}
                className="max-h-[calc(100vh-64px)] overflow-y-auto overscroll-contain"
              >
                <div className="px-4 py-6 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.submenu ? (
                        <>
                          <button
                            onClick={() =>
                              setMobileSubmenu(
                                mobileSubmenu === item.label
                                  ? null
                                  : item.label,
                              )
                            }
                            className={`w-full max-w-[93%] flex items-center justify-between py-3.5 px-4 rounded-xl transition-all duration-200 ${
                              mobileSubmenu === item.label
                                ? "bg-cream text-wine"
                                : "text-brown hover:bg-cream/50"
                            }`}
                          >
                            <span className="font-inter font-medium">
                              {item.label}
                            </span>
                            <motion.div
                              animate={{
                                rotate: mobileSubmenu === item.label ? 180 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown size={18} />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {mobileSubmenu === item.label && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                              >
                                <div className="bg-cream/30 rounded-xl mt-2 mb-3 p-4 space-y-6">
                                  {Object.entries(item.submenu).map(
                                    ([category, items], catIdx) => (
                                      <motion.div
                                        key={category}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: catIdx * 0.05 }}
                                      >
                                        <div className="flex items-center gap-2 mb-3">
                                          <h5 className="text-wine font-georgia font-semibold text-sm">
                                            {categoryLabels[category]}
                                          </h5>
                                        </div>
                                        <div className="grid grid-cols-1 gap-1">
                                          {(items as string[]).map(
                                            (subItem, idx) => (
                                              <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                  delay: idx * 0.02,
                                                }}
                                              >
                                                <Link
                                                  href={toSlug(subItem)}
                                                  className="text-taupe hover:text-wine text-sm py-2.5 px-3 rounded-lg hover:bg-light transition-all duration-200 flex items-center gap-2"
                                                >
                                                  <span className="w-1.5 h-1.5 rounded-full bg-taupe/30" />
                                                  {subItem}
                                                </Link>
                                              </motion.div>
                                            ),
                                          )}
                                        </div>
                                      </motion.div>
                                    ),
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center gap-3 text-brown hover:text-wine hover:bg-cream/50 py-3.5 px-4 rounded-xl font-inter font-medium transition-all duration-200"
                        >
                          {item.icon && <item.icon size={18} />}
                          {item.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}

                  {/* Divider */}
                  <div className="my-6 h-px bg-linear-to-r from-transparent via-taupe/20 to-transparent" />

                  {/* Mobile Language Selector */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="text-taupe text-xs font-inter uppercase tracking-wider mb-3 px-4">
                      Select Language
                    </p>
                    <div className="flex flex-wrap gap-2 px-2">
                      {supportedLanguages.map((lng, idx) => (
                        <motion.div
                          key={lng}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.35 + idx * 0.03 }}
                        >
                          <Link
                            href={getLanguageSwitchHref(lng, locale, pathname)}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-inter transition-all duration-200 ${
                              lng === locale
                                ? "bg-wine/10 text-wine border border-wine/20"
                                : "bg-cream hover:bg-rose/10 text-brown hover:text-wine"
                            }`}
                          >
                            <span>{languageFlags[lng]}</span>
                            <span className="font-medium">{lng.toUpperCase()}</span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pt-6 space-y-3"
                  >
                    <Link
                      href="/contact-us"
                      className="flex max-w-[93%] items-center justify-center gap-2 bg-wine text-light px-6 py-4 rounded-xl font-inter font-semibold text-center shadow-lg shadow-wine/20 hover:bg-wine/90 transition-all duration-200"
                    >
                      <Calendar size={18} />
                      <span>{t("nav.bookConsultation")}</span>
                    </Link>
                    <a
                      href="tel:0167025699"
                      className="flex w-full max-w-[93%] items-center justify-center gap-2 text-taupe hover:text-wine py-3 font-inter transition-colors"
                    >
                      <Phone size={16} />
                      <span className="font-medium">016-702 5699</span>
                    </a>
                  </motion.div>

                  {/* Bottom Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="pt-6 text-center"
                  >
                    <p className="text-taupe/60 text-xs font-inter">
                      Mon - Sat: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-taupe/60 text-xs font-inter mt-1">
                      Wisma UOA II, Kuala Lumpur
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer */}
      <div className={`${isScrolled ? "h-16 lg:h-20" : "h-16 lg:h-28"}`} />
    </>
  );
};

export default Navbar;
