/*
 * Arber Mahmuti
 * Version: 1.0
 * Date: 2024-11-24
 * Description: This is the main entry file for the Home page of the portfolio website. 
 * It includes a dynamic typing animation, a hero section, and an introduction section.
 * The content is localized using react-i18next.
 */

import { useState, useEffect } from "react"; 
import { useTranslation } from "react-i18next";
import Header from "../components/Header";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [texts, setTexts] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Update texts when language changes
  useEffect(() => {
    const newTexts = t("home.roles", { returnObjects: true });
    setTexts(newTexts || []);
    setCurrentIndex(0);
    setDisplayedText("");
    setCharIndex(0);
    setIsDeleting(false);
  }, [i18n.language, t]);

  // Typing / deleting animation
  useEffect(() => {
    if (!texts || texts.length === 0) return;

    const handleTyping = () => {
      const currentText = texts[currentIndex];

      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayedText((prev) => prev + currentText[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const speed = isDeleting ? 100 : 150;
    const interval = setInterval(handleTyping, speed);

    return () => clearInterval(interval);
  }, [texts, currentIndex, charIndex, isDeleting]);

  return (
    <div>
      {/* Hero Section */}
      <div className="h-screen bg-gray-800 flex flex-col items-center justify-center text-center text-white">
        <Header />
        <div className="space-y-4">
          <p className="text-3xl font-semibold">{t("home.hello")}</p>

          <p className="text-4xl font-bold">
            {t("home.intro")} <span className="text-blue-500">Arber Mahmuti</span>
          </p>

          <p className="text-2xl text-blue-400 h-[2rem]">
            {displayedText || <span>&nbsp;</span>}
          </p>

          <p className="text-lg mt-4">{t("home.description")}</p>

          <a
            href="#introduce"
            className="inline-block py-3 px-8 border border-blue-500 text-blue-500 font-bold text-lg tracking-wide rounded-lg hover:bg-blue-500 hover:text-gray-800 transition duration-300 mt-8"
          >
            {t("home.cta")}
          </a>
        </div>
      </div>

      {/* Introduction Section */}
      <section
        id="introduce"
        className="px-4 py-16 bg-gray-900 text-white flex flex-col md:flex-row items-center md:justify-between space-y-8 md:space-y-0"
      >
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">{t("home.let_me_introduce.title")}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{t("home.let_me_introduce.intro")}</p>
          <p className="text-lg text-gray-300 leading-relaxed">{t("home.let_me_introduce.traits")}</p>
          <p className="text-lg text-gray-300 leading-relaxed">{t("home.let_me_introduce.vision")}</p>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src="/images/bild_arber.jpeg"
            alt="Arber Mahmuti"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-blue-500 object-cover"
            onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
          />
        </div>
      </section>
    </div>
  );
}