import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Globe,
  Phone,
  ChevronRight,
  Sparkles,
  Calendar,
  Search,
} from "lucide-react";

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
        "Dermal Filler",
        "Lip Filler",
        "Chin Filler",
        "Jawline Filler",
        "Nose Thread Lift",
        "Masseter Botox",
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
      regenerative: [
        "Testosterone Therapy Malaysia",
        "ED Treatment Malaysia",
        "Hormone Replacement Therapy Malaysia",
        "PCOS Treatment Malaysia",
        "Hypothyroidism Treatment Malaysia",
        "Stem Cell Therapy Malaysia",
        "Anti-Aging Therapy Malaysia",
        "Hormone Test Malaysia",
        "Menopause Hormone Replacement Malaysia",
      ],
    },
  },
  { label: "Products", href: "/products" },
  { label: "Blogs", href: "/blogs" },
  // { label: "Cart", href: "/cart", icon: ShoppingCart },
];

const languages = [
  { code: "EN", label: "English", flag: "🇺🇸", href: "/en/" },
  { code: "ID", label: "Indonesia", flag: "🇮🇩", href: "/id/" },
  { code: "MS", label: "Melayu", flag: "🇲🇾", href: "/ms/" },
  { code: "ZH", label: "中文", flag: "🇨🇳", href: "/zh/" },
  { code: "AR", label: "العربية", flag: "🇸🇦", href: "/ar/" },
];

const categoryLabels: Record<string, string> = {
  weightLoss: "Fat & Weight Loss",
  skin: "Skin",
  face: "Face",
  hair: "Hair",
  regenerative: "Regenerative",
};

type SearchResult = { label: string; href: string; category: string };

const buildSearchIndex = (): SearchResult[] => {
  const results: SearchResult[] = [];
  navItems.forEach((item) => {
    if (item.submenu) {
      Object.entries(item.submenu).forEach(([category, items]) => {
        (items as string[]).forEach((subItem) => {
          results.push({
            label: subItem,
            href: toSlug(subItem),
            category: categoryLabels[category] ?? category,
          });
        });
      });
    } else if (item.href && item.href !== "#") {
      results.push({ label: item.label, href: item.href, category: "Page" });
    }
  });
  return results;
};

const searchIndex = buildSearchIndex();

// ── Highlight helper ─────
const highlightMatch = (text: string, query: string) => {
  if (!query) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span className="text-wine font-semibold">
        {text.slice(idx, idx + query.length)}
      </span>
      {text.slice(idx + query.length)}
    </>
  );
};

