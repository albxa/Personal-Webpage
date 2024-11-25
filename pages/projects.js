/*
 * Arber Mahmuti
 * Version: 1.0
 * Date: 2024-11-24
 * Description: This file defines the Projects page of the portfolio website. 
 * It dynamically renders project details such as title, description, features, enhancements, and additional resources.
 * The content is fetched from translation JSON files using react-i18next.
 */

import { useTranslation } from "react-i18next"; // Localization library
import Header from "../components/Header"; // Header component for navigation

const Projects = () => {
  const { t } = useTranslation(); // Translation hook

  // Array of project data dynamically fetched from translation JSON
  const projects = [
    {
      title: t("projects.final_project.title"),
      description: t("projects.final_project.description"),
      features: t("projects.final_project.features", { returnObjects: true }),
      note: t("projects.final_project.note"),
      images: ["/images/Soll_IPA.png", "/images/Plan_IPA.png"],
    },
    {
      title: t("projects.portfolio.title"),
      description: t("projects.portfolio.description"),
      features: t("projects.portfolio.features", { returnObjects: true }),
      github: "https://github.com/yourusername/personal-portfolio",
      documentation: "https://github.com/yourusername/personal-portfolio/docs/README.md",
      images: ["/images/website-homepage.png", "/images/contact-form.png"], // Images need to be added in the future
    },
    {
      title: t("projects.improved_project.title"),
      description: t("projects.improved_project.description"),
      features: t("projects.improved_project.features", { returnObjects: true }),
      enhancements: t("projects.improved_project.enhancements", { returnObjects: true }),
      note: t("projects.improved_project.note"),
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header /> {/* Header for navigation */}
      <div className="px-8 py-16 max-w-4xl mx-auto mt-20 bg-gray-900">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8">{t("projects.title")}</h1>
        
        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              {/* Project Title */}
              <h2 className="text-3xl font-bold text-blue-500">{project.title}</h2>

              {/* Project Description */}
              <p className="text-lg text-gray-300 mt-4 leading-relaxed">{project.description}</p>

              {/* Features Section */}
              {project.features && (
                <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              )}

              {/* Enhancements Section */}
              {project.enhancements && (
                <>
                  <h3 className="text-xl font-bold mt-6 text-gray-200">
                    {t("projects.enhancements_heading")}
                  </h3>
                  <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
                    {project.enhancements.map((enhancement, i) => (
                      <li key={i}>{enhancement}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* Note Section */}
              {project.note && (
                <>
                  <h3 className="text-xl font-bold mt-6 text-gray-200">
                    {t("projects.note_heading")}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mt-2">{project.note}</p>
                </>
              )}

              {/* Images Section */}
              {project.images && (
                <div className="mt-6 grid grid-cols-1 gap-4">
                  {project.images.map((image, i) => (
                    <img
                      key={i}
                      src={image}
                      alt={`Project ${index + 1} Image ${i + 1}`}
                      className="rounded-lg shadow-lg"
                    />
                  ))}
                </div>
              )}

              {/* Links Section */}
              <div className="mt-6 flex space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-2 px-4 bg-blue-500 text-gray-900 font-bold rounded-lg hover:bg-blue-400 transition duration-300"
                  >
                    {t("projects.github_link")}
                  </a>
                )}
                {project.documentation && (
                  <a
                    href={project.documentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-2 px-4 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-600 transition duration-300"
                  >
                    {t("projects.documentation_link")}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
