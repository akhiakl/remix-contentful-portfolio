import nodemailer from "nodemailer";

type Options = {
  fromEmail: string;
  fromName: string;
  message: string;
  subject: string;
}

export async function sendEmail({
  fromEmail,
  fromName,
  message,
  subject
}: Options) {
  const testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  const info = await transporter.sendMail({
    from: `${fromName} <${fromEmail}>`,
    to: process.env.NODEMAILER_TO_EMAIL,
    subject,
    text: message,
  });

  console.log("Message sent:", nodemailer.getTestMessageUrl(info));
  return "success";
}