import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
export default async function shareEmail(mail: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  let mailOptions = await transporter.sendMail({
    from: mail.email,
    to: process.env.EMAIL_USER,
    subject: mail.subject,
    text: mail.message,
  });
  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      message: "Email sent successfully",
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return {
      statusCode: 500,
      message: "Failed to send email",
      error: errorMessage,
    };
  }
}
