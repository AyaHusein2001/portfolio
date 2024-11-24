"use server";

import shareEmail from "./email";

export async function sendEmail(formData: FormData) {
  const mail = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  console.log(mail);

  //   if (!mail.name || !mail.email || !mail.subject || !mail.message) {
  //     throw new Error(
  //       "Invalid form data: All fields are required and must be strings."
  //     );
  //   }
  //   const response = await shareEmail({
  //     name: mail.name,
  //     email: mail.email,
  //     subject: mail.subject,
  //     message: mail.message,
  //   });
  //   console.log(response);
}
