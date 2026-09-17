import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const host = process.env.SMTP_HOST || 'smtp.gmail.com';
        const port = Number(process.env.SMTP_PORT) || 465;
        const user = process.env.SMTP_USER || process.env.EMAIL_USER;
        const rawPass = process.env.SMTP_PASS || process.env.EMAIL_PASS || '';
        const pass = rawPass.replace(/["\s]/g, '');
        const recipient = process.env.RECIPIENT_EMAIL || process.env.EMAIL_TO || user;

        if (!user || !pass) {
            console.error('SMTP Error: SMTP_USER or SMTP_PASS is missing in .env.local');
            return NextResponse.json(
                { error: 'Mail server credentials are not configured.' },
                { status: 500 }
            );
        }

        const body = await req.json();
        const {
            fullName,
            email,
            phone,
            position,
            department,
            qualification,
            experience,
            specialization,
            publicationsCount,
            resumeLink,
            coverNote,
        } = body;

        if (!fullName || !email || !phone || !position || !department || !qualification) {
            return NextResponse.json(
                { error: 'Please complete all required application fields.' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host,
            port,
            secure: port === 465,
            auth: { user, pass },
        });

        const submissionDate = new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            dateStyle: 'full',
            timeStyle: 'medium',
        });

        const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { margin: 0; padding: 0; font-family: sans-serif; background-color: #FAF8F5; color: #1f2937; }
          .wrapper { max-width: 620px; margin: 30px auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid rgba(5, 59, 42, 0.12); }
          .header { background: linear-gradient(135deg, #053B2A 0%, #032319 100%); padding: 30px 24px; text-align: center; border-bottom: 3px solid #FBBF24; }
          .tag { display: inline-block; background: rgba(251, 191, 36, 0.15); border: 1px solid rgba(251, 191, 36, 0.4); color: #FBBF24; font-size: 11px; font-weight: 700; padding: 3px 12px; border-radius: 999px; text-transform: uppercase; margin-bottom: 10px; }
          .title { color: #ffffff; font-size: 22px; font-weight: 800; margin: 0; }
          .content { padding: 26px; }
          .table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
          .table td { padding: 9px 12px; font-size: 13.5px; border-bottom: 1px solid #FAF4EB; }
          .label { width: 34%; font-weight: 700; color: #053B2A; background: #FAF8F5; }
          .badge { display: inline-block; padding: 2px 8px; border-radius: 999px; font-size: 11.5px; font-weight: 700; background: #ECFDF5; color: #059669; border: 1px solid #A7F3D0; }
          .box { background: #FAF8F5; border-left: 4px solid #053B2A; border-radius: 0 8px 8px 0; padding: 14px 18px; margin-top: 14px; }
          .footer { background: #FAF8F5; border-top: 1px solid #F0ECE1; padding: 16px; text-align: center; font-size: 11.5px; color: #6B7280; }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="header">
            <span class="tag">HR &amp; Selection Council</span>
            <h1 class="title">New Recruitment Application</h1>
          </div>
          <div class="content">
            <table class="table">
              <tr><td class="label">Candidate Name</td><td><strong>${fullName}</strong></td></tr>
              <tr><td class="label">Email</td><td><a href="mailto:${email}" style="color:#053B2A;">${email}</a></td></tr>
              <tr><td class="label">Phone</td><td>${phone}</td></tr>
              <tr><td class="label">Position</td><td><span class="badge">${position}</span></td></tr>
              <tr><td class="label">Department</td><td><strong>${department}</strong></td></tr>
              <tr><td class="label">Qualification</td><td>${qualification}</td></tr>
              <tr><td class="label">Experience</td><td>${experience}</td></tr>
              <tr><td class="label">Specialization</td><td>${specialization}</td></tr>
              <tr><td class="label">Scopus Papers</td><td>${publicationsCount || '0'}</td></tr>
              <tr><td class="label">Resume / Portfolio</td><td>${resumeLink ? `<a href="${resumeLink}" target="_blank" style="color:#2563eb;font-weight:700;">View Resume Document &rarr;</a>` : 'Not Attached'}</td></tr>
              <tr><td class="label">Timestamp</td><td>${submissionDate}</td></tr>
            </table>

            ${coverNote ? `
              <div class="box">
                <strong style="color:#053B2A;display:block;margin-bottom:6px;">Cover Note / Summary:</strong>
                <span style="font-size:13px;color:#4B5563;line-height:1.6;">${coverNote}</span>
              </div>
            ` : ''}
          </div>
          <div class="footer">
            Submitted via <strong>Jagan&apos;s College of Pharmacy Careers Portal</strong> &bull; Jangalakandriga, Nellore, AP.
          </div>
        </div>
      </body>
      </html>
    `;

        await transporter.sendMail({
            from: `"JCP Careers Portal" <${user}>`,
            to: recipient,
            replyTo: email,
            subject: `[Recruitment Application] ${position} - ${department} (${fullName})`,
            html: htmlTemplate,
        });

        return NextResponse.json({ success: true, message: 'Application submitted successfully.' });
    } catch (error: any) {
        console.error('Error sending recruitment email:', error);
        return NextResponse.json(
            { error: error?.message || 'Failed to submit application. Please try again later.' },
            { status: 500 }
        );
    }
}