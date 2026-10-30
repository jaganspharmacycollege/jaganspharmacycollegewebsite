import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const {
            applicationId,
            fullName,
            fatherName,
            dob,
            gender,
            category,
            phone,
            parentPhone,
            email,
            course,
            stream,
            rankType,
            rankScore,
            qualifyingPercentage,
            address,
        } = data;

        const host = process.env.SMTP_HOST || 'smtp.gmail.com';
        const port = Number(process.env.SMTP_PORT) || 465;
        const secure = process.env.SMTP_SECURE === 'true' || port === 465;
        const user = process.env.SMTP_USER;
        const pass = process.env.SMTP_PASS?.replace(/"/g, ''); // strip optional wrapping quotes
        const recipientEmail = process.env.RECIPIENT_EMAIL || user;

        if (!user || !pass) {
            console.error('SMTP credentials missing in environment.');
            return NextResponse.json(
                { success: false, error: 'SMTP credentials missing in .env.local' },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            host,
            port,
            secure,
            auth: {
                user,
                pass,
            },
        });

        const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #faf8f5; margin: 0; padding: 20px; color: #1e293b; }
          .container { max-width: 620px; margin: 0 auto; background: #ffffff; border: 1px solid #ebd9c2; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(5,59,42,0.06); }
          .header { background: linear-gradient(135deg, #053b2a 0%, #032319 100%); padding: 24px; color: #ffffff; }
          .badge { background: #fdf6b2; color: #723b13; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 4px 10px; border-radius: 9999px; letter-spacing: 0.05em; display: inline-block; margin-bottom: 8px; }
          .header h2 { margin: 0 0 6px 0; font-size: 20px; font-weight: 800; color: #ffffff; }
          .header p { margin: 0; font-size: 13px; color: #a7f3d0; }
          .refBox { background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.25); border-radius: 8px; padding: 10px 14px; margin-top: 14px; color: #facc15; font-weight: 800; font-size: 14px; }
          .body { padding: 24px; }
          .sectionTitle { font-size: 12px; font-weight: 800; text-transform: uppercase; color: #053b2a; border-bottom: 1.5px solid #ebd9c2; padding-bottom: 4px; margin: 18px 0 10px 0; letter-spacing: 0.05em; }
          .row { display: flex; justify-content: space-between; padding: 7px 0; border-bottom: 1px solid #f1f5f9; font-size: 13.5px; }
          .label { color: #64748b; font-weight: 600; }
          .val { color: #0f172a; font-weight: 700; text-align: right; max-width: 62%; word-break: break-word; }
          .footer { background: #f7f3ec; padding: 16px 24px; font-size: 12px; color: #64748b; text-align: center; border-top: 1px solid #ebd9c2; line-height: 1.5; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span class="badge">Category-B Registration</span>
            <h2>Jagan's College of Pharmacy</h2>
            <p>Admissions into B.Pharm, Pharm.D &amp; M.Pharm (Management Quota 2026–27)</p>
            <div class="refBox">Application ID: ${applicationId}</div>
          </div>
          <div class="body">
            <div class="sectionTitle">1. Program &amp; Examination Details</div>
            <div class="row"><span class="label">Course Desired:</span><span class="val">${course}</span></div>
            <div class="row"><span class="label">Qualifying Stream:</span><span class="val">${stream}</span></div>
            <div class="row"><span class="label">Entrance Test:</span><span class="val">${rankType}</span></div>
            <div class="row"><span class="label">Hall Ticket / Rank:</span><span class="val">${rankScore || 'N/A'}</span></div>
            <div class="row"><span class="label">Group / Aggregate %:</span><span class="val">${qualifyingPercentage}%</span></div>

            <div class="sectionTitle">2. Candidate Information</div>
            <div class="row"><span class="label">Candidate Name:</span><span class="val">${fullName}</span></div>
            <div class="row"><span class="label">Father Name:</span><span class="val">${fatherName}</span></div>
            <div class="row"><span class="label">Date of Birth:</span><span class="val">${dob}</span></div>
            <div class="row"><span class="label">Gender:</span><span class="val">${gender}</span></div>
            <div class="row"><span class="label">Social Category:</span><span class="val">${category}</span></div>

            <div class="sectionTitle">3. Contact &amp; Postal Address</div>
            <div class="row"><span class="label">Candidate Mobile:</span><span class="val">${phone}</span></div>
            <div class="row"><span class="label">Parent Mobile:</span><span class="val">${parentPhone}</span></div>
            <div class="row"><span class="label">Email Address:</span><span class="val">${email}</span></div>
            <div class="row"><span class="label">Permanent Address:</span><span class="val">${address}</span></div>
          </div>
          <div class="footer">
            This is an automated confirmation generated by Jagan's College of Pharmacy Admissions Cell.<br />
            For queries, contact <strong>+91 7680077733</strong> or reply to this email.
          </div>
        </div>
      </body>
      </html>
    `;

        // Recipient list: admissions recipient email and the applicant's email
        const toRecipients = recipientEmail ? `${recipientEmail}, ${email}` : email;

        await transporter.sendMail({
            from: `"JCP Admissions Desk" <${user}>`,
            to: toRecipients,
            replyTo: email,
            subject: `Category-B Application Confirmation [${applicationId}] - ${fullName}`,
            html: emailHtml,
        });

        return NextResponse.json({ success: true, applicationId });
    } catch (error: any) {
        console.error('SMTP Delivery Error:', error);
        return NextResponse.json(
            { success: false, error: error?.message || 'Email delivery failed' },
            { status: 500 }
        );
    }
}