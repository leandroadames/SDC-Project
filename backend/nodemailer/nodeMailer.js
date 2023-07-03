import nodeMailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

// Html for email that gets presented on the email
const html = `
<div>
<h2>Thank you for signing up!</h2>
<a href="/signup">Sign Up</a>
</div>
`;

// Function that sends email to the users email

async function sendEmail(user) {
  try {
    // Setting for SMTP Server to send emails
    const transporter = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });

    // Contents of the email
    const info = await transporter.sendMail({
      from: "Netflix Team <",
      to: user,
      subject: "Welcome to Netflix",
      html,
    });

    console.log("Message", info.messageId);
  } catch (error) {
    console.log(error);
  }
}

export default sendEmail;
