import { Resend } from "resend";

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

/**
 * Sends the contact form submission via Resend.
 *
 * Requires env vars (set in .env.local, never committed):
 *  - RESEND_API_KEY
 *  - CONTACT_TO_EMAIL   (address the message should land in, e.g. church office)
 *  - CONTACT_FROM_EMAIL (a verified sender on your Resend domain)
 */
export async function sendContactEmail({ name, email, message }: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    throw new Error(
      "Email is not configured. Set RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL in .env.local",
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New contact form message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    throw new Error(error.message);
  }
}
