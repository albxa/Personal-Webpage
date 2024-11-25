/*
 * Arber Mahmuti
 * Version: 1.0
 * Date: 2024-11-24
 * Description: This file defines the "About" page for the portfolio website.
 * It displays an introduction, a list of skills, and professional experience
 * dynamically loaded from translation JSON files.
 */

import { useTranslation } from "react-i18next"; // Hook for translation support
import Header from "../components/Header"; // Import the header component

const About = () => {
  const { t } = useTranslation();

  // Fetching skills data from JSON translations
  const skills = t("about.skills", { returnObjects: true });

  // Fetching experience data from JSON translations
  const experience = t("about.experience", { returnObjects: true });

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <div className="px-8 py-16 max-w-4xl mx-auto mt-20 bg-gray-900">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8">{t("about.title")}</h1>

        {/* Introduction Section */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed">{t("about.intro1")}</p>
          <p className="text-lg leading-relaxed mt-4">{t("about.intro2")}</p>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          {/* Section Title */}
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-600 pb-2">
            {t("about.sections.skills")}
          </h2>

          {/* Skills List */}
          <ul className="space-y-4">
            {skills &&
              skills.map((skill, index) => (
                <li key={index}>
                  <p className="text-xl font-bold">{skill.name}</p>
                  <p className="text-gray-300">{skill.description}</p>
                </li>
              ))}
          </ul>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          {/* Section Title */}
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-600 pb-2">
            {t("about.sections.experience")}
          </h2>

          {/* Experience List */}
          {experience &&
            experience.map((job, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-2xl font-bold">{job.title}</h3>
                <p className="text-gray-400">{job.duration}</p>
                {/* Tasks List */}
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  {job.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
        </section>
      </div>
    </div>
  );
};

export default About;
