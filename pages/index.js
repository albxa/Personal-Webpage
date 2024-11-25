/*
 * Arber Mahmuti
 * Version: 1.0
 * Date: 2024-11-24
 * Description: This is the main entry file for the Home page of the portfolio website. 
 * It includes a dynamic typing animation, a hero section, and an introduction section.
 * The content is localized using react-i18next.
 */

import { useState, useEffect } from "react"; // React hooks for state and lifecycle
import { useTranslation } from "react-i18next"; // For localization
import Header from "../components/Header"; // Navigation header component

export default function Home() {
  const { t } = useTranslation(); // Translation hook
  const texts = t("home.roles", { returnObjects: true }); // Fetch roles array from translations

  // State management for typing animation
  const [currentIndex, setCurrentIndex] = useState(0); // Current role being typed
  const [displayedText, setDisplayedText] = useState(""); // Current text being displayed
  const [isDeleting, setIsDeleting] = useState(false); // Whether the text is being deleted
  const [charIndex, setCharIndex] = useState(0); // Index of the current character in the role

  // Typing effect logic
  useEffect(() => {
    if (texts.length === 0) return; // Guard clause for empty texts array

    const handleTyping = () => {
      const currentText = texts[currentIndex]; // Get the current role text

      if (!isDeleting) {
        // Typing forward
        if (charIndex < currentText.length) {
          setDisplayedText((prev) => prev + currentText[charIndex]); // Add next character
          setCharIndex((prev) => prev + 1); // Increment character index
        } else {
          // Pause before starting to delete
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting backward
        if (charIndex > 0) {
          setDisplayedText((prev) => prev.slice(0, -1)); // Remove last character
          setCharIndex((prev) => prev - 1); // Decrement character index
        } else {
          // Move to the next role
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length); // Cycle through roles
        }
      }
    };

    const interval = setInterval(handleTyping, isDeleting ? 100 : 150); // Adjust speed for typing/deleting
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [charIndex, isDeleting, texts, currentIndex]);

  return (
    <div>
      {/* Full-Screen Hero Section */}
      <div className="h-screen bg-gray-800 flex flex-col items-center justify-center text-center text-white">
        <Header /> {/* Navigation Header */}
        <div className="space-y-4">
          {/* Greeting */}
          <p className="text-3xl font-semibold">{t("home.hello")}</p>

          {/* Introduction */}
          <p className="text-4xl font-bold">
            {t("home.intro")} <span className="text-blue-500">Arber Mahmuti</span>
          </p>

          {/* Typing animation */}
          <p className="text-2xl text-blue-400 h-[2rem]">{displayedText || <span>&nbsp;</span>}</p>

          {/* Brief Description */}
          <p className="text-lg mt-4">{t("home.description")}</p>

          {/* Call-to-Action Button */}
          <a
            href="#introduce"
            className="inline-block py-3 px-8 border border-blue-500 text-blue-500 font-bold text-lg tracking-wide rounded-lg hover:bg-blue-500 hover:text-gray-800 transition duration-300 mt-8"
          >
            {t("home.cta")}
          </a>
        </div>
      </div>

      {/* Let Me Introduce Myself Section */}
      <section
        id="introduce"
        className="h-screen bg-gray-900 text-white px-8 py-16 flex items-center"
      >
        <div className="max-w-4xl w-1/2 space-y-6">
          {/* Section Title */}
          <h2 className="text-3xl font-bold mb-4">{t("home.let_me_introduce.title")}</h2>

          {/* Introduction Paragraphs */}
          <p className="text-lg text-gray-300 leading-relaxed">{t("home.let_me_introduce.intro")}</p>
          <p className="text-lg text-gray-300 leading-relaxed">{t("home.let_me_introduce.traits")}</p>
          <p className="text-lg text-gray-300 leading-relaxed">{t("home.let_me_introduce.vision")}</p>
        </div>

        {/* Profile Image */}
        <div className="w-1/2 flex items-center justify-center">
          <img
            src="/images/bild_arber.jpeg"
            alt="Arber Mahmuti"
            className="w-64 h-64 rounded-full border-4 border-blue-500 object-cover"
            onError={(e) => (e.target.src = "https://via.placeholder.com/150")} // Fallback for broken image
          />
        </div>
      </section>
    </div>
  );
}
