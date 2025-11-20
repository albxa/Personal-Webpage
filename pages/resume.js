/*
 * Arber Mahmuti
 * Version: 1.0
 * Date: 2024-11-24
 * Description: This file renders the Resume page of the portfolio website. 
 * It dynamically loads and displays information about the user’s profile, education, projects, skills, and languages from translation JSON files.
 */

<<<<<<< HEAD
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Resume() {
  const { t } = useTranslation();

  const sections = t("resume.sections", { returnObjects: true });
  const experience = t("resume.experience", { returnObjects: true });
  const education = t("resume.education", { returnObjects: true });
  const skills = t("resume.skills.list", { returnObjects: true });
  const projects = t("resume.projects", { returnObjects: true });
=======
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
>>>>>>> b4e9a17f0ea6f2b65a93f5a3d75ac65adc6caf91
  const languages = t("resume.languages.list", { returnObjects: true });

  return (
    <div className="bg-gray-900 text-white min-h-screen">
<<<<<<< HEAD
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-20 mt-10">

        {/* ===== HEADER SECTION ===== */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold">{t("resume.name")}</h1>
          <p className="text-blue-400 text-xl mt-1">{t("resume.title")}</p>

          <div className="flex flex-col items-center gap-2 mt-4 text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-blue-400" />
              <span>{t("resume.address")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-blue-400" />
              <span>{t("resume.phone")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-blue-400" />
              <a
                href={`mailto:${t("resume.email")}`}
                className="underline text-blue-400"
              >
                {t("resume.email")}
              </a>
            </div>
          </div>
        </section>


        {/* ===== PROFILE ===== */}
        <ResumeSection title={sections.profile}>
          <p className="text-gray-300 leading-relaxed">
            {t("resume.profile")}
          </p>
        </ResumeSection>


        {/* ===== EXPERIENCE ===== */}
        <ResumeSection title={sections.experience}>
          {experience.map((job, i) => (
            <div key={i} className="mb-10">
              <div className="flex justify-between flex-wrap">
                <div>
                  <h3 className="text-xl font-semibold">{job.company}</h3>
                  <p className="text-blue-400">{job.role}</p>
                  <p className="text-gray-400 text-sm">{job.location}</p>
                </div>
                <p className="text-gray-400 text-sm mt-1">{job.period}</p>
              </div>

              <ul className="mt-3 ml-6 list-disc text-gray-300 space-y-1">
                {job.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </ResumeSection>


        {/* ===== EDUCATION ===== */}
        <ResumeSection title={sections.education}>
          {education.map((edu, i) => (
            <div key={i} className="mb-6">
              <h3 className="text-xl font-semibold">{edu.title}</h3>
              <p className="text-blue-400">{edu.institution}</p>
              <p className="text-gray-400">{edu.period}</p>

              {edu.description && (
                <p className="text-gray-300 mt-1">{edu.description}</p>
              )}
            </div>
          ))}
        </ResumeSection>


        {/* ===== SKILLS ===== */}
        <ResumeSection title={sections.skills}>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-md text-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </ResumeSection>


        {/* ===== PROJECTS ===== */}
        <ResumeSection title={sections.projects}>
          {projects.map((p, i) => (
            <div key={i} className="mb-8">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-blue-400 text-sm">{p.tech}</p>
              <p className="text-gray-400 text-sm mb-2">{p.period}</p>
              <p className="text-gray-300">{p.description}</p>
            </div>
          ))}
        </ResumeSection>


        {/* ===== LANGUAGES ===== */}
        <ResumeSection title={sections.languages}>
          <div className="flex flex-col gap-2">
            {languages.map((lang, i) => (
              <p key={i} className="text-gray-300">
                <span className="font-semibold">{lang.name}:</span>{" "}
                {lang.level}
              </p>
            ))}
          </div>
        </ResumeSection>


        {/* ===== DOWNLOAD BUTTON ===== */}
        <div className="text-center mt-10">
          <a
            href="/docs/cv.pdf"
            download
            className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-400 text-gray-900 font-bold rounded-lg transition"
=======
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
>>>>>>> b4e9a17f0ea6f2b65a93f5a3d75ac65adc6caf91
          >
            {t("resume.download")}
          </a>
        </div>
<<<<<<< HEAD

      </div>
    </div>
  );
}


/* ---------------------------
 * SECTION COMPONENT
 * --------------------------- */
function ResumeSection({ title, children }) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold border-b border-gray-700 pb-2 mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}
=======
      </div>
    </div>
  );
};

export default Resume;
>>>>>>> b4e9a17f0ea6f2b65a93f5a3d75ac65adc6caf91
