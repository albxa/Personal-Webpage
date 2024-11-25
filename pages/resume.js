/*
 * Arber Mahmuti
 * Version: 1.0
 * Date: 2024-11-24
 * Description: This file renders the Resume page of the portfolio website. 
 * It dynamically loads and displays information about the user’s profile, education, projects, skills, and languages from translation JSON files.
 */

import { useTranslation } from "react-i18next"; // Localization hook for translations
import Header from "../components/Header"; // Header component for navigation

const Resume = () => {
  const { t } = useTranslation(); // Initialize the translation function

  // Fetch education data from translations
  const education = [
    {
      title: t("resume.education.system_engineer.title"),
      institution: t("resume.education.system_engineer.institution"),
      duration: t("resume.education.system_engineer.duration"),
      description: t("resume.education.system_engineer.description"),
    },
    {
      title: t("resume.education.tech_school.title"),
      institution: t("resume.education.tech_school.institution"),
      duration: t("resume.education.tech_school.duration"),
    },
  ];

  // Fetch projects data from translations
  const projects = [
    {
      title: t("resume.projects.0.title"),
      description: t("resume.projects.0.description"),
    },
    {
      title: t("resume.projects.1.title"),
      description: t("resume.projects.1.description"),
    },
    {
      title: t("resume.projects.2.title"),
      description: t("resume.projects.2.description"),
    },
  ];

  // Fetch skills data from translations
  const skills = t("resume.skills.list", { returnObjects: true });

  // Fetch languages data from translations
  const languages = t("resume.languages.list", { returnObjects: true });

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header for navigation */}
      <Header />

      <div className="px-8 py-16 max-w-4xl mx-auto mt-20 bg-gray-900">
        {/* Profile Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-2">{t("resume.name")}</h1>
          <p className="text-xl text-blue-400">{t("resume.title")}</p>
          <p className="mt-4">
            <span>{t("resume.address")}</span> |{" "}
            <span>{t("resume.phone")}</span> |{" "}
            <a href={`mailto:${t("resume.email")}`} className="text-blue-500 underline">
              {t("resume.email")}
            </a>
          </p>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-600 pb-2">
            {t("resume.sections.education")}
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-2xl font-bold">{edu.title}</h3>
              <p className="text-blue-400">{edu.institution}</p>
              <p className="text-gray-400">{edu.duration}</p>
              {edu.description && <p className="mt-2">{edu.description}</p>}
            </div>
          ))}
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-600 pb-2">
            {t("resume.sections.projects")}
          </h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-600 pb-2">
            {t("resume.sections.skills")}
          </h2>
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <p className="text-lg">{skill.name}</p>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </section>

        {/* Languages Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-600 pb-2">
            {t("resume.sections.languages")}
          </h2>
          {languages.map((language, index) => (
            <div key={index} className="mb-4">
              <p className="text-lg">{language.name}</p>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: `${language.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </section>

        {/* Download Resume Button */}
        <div className="text-center">
          <a
            href="/docs/cv.pdf"
            download
            className="inline-block py-3 px-8 bg-blue-500 text-gray-900 font-bold rounded-lg hover:bg-blue-400 transition duration-300"
          >
            {t("resume.download")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
