import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            fullName,
            guardianName,
            phone,
            email,
            program,
            entranceRank,
            address,
        } = body;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: Number(process.env.SMTP_PORT) || 465,
            secure: process.env.SMTP_SECURE !== 'false',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const programLabels: Record<string, string> = {
            'b-pharm': 'Bachelor of Pharmacy (B.Pharm)',
            'pharm-d': 'Doctor of Pharmacy (Pharm.D)',
            'm-pharm': 'Master of Pharmacy (M.Pharm)',
        };

        const displayProgram = programLabels[program] || program || 'Not Specified';

        const htmlContent = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #faf8f5; padding: 28px; color: #1f2937;">
        <div style="max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 18px; overflow: hidden; border: 1px solid rgba(5, 59, 42, 0.12); box-shadow: 0 12px 32px rgba(5, 59, 42, 0.08);">
          
          <!-- Emerald Hero Header -->
          <div style="background: radial-gradient(circle at 50% 10%, #053b2a 0%, #032319 100%); padding: 28px 32px; text-align: left;">
            <span style="display: inline-block; background: #fffbeb; border: 1px solid #fde68a; color: #b86e00; font-size: 11px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; padding: 4px 12px; border-radius: 9999px;">
              Formal Admission Application 2026-27
            </span>
            <h2 style="color: #ffffff; margin: 12px 0 0 0; font-size: 22px; font-weight: 800; letter-spacing: -0.01em;">
              Jagan's College of Pharmacy
            </h2>
            <p style="color: #a7f3d0; margin: 4px 0 0 0; font-size: 13px;">Official Online Candidate Registration</p>
          </div>

          <!-- Application Details Table -->
          <div style="padding: 26px 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #6b7280; font-size: 13px; font-weight: 700; width: 38%;">Candidate Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #053b2a; font-size: 14px; font-weight: 800;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #6b7280; font-size: 13px; font-weight: 700;">Father / Guardian</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #1f2937; font-size: 14px; font-weight: 600;">${guardianName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #6b7280; font-size: 13px; font-weight: 700;">Phone Number</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #b86e00; font-size: 14px; font-weight: 800;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #6b7280; font-size: 13px; font-weight: 700;">Email Address</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #111827; font-size: 14px;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #6b7280; font-size: 13px; font-weight: 700;">Applied Course</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #059669; font-size: 14px; font-weight: 800;">${displayProgram}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #6b7280; font-size: 13px; font-weight: 700;">Rank / Aggregate %</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #b86e00; font-size: 14px; font-weight: 700;">${entranceRank}</td>
              </tr>
              <tr>
                <td style="padding: 14px 0 6px 0; color: #6b7280; font-size: 13px; font-weight: 700; vertical-align: top;">Residential Address</td>
                <td style="padding: 14px 0 6px 0; color: #374151; font-size: 13px; line-height: 1.6;">${address || 'Not specified'}</td>
              </tr>
            </table>
          </div>

          <!-- Amber Accent Strip Footer -->
          <div style="background: #faf8f5; padding: 16px 32px; border-top: 1px solid #f0ece1; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #6b7280;">
              Submitted from the official Admissions Portal &bull; Jagan's College of Pharmacy
            </p>
          </div>
        </div>
      </div>
    `;

        await transporter.sendMail({
            from: `"JCP Admissions" <${process.env.SMTP_USER}>`,
            to: process.env.RECIPIENT_EMAIL || 'principal.jcp@gmail.com',
            replyTo: email,
            subject: `📋 New Admission Application: ${fullName} (${displayProgram})`,
            html: htmlContent,
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Application dispatch error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to send application email' },
            { status: 500 }
        );
    }
}