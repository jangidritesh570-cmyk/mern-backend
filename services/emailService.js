import nodemailer from "nodemailer";

export const sendEmail = async ({ email, subject, message }) => {  
  try {
    const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,        
      subject,
      html: message,
    };

    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    throw new Error(error.message || "cannot send email");
  }
};