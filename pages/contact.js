/*
 * Arber Mahmuti
 * Version: 1.0
 * Date: 2024-11-24
 * Description: This file implements the Contact page for the portfolio website.
 * It includes a dynamic form that handles contact requests based on whether the user
 * is an individual or a firm, with input validation and email submission through an API endpoint.
 */

import { useState } from "react"; // Import React hooks for state management
import { useTranslation } from "react-i18next"; // For translations
import Header from "../components/Header"; // Header component for navigation

export default function Contact() {
  const { t } = useTranslation(); // Translation hook
  const [senderType, setSenderType] = useState("person"); // Track sender type: individual or firm
  const [formData, setFormData] = useState({
    personName: "",
    firmName: "",
    recruiterName: "",
    emailTitle: "",
    emailContent: "",
  }); // Form state to handle user input

  // Handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the server via API
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderType,
          firmName: formData.firmName,
          recruiterName: formData.recruiterName,
          personName: formData.personName,
          emailTitle: formData.emailTitle,
          emailContent: formData.emailContent,
        }),
      });

      if (response.ok) {
        // Reset form and notify the user on success
        alert(t("form.success"));
        setFormData({
          personName: "",
          firmName: "",
          recruiterName: "",
          emailTitle: "",
          emailContent: "",
        });
      } else {
        // Notify the user if an error occurs
        alert(t("form.error"));
      }
    } catch (error) {
      console.error("Error:", error); // Log errors for debugging
      alert(t("form.error_generic")); // Notify the user of a generic error
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Main Form Section */}
      <div className="px-8 py-16 max-w-4xl mx-auto mt-20 bg-gray-900">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8">{t("contact.title")}</h1>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Sender Type Selection */}
          <div className="flex items-center space-x-4">
            <label className="font-bold">{t("contact.form.sender_type")}</label>
            <div>
              <label className="mr-4">
                <input
                  type="radio"
                  name="senderType"
                  value="person"
                  checked={senderType === "person"}
                  onChange={() => setSenderType("person")}
                  className="mr-2"
                />
                {t("contact.form.individual")}
              </label>
              <label>
                <input
                  type="radio"
                  name="senderType"
                  value="firm"
                  checked={senderType === "firm"}
                  onChange={() => setSenderType("firm")}
                  className="mr-2"
                />
                {t("contact.form.firm")}
              </label>
            </div>
          </div>

          {/* Conditional Fields for Firms */}
          {senderType === "firm" && (
            <div>
              {/* Firm Name */}
              <label className="block font-bold mb-2">{t("contact.form.firm_name")}</label>
              <input
                type="text"
                name="firmName"
                value={formData.firmName}
                onChange={handleInputChange}
                placeholder={t("contact.form.firm_name_placeholder")}
                className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600"
                required
              />
              {/* Recruiter Name */}
              <label className="block font-bold mt-4 mb-2">
                {t("contact.form.recruiter_name")}
              </label>
              <input
                type="text"
                name="recruiterName"
                value={formData.recruiterName}
                onChange={handleInputChange}
                placeholder={t("contact.form.recruiter_name_placeholder")}
                className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600"
                required
              />
            </div>
          )}

          {/* Conditional Fields for Individuals */}
          {senderType === "person" && (
            <div>
              <label className="block font-bold mb-2">{t("contact.form.name")}</label>
              <input
                type="text"
                name="personName"
                value={formData.personName}
                onChange={handleInputChange}
                placeholder={t("contact.form.name_placeholder")}
                className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600"
                required
              />
            </div>
          )}

          {/* Email Title */}
          <div>
            <label className="block font-bold mb-2">{t("contact.form.email_title")}</label>
            <input
              type="text"
              name="emailTitle"
              value={formData.emailTitle}
              onChange={handleInputChange}
              placeholder={t("contact.form.email_title_placeholder")}
              className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600"
              required
            />
          </div>

          {/* Email Content */}
          <div>
            <label className="block font-bold mb-2">{t("contact.form.email_content")}</label>
            <textarea
              name="emailContent"
              value={formData.emailContent}
              onChange={handleInputChange}
              placeholder={t("contact.form.email_content_placeholder")}
              rows="5"
              className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="py-3 px-8 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              {t("contact.form.send")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
