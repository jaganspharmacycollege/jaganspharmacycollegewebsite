import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        // Map directly to your .env.local keys
        const host = process.env.SMTP_HOST || 'smtp.gmail.com';
        const port = Number(process.env.SMTP_PORT) || 465;
        const user = process.env.SMTP_USER || process.env.EMAIL_USER;

        // Clean spaces and quotation marks from the 16-character App Password
        const rawPass = process.env.SMTP_PASS || process.env.EMAIL_PASS || '';
        const pass = rawPass.replace(/["\s]/g, '');

        const recipient = process.env.RECIPIENT_EMAIL || process.env.EMAIL_TO || user;

        if (!user || !pass) {
            console.error('SMTP Error: SMTP_USER or SMTP_PASS is missing in .env.local');
            return NextResponse.json(
                { error: 'Mail service is temporarily unconfigured. Please contact support.' },
                { status: 500 }
            );
        }

        const body = await req.json();
        const { fullName, email, phone, userRole, category, subject, suggestion } = body;

        if (!fullName || !email || !subject || !suggestion) {
            return NextResponse.json(
                { error: 'Please fill in all required fields.' },
                { status: 400 }
            );
        }

        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host,
            port,
            secure: port === 465,
            auth: {
                user,
                pass,
            },
        });

        const submissionDate = new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            dateStyle: 'full',
            timeStyle: 'medium',
        });

        // College Branded Email Template (Emerald #053B2A & Amber #FBBF24 / #B86E00)
        const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #FAF8F5;
            color: #1f2937;
          }
          .email-wrapper {
            max-width: 620px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid rgba(5, 59, 42, 0.12);
            box-shadow: 0 10px 30px rgba(5, 59, 42, 0.08);
          }
          .header-banner {
            background: linear-gradient(135deg, #053B2A 0%, #032319 100%);
            padding: 32px 28px;
            text-align: center;
            border-bottom: 3px solid #FBBF24;
          }
          .header-tag {
            display: inline-block;
            background: rgba(251, 191, 36, 0.15);
            border: 1px solid rgba(251, 191, 36, 0.4);
            color: #FBBF24;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            padding: 4px 12px;
            border-radius: 999px;
            margin-bottom: 12px;
          }
          .header-title {
            color: #ffffff;
            font-size: 22px;
            font-weight: 800;
            margin: 0;
            letter-spacing: -0.5px;
          }
          .header-subtitle {
            color: #A7F3D0;
            font-size: 13px;
            margin: 6px 0 0 0;
          }
          .content-body {
            padding: 28px;
          }
          .section-title {
            font-size: 14px;
            font-weight: 800;
            text-transform: uppercase;
            color: #B86E00;
            letter-spacing: 0.8px;
            margin: 0 0 16px 0;
            border-bottom: 1px solid #F0ECE1;
            padding-bottom: 8px;
          }
          .meta-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 24px;
          }
          .meta-table td {
            padding: 10px 12px;
            font-size: 14px;
            border-bottom: 1px solid #FAF4EB;
          }
          .meta-label {
            width: 32%;
            font-weight: 700;
            color: #053B2A;
            background: #FAF8F5;
            border-radius: 6px 0 0 6px;
          }
          .meta-value {
            color: #374151;
          }
          .badge {
            display: inline-block;
            padding: 3px 10px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 700;
          }
          .badge-role {
            background: #ECFDF5;
            color: #059669;
            border: 1px solid #A7F3D0;
          }
          .badge-category {
            background: #FFFBEB;
            color: #B86E00;
            border: 1px solid #FDE68A;
          }
          .suggestion-box {
            background: #FAF8F5;
            border-left: 4px solid #053B2A;
            border-radius: 0 10px 10px 0;
            padding: 16px 20px;
            margin: 16px 0 24px 0;
          }
          .subject-heading {
            color: #053B2A;
            font-size: 16px;
            font-weight: 800;
            margin: 0 0 10px 0;
          }
          .suggestion-text {
            color: #4B5563;
            font-size: 14px;
            line-height: 1.7;
            margin: 0;
            white-space: pre-wrap;
          }
          .footer-banner {
            background: #FAF8F5;
            border-top: 1px solid #F0ECE1;
            padding: 18px 28px;
            text-align: center;
            font-size: 12px;
            color: #6B7280;
          }
          .footer-banner strong {
            color: #053B2A;
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="header-banner">
            <span class="header-tag">Institutional Portal Feedback</span>
            <h1 class="header-title">New Suggestion Received</h1>
            <p class="header-subtitle">Jagan&apos;s College of Pharmacy &bull; IQAC Desk</p>
          </div>

          <div class="content-body">
            <h2 class="section-title">Contributor Profile</h2>
            <table class="meta-table">
              <tr>
                <td class="meta-label">Full Name</td>
                <td class="meta-value"><strong>${fullName}</strong></td>
              </tr>
              <tr>
                <td class="meta-label">Email Address</td>
                <td class="meta-value"><a href="mailto:${email}" style="color: #053B2A; text-decoration: none; font-weight: 600;">${email}</a></td>
              </tr>
              <tr>
                <td class="meta-label">Contact Phone</td>
                <td class="meta-value">${phone || 'Not Provided'}</td>
              </tr>
              <tr>
                <td class="meta-label">Stakeholder Role</td>
                <td class="meta-value"><span class="badge badge-role">${userRole}</span></td>
              </tr>
              <tr>
                <td class="meta-label">Category</td>
                <td class="meta-value"><span class="badge badge-category">${category}</span></td>
              </tr>
              <tr>
                <td class="meta-label">Timestamp</td>
                <td class="meta-value">${submissionDate}</td>
              </tr>
            </table>

            <h2 class="section-title">Suggestion Details</h2>
            <div class="suggestion-box">
              <h3 class="subject-heading">${subject}</h3>
              <p class="suggestion-text">${suggestion}</p>
            </div>
          </div>

          <div class="footer-banner">
            This message was generated automatically from the <strong>Suggestions Portal</strong>.<br>
            &copy; ${new Date().getFullYear()} Jagan&apos;s College of Pharmacy, Jangalakandriga, Nellore, AP.
          </div>
        </div>
      </body>
      </html>
    `;

        await transporter.sendMail({
            from: `"JCP Suggestions Portal" <${user}>`,
            to: recipient,
            replyTo: email,
            subject: `[JCP Suggestions] ${category}: ${subject}`,
            html: htmlTemplate,
        });

        return NextResponse.json({ success: true, message: 'Suggestion transmitted successfully.' });
    } catch (error: any) {
        console.error('Error sending suggestion email:', error);
        return NextResponse.json(
            { error: error?.message || 'Failed to send email. Please try again later.' },
            { status: 500 }
        );
    }
}