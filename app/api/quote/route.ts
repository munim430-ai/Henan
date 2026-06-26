import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      factoryName,
      boilerType,
      capacity,
      application,
      contactName,
      phone,
      email,
      message,
    } = body;

    if (!factoryName || !contactName || !phone || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const toEmail = process.env.TO_EMAIL || "hasibulmunim@gmail.com";

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1B3A6B; color: white; padding: 24px; border-radius: 8px 8px 0 0;">
          <h2 style="margin: 0;">New Quote Request — Henan Sitong Bangladesh</h2>
        </div>
        <div style="padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold; color: #6b7280; width: 40%;">Factory Name</td><td style="padding: 8px;">${factoryName}</td></tr>
            <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold; color: #6b7280;">Current Boiler</td><td style="padding: 8px;">${boilerType || "Not specified"}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #6b7280;">Capacity Needed</td><td style="padding: 8px;">${capacity || "Not specified"}</td></tr>
            <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold; color: #6b7280;">Application</td><td style="padding: 8px;">${application || "Not specified"}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #6b7280;">Contact Name</td><td style="padding: 8px;">${contactName}</td></tr>
            <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold; color: #6b7280;">Phone / WhatsApp</td><td style="padding: 8px;">${phone}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #6b7280;">Email</td><td style="padding: 8px;">${email}</td></tr>
            <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold; color: #6b7280;">Message</td><td style="padding: 8px;">${message || "—"}</td></tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #f0fdf4; border-left: 4px solid #16803C; border-radius: 4px;">
            <p style="margin: 0; color: #14532D; font-weight: bold;">Reply within 24 hours for best conversion rate.</p>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Henan Sitong Website" <${process.env.SMTP_USER}>`,
      to: toEmail,
      replyTo: email,
      subject: `Quote Request: ${factoryName} — ${capacity || "capacity TBD"} — ${application || "application TBD"}`,
      html: emailHtml,
      text: `
New Quote Request — Henan Sitong Bangladesh

Factory Name: ${factoryName}
Current Boiler: ${boilerType || "Not specified"}
Capacity Needed: ${capacity || "Not specified"}
Application: ${application || "Not specified"}
Contact: ${contactName}
Phone: ${phone}
Email: ${email}
Message: ${message || "—"}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote form error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please call us directly." },
      { status: 500 }
    );
  }
}
