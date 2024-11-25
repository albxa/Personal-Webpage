/**
 * Arber Mahmuti
 * Version: 1.0
 * Date: 2024-11-24
 *
 * Description:
 * This file defines the Header component, which provides a fixed navigation bar
 * at the top of the page. It includes links for navigating between different sections
 * of the site (Home, About, Projects, Resume, Contact) and buttons for changing
 * the site's language between English and German. The active link is highlighted,
 * and the component adapts dynamically based on the current route and language.
 */

import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const Header = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  // Checks if the current path matches the provided path
  const isActive = (path) => router.pathname === path;

  // Changes the language of the site
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 px-8 shadow-md z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <span className="text-blue-500">A</span>
          <span className="text-white">M</span>
        </Link>

        {/* Navigation */}
        <nav className="text-lg" style={{ marginLeft: "8%" }}>
          <div className="flex space-x-8">
            {/* Home Link */}
            <Link href="/" className={`hover:text-blue-500 ${isActive("/") ? "font-bold text-white" : ""}`}>
              {t("header.home")}
            </Link>

            {/* About Link */}
            <Link href="/about" className={`hover:text-blue-500 ${isActive("/about") ? "font-bold text-white" : ""}`}>
              {t("header.about")}
            </Link>

            {/* Projects Link */}
            <Link href="/projects" className={`hover:text-blue-500 ${isActive("/projects") ? "font-bold text-white" : ""}`}>
              {t("header.projects")}
            </Link>

            {/* Resume Link */}
            <Link href="/resume" className={`hover:text-blue-500 ${isActive("/resume") ? "font-bold text-white" : ""}`}>
              {t("header.resume")}
            </Link>

            {/* Contact Link */}
            <Link href="/contact" className={`hover:text-blue-500 ${isActive("/contact") ? "font-bold text-white" : ""}`}>
              {t("header.contact")}
            </Link>
          </div>
        </nav>

        {/* Language Switcher */}
        <div className="space-x-4">
          {/* English Button */}
          <button
            onClick={() => changeLanguage("en")}
            className="text-sm text-gray-200 hover:text-white"
          >
            English
          </button>

          {/* Deutsch Button */}
          <button
            onClick={() => changeLanguage("de")}
            className="text-sm text-gray-200 hover:text-white"
          >
            Deutsch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