// ── Desktop Search Box
const DesktopSearchBox = ({ isScrolled }: { isScrolled: boolean }) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => setDebouncedQuery(val), 300);
  };

  const results =
    debouncedQuery.trim().length > 1
      ? searchIndex
          .filter((item) =>
            item.label.toLowerCase().includes(debouncedQuery.toLowerCase()),
          )
          .slice(0, 8)
      : [];

  useEffect(() => {
    setIsOpen(results.length > 0);
  }, [results.length]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (href: string) => {
    window.location.href = href;
    setQuery("");
    setDebouncedQuery("");
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <div
        className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300 ${
          isScrolled
            ? "bg-cream/60 border-taupe/20 hover:border-wine/30 focus-within:border-wine/50 focus-within:bg-light"
            : "bg-light/20 border-light/30 hover:border-light/50 focus-within:bg-light/30 focus-within:border-light/60"
        }`}
      >
        <Search
          size={15}
          className={isScrolled ? "text-taupe" : "text-brown/80"}
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => results.length > 0 && setIsOpen(true)}
          placeholder="Search treatments..."
          className="bg-transparent outline-none text-sm font-inter w-36 md:w-36 placeholder:text-taupe/60 transition-all duration-300 text-brown"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setDebouncedQuery("");
              setIsOpen(false);
              inputRef.current?.focus();
            }}
            className="text-taupe hover:text-wine transition-colors"
          >
            <X size={13} />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-full right-0 mt-2 w-72 bg-light rounded-2xl shadow-2xl shadow-brown/10 border border-cream overflow-hidden z-50"
          >
            <div className="px-4 py-2.5 border-b border-cream">
              <p className="text-taupe text-xs font-inter">
                {results.length} result{results.length !== 1 ? "s" : ""} for
                &ldquo;{debouncedQuery}&rdquo;
              </p>
            </div>
            <ul className="py-2 max-h-72 overflow-y-auto">
              {results.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03 }}
                >
                  <button
                    onClick={() => handleSelect(item.href)}
                    className="w-full text-left flex items-center gap-3 px-4 py-2.5 hover:bg-cream/60 transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-full bg-wine/10 flex items-center justify-center shrink-0">
                      <Search size={13} className="text-wine" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-brown text-sm font-inter truncate">
                        {highlightMatch(item.label, debouncedQuery)}
                      </p>
                      <p className="text-taupe/70 text-xs font-inter">
                        {item.category}
                      </p>
                    </div>
                    <ChevronRight
                      size={14}
                      className="text-taupe ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ── Mobile Inline Search (renders inside the navbar bar, not the menu) ────────
const MobileInlineSearch = ({
  onClose,
  isScrolled,
}: {
  onClose: () => void;
  isScrolled: boolean;
}) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-focus on mount
  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 80);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => setDebouncedQuery(val), 300);
  };

  const results =
    debouncedQuery.trim().length > 1
      ? searchIndex
          .filter((item) =>
            item.label.toLowerCase().includes(debouncedQuery.toLowerCase()),
          )
          .slice(0, 7)
      : [];

  useEffect(() => {
    setIsOpen(results.length > 0);
  }, [results.length]);

  // Click outside → close suggestions (not the bar itself)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (href: string) => {
    window.location.href = href;
  };

  const handleClearOrClose = () => {
    if (query) {
      setQuery("");
      setDebouncedQuery("");
      setIsOpen(false);
      inputRef.current?.focus();
    } else {
      onClose();
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Input row */}
      <div
        className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-200 ${
          isScrolled
            ? "bg-cream/80 border-taupe/30 focus-within:border-wine/50"
            : "bg-light/90 border-light/40 focus-within:border-light/70"
        }`}
      >
        <Search size={16} className="text-taupe shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => results.length > 0 && setIsOpen(true)}
          placeholder="Search treatments..."
          className="bg-transparent outline-none text-sm font-inter text-brown placeholder:text-taupe/50 flex-1 min-w-0"
        />
        <button
          onClick={handleClearOrClose}
          className="text-taupe hover:text-wine transition-colors shrink-0 p-0.5"
        >
          <X size={16} />
        </button>
      </div>

      {/* Suggestions dropdown — positioned below the navbar bar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
            className="absolute top-full left-0 right-0 mt-2 bg-light rounded-2xl shadow-2xl shadow-brown/15 border border-cream overflow-hidden z-60"
          >
            <div className="px-4 py-2.5 border-b border-cream">
              <p className="text-taupe text-xs font-inter">
                {results.length} result{results.length !== 1 ? "s" : ""} untuk
                &ldquo;{debouncedQuery}&rdquo;
              </p>
            </div>
            <ul className="py-2 max-h-60 overflow-y-auto">
              {results.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleSelect(item.href)}
                    className="w-full text-left flex items-center gap-3 px-4 py-3 hover:bg-cream/60 active:bg-cream transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-full bg-wine/10 flex items-center justify-center shrink-0">
                      <Search size={13} className="text-wine" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-brown text-sm font-inter truncate">
                        {highlightMatch(item.label, debouncedQuery)}
                      </p>
                      <p className="text-taupe/70 text-xs">{item.category}</p>
                    </div>
                    <ChevronRight size={14} className="text-taupe shrink-0" />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ── Main Navbar ──────────
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      const malaysiaTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kuala_Lumpur",
      });
      const now = new Date(malaysiaTime);
      const hour = now.getHours();
      setIsActive(hour >= 9 && hour < 18);
    };
    checkTime();
    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
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
        setIsMobileSearchOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const openMobileSearch = () => {
    setIsMobileSearchOpen(true);
    setIsMenuOpen(false);
    setMobileSubmenu(null);
  };

  const closeMobileSearch = () => {
    setIsMobileSearchOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-light/95 backdrop-blur-xl shadow-lg shadow-brown/5 mt-4 md:mt-0"
            : "bg-transparent"
        }`}
      >
        {/* Top Bar */}
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
                      <span>
                        Doctor is {isActive ? "Available" : "Close"} Now
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Nav */}
        <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 lg:h-20 gap-3">
            {/* Logo — hidden when mobile search is open to give space */}
            <AnimatePresence>
              {!isMobileSearchOpen && (
                <motion.a
                  href="/"
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 relative z-10 overflow-hidden"
                >
                  <img
                    src="/images/logo.png"
                    alt="Nexus Clinic Logo"
                    className="h-24 md:h-32 w-auto"
                  />
                </motion.a>
              )}
            </AnimatePresence>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 ml-auto">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.submenu && handleMouseEnter(item.label)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.submenu ? undefined : item.href}
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
                    {item.submenu && (
                      <motion.div
                        animate={{
                          rotate: activeDropdown === item.label ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={14} />
                      </motion.div>
                    )}
                  </a>

                  {/* Dropdown */}
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
                                      <h4 className="text-brown font-georgia font-semibold text-sm">
                                        {categoryLabels[category]}
                                      </h4>
                                    </div>
                                    <div className="h-px bg-linear-to-r from-wine/20 to-transparent mb-3" />
                                    <ul className="space-y-0.5">
                                      {(items as string[]).map(
                                        (subItem, idx) => (
                                          <li key={idx}>
                                            <motion.a
                                              href={toSlug(subItem)}
                                              whileHover={{ x: 4 }}
                                              className="group/item flex items-center gap-2 text-taupe hover:text-wine text-sm py-1.5 transition-all duration-200"
                                            >
                                              <span className="w-1.5 h-1.5 rounded-full bg-taupe/30 group-hover/item:bg-wine group-hover/item:scale-125 transition-all duration-200" />
                                              <span>{subItem}</span>
                                            </motion.a>
                                          </li>
                                        ),
                                      )}
                                    </ul>
                                  </div>
                                ),
                              )}
                            </div>
                          </div>
                          <div className="bg-linear-to-r from-cream to-cream/50 px-6 py-4 border-t border-rose/10">
                            <a
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
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Desktop Search */}
              <div className="ml-2">
                <DesktopSearchBox isScrolled={isScrolled} />
              </div>

              {/* Language Selector */}
              <div className="relative ml-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className={`flex cursor-pointer items-center gap-2 px-3 py-2.5 rounded-full transition-all duration-300 ${
                    isScrolled
                      ? "text-brown hover:bg-cream"
                      : "text-brown/90 hover:text-brown hover:bg-light/10"
                  }`}
                >
                  <Globe size={16} />
                  <span className="text-sm font-inter font-medium">EN</span>
                  <ChevronDown size={12} />
                </motion.button>

                <AnimatePresence>
                  {isLangOpen && (
                    <>
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
                            Select Language
                          </p>
                        </div>
                        {languages.map((lang, idx) => (
                          <motion.a
                            key={lang.code}
                            href={lang.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.03 }}
                            whileHover={{ backgroundColor: "#F3EFEE" }}
                            className="flex items-center gap-3 px-4 py-2.5 text-brown hover:text-wine transition-colors"
                          >
                            <span className="text-lg">{lang.flag}</span>
                            <div>
                              <span className="text-sm font-inter font-medium block">
                                {lang.code}
                              </span>
                              <span className="text-xs text-taupe">
                                {lang.label}
                              </span>
                            </div>
                          </motion.a>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA */}
              <motion.a
                href="/contact-us"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 8px 30px rgba(140, 79, 88, 0.3)",
                }}
                whileTap={{ scale: 0.97 }}
                className="ml-4 bg-wine text-light px-6 py-2.5 rounded-full font-inter font-semibold text-sm shadow-lg shadow-wine/20 hover:bg-wine/90 transition-all duration-300 flex items-center gap-2"
              >
                <Calendar size={16} />
                <span>Book Now</span>
              </motion.a>
            </nav>

            {/* ── Mobile: Right Actions ── */}
            <div className="flex items-center gap-1 ml-auto lg:hidden">
              <AnimatePresence mode="wait">
                {isMobileSearchOpen ? (
                  /* Full-width inline search bar */
                  <motion.div
                    key="search-open"
                    initial={{ opacity: 0, scaleX: 0.8 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    exit={{ opacity: 0, scaleX: 0.8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    style={{ transformOrigin: "right center" }}
                    className="w-full"
                  >
                    <MobileInlineSearch
                      isScrolled={isScrolled}
                      onClose={closeMobileSearch}
                    />
                  </motion.div>
                ) : (
                  /* Search icon + hamburger */
                  <motion.div
                    key="icons"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-1"
                  >
                    {/* Search button */}
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={openMobileSearch}
                      className={`p-2.5 rounded-full transition-colors ${
                        isScrolled
                          ? "text-brown hover:bg-cream"
                          : "text-brown hover:bg-light/10"
                      }`}
                      aria-label="Open search"
                    >
                      <Search size={20} />
                    </motion.button>

                    {/* Hamburger / Close */}
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                        setMobileSubmenu(null);
                      }}
                      className={`p-2.5 mr-4 rounded-full transition-colors ${
                        isScrolled
                          ? "text-brown hover:bg-cream"
                          : "text-brown hover:bg-light/10"
                      }`}
                      aria-label="Toggle menu"
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="lg:hidden bg-light border-t border-cream shadow-xl shadow-brown/10"
            >
              <div className="max-h-[calc(100dvh-64px)] overflow-y-auto overscroll-contain max-w-screen">
                <div className="px-4 py-6 max-w-screen space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
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
                                              <motion.a
                                                key={idx}
                                                href={toSlug(subItem)}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                  delay: idx * 0.02,
                                                }}
                                                className="text-taupe hover:text-wine text-sm py-2.5 px-3 rounded-lg hover:bg-light transition-all duration-200 flex items-center gap-2"
                                              >
                                                <span className="w-1.5 h-1.5 rounded-full bg-taupe/30" />
                                                {subItem}
                                              </motion.a>
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
                        <a
                          href={item.href}
                          className="flex items-center gap-3 text-brown hover:text-wine hover:bg-cream/50 py-3.5 px-4 rounded-xl font-inter font-medium transition-all duration-200"
                        >
                          {item.label}
                        </a>
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
                      {languages.map((lang, idx) => (
                        <motion.a
                          key={lang.code}
                          href={lang.href}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.35 + idx * 0.03 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 bg-cream hover:bg-rose/10 px-4 py-2.5 rounded-xl text-brown hover:text-wine text-sm font-inter transition-all duration-200"
                        >
                          <span>{lang.flag}</span>
                          <span className="font-medium">{lang.code}</span>
                        </motion.a>
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
                    <a
                      href="/contact-us"
                      className="flex max-w-[93%] items-center justify-center gap-2 bg-wine text-light px-6 py-4 rounded-xl font-inter font-semibold text-center shadow-lg shadow-wine/20 hover:bg-wine/90 transition-all duration-200"
                    >
                      <Calendar size={18} />
                      <span>Book Your Consultation</span>
                    </a>
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
              </div>
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
