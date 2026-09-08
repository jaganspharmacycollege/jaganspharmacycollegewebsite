import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { formType, name, mobile, email, course, message, position, qualification, experience } = body;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: Number(process.env.SMTP_PORT) || 465,
            secure: process.env.SMTP_SECURE !== 'false',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const isEnquiry = formType === 'enquiry';
        const emailSubject = isEnquiry
            ? `🎓 New Admission Enquiry: ${name} (${course?.toUpperCase() || 'General'})`
            : `💼 New Recruitment Application: ${name} (${position || 'Faculty/Staff'})`;

        const htmlTemplate = isEnquiry
            ? `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #faf8f5; padding: 28px; color: #1f2937;">
          <div style="max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 18px; overflow: hidden; border: 1px solid rgba(5, 59, 42, 0.12); box-shadow: 0 10px 30px rgba(5,59,42,0.08);">
            
            <!-- Header Banner -->
            <div style="background: radial-gradient(circle at 50% 10%, #053b2a 0%, #032319 100%); padding: 26px 30px; text-align: left;">
              <span style="display: inline-block; background: #fffbeb; border: 1px solid #fde68a; color: #b86e00; font-size: 11px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; padding: 4px 10px; border-radius: 9999px;">
                Admissions Enquiry
              </span>
              <h2 style="color: #ffffff; margin: 10px 0 0 0; font-size: 21px; font-weight: 800;">
                Jagan's College of Pharmacy
              </h2>
              <p style="color: #a7f3d0; margin: 4px 0 0 0; font-size: 13px;">Online Portal Enquiry Submission</p>
            </div>

            <!-- Details Table -->
            <div style="padding: 24px 30px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #6b7280; font-size: 13px; font-weight: 700; width: 35%;">Applicant Name</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #053b2a; font-size: 14px; font-weight: 700;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #6b7280; font-size: 13px; font-weight: 700;">Mobile Number</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #b86e00; font-size: 14px; font-weight: 700;">${mobile}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #6b7280; font-size: 13px; font-weight: 700;">Email Address</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #111827; font-size: 14px;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #6b7280; font-size: 13px; font-weight: 700;">Desired Course</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #059669; font-size: 14px; font-weight: 800; text-transform: uppercase;">${course}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 0 6px 0; color: #6b7280; font-size: 13px; font-weight: 700; vertical-align: top;">Candidate Message</td>
                  <td style="padding: 14px 0 6px 0; color: #374151; font-size: 13px; line-height: 1.6;">${message || 'No additional message provided.'}</td>
                </tr>
              </table>
            </div>

            <!-- Footer -->
            <div style="background: #faf8f5; padding: 14px 30px; border-top: 1px solid #f0ece1; text-align: center;">
              <p style="margin: 0; font-size: 11px; color: #9ca3af;">Sent via Jagan's College of Pharmacy Official Website</p>
            </div>
          </div>
        </div>
      `
            : `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #faf8f5; padding: 28px; color: #1f2937;">
          <div style="max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 18px; overflow: hidden; border: 1px solid rgba(5, 59, 42, 0.12); box-shadow: 0 10px 30px rgba(5,59,42,0.08);">
            
            <!-- Header Banner -->
            <div style="background: radial-gradient(circle at 50% 10%, #053b2a 0%, #032319 100%); padding: 26px 30px; text-align: left;">
              <span style="display: inline-block; background: #fffbeb; border: 1px solid #fde68a; color: #b86e00; font-size: 11px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; padding: 4px 10px; border-radius: 9999px;">
                Faculty & Staff Recruitment
              </span>
              <h2 style="color: #ffffff; margin: 10px 0 0 0; font-size: 21px; font-weight: 800;">
                Jagan's College of Pharmacy
              </h2>
              <p style="color: #a7f3d0; margin: 4px 0 0 0; font-size: 13px;">Careers &amp; Employment Application</p>
            </div>

            <!-- Details Table -->
            <div style="padding: 24px 30px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #6b7280; font-size: 13px; font-weight: 700; width: 35%;">Applicant Name</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #053b2a; font-size: 14px; font-weight: 700;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #6b7280; font-size: 13px; font-weight: 700;">Mobile Number</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #b86e00; font-size: 14px; font-weight: 700;">${mobile}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #6b7280; font-size: 13px; font-weight: 700;">Email Address</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #111827; font-size: 14px;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #6b7280; font-size: 13px; font-weight: 700;">Position Applied</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #059669; font-size: 14px; font-weight: 800;">${position}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #6b7280; font-size: 13px; font-weight: 700;">Highest Qualification</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0ece1; color: #111827; font-size: 14px; font-weight: 600;">${qualification || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 0 6px 0; color: #6b7280; font-size: 13px; font-weight: 700; vertical-align: top;">Brief Experience / Note</td>
                  <td style="padding: 14px 0 6px 0; color: #374151; font-size: 13px; line-height: 1.6;">${experience || 'No cover note provided.'}</td>
                </tr>
              </table>
            </div>

            <!-- Footer -->
            <div style="background: #faf8f5; padding: 14px 30px; border-top: 1px solid #f0ece1; text-align: center;">
              <p style="margin: 0; font-size: 11px; color: #9ca3af;">Sent via Jagan's College of Pharmacy Official Website</p>
            </div>
          </div>
        </div>
      `;

        await transporter.sendMail({
            from: `"JCP Web Portal" <${process.env.SMTP_USER}>`,
            to: process.env.RECIPIENT_EMAIL || 'principal.jcp@gmail.com',
            replyTo: email,
            subject: emailSubject,
            html: htmlTemplate,
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Failed to dispatch email' },
            { status: 500 }
        );
    }
}