/*
 * Arber Mahmuti
 * Version: 1.0
 * Date: 2024-11-24
 * Description: This file defines an API handler to send emails using SendGrid. It processes incoming POST requests, formats the email content based on the sender type, and sends the email to the configured recipient.
 */

import sendgrid from '@sendgrid/mail';

// Set the API key for SendGrid
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  // Only handle POST requests
  if (req.method === "POST") {
    const { senderType, firmName, recruiterName, personName, emailTitle, emailContent } = req.body;

    // Construct the email body based on the sender type
    const emailBody = `
      <h3>${senderType === "firm" ? "Firm Contact" : "Individual Contact"}</h3>
      ${
        senderType === "firm"
          ? `<p><strong>Firm Name:</strong> ${firmName}</p>
             <p><strong>Recruiter Name:</strong> ${recruiterName}</p>`
          : `<p><strong>Name:</strong> ${personName}</p>`
      }
      <p><strong>Title:</strong> ${emailTitle}</p>
      <p><strong>Message:</strong></p>
      <p>${emailContent}</p>
    `;

    try {
      // Send the email using SendGrid
      await sendgrid.send({
        to: "arber.mahmuti@outlook.com", // Replace with the recipient email
        from: "arber.abi1@outlook.com", // Must be a verified sender in SendGrid
        subject: emailTitle, // Email subject
        html: emailBody, // Email content in HTML format
      });

      // Respond with success message
      return res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      // Log and handle errors if email sending fails
      console.error("Error sending email:", error.response?.body || error);
      return res.status(500).json({ error: "Failed to send email." });
    }
  } else {
    // Respond with a 405 error if the request method is not POST
    return res.status(405).json({ error: "Method not allowed" });
  }
}
