"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { routing } from "../../../i18n/routing";
import { Locale } from "../../../i18n/routing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCheck } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function LocaleSwitcherDialog() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const changeLocale = (nextLocale: Locale) => {
    const pathSegments = window.location.pathname.split("/");
    pathSegments[1] = nextLocale;
    const newUrl = pathSegments.join("/");
    window.history.replaceState({}, "", newUrl);
    setIsOpen(false);
    window.location.reload();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dialogRef}>
      <Link
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center"
        aria-label={t("label")}
        href="#"
      >
        <FontAwesomeIcon
          icon={faGlobe}
          className="h-6 w-6 text-[#e4ded7] sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10"
        />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 rounded-lg border border-[#2e3440] bg-[#1a1d24] shadow-lg"
          >
            <div className="py-1">
              {routing.locales.map((cur) => (
                <button
                  key={cur}
                  onClick={() => changeLocale(cur)}
                  className="flex w-full items-center justify-between px-4 py-2 text-sm text-[#e4ded7] transition-colors hover:bg-[#2e3440]"
                >
                  <span>{t("locale", { locale: cur })}</span>
                  {locale === cur && (
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="h-4 w-4 text-[#4ade80]"
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
