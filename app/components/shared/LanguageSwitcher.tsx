import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router";
import i18n from "~/i18n";

type LanguageSwitcherProps = {
  className?: string;
};

export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { i18n: { language: locale }, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguage = (newLocale: string) => {
    const segments = location.pathname.split("/").filter(Boolean);
    const currentLocale = segments[0];

    if (i18n.supportedLngs.includes(currentLocale)) {
      segments.shift();
    }

    if (newLocale !== i18n.defaultLng) {
      segments.unshift(newLocale);
    }

    navigate(`/${segments.join("/")}${location.search}`, { replace: true });
  };

  return (
    <div className={className}>
      <select
        value={locale}
        onChange={(e) => changeLanguage(e.target.value)}
        className="block w-48 rounded-md border border-neutral-300 bg-white py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:focus:border-white dark:focus:ring-white"
      >
        {i18n.supportedLngs.map((cur) => (
          <option key={cur} value={cur}>
            {t("locale", { context: cur })}
          </option>
        ))}
      </select>
    </div>
  );
}
