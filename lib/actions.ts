"use server";

import shareEmail from "./email";

export async function sendEmail(mail: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  if (!mail.name || !mail.email || !mail.subject || !mail.message) {
    throw new Error(
      "Invalid form data: All fields are required and must be strings."
    );
  }
  const response = await shareEmail({
    name: mail.name,
    email: mail.email,
    subject: mail.subject,
    message: mail.message,
  });
  return response;
}
