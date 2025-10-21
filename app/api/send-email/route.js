import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Initialize Resend client with API key
const resend = new Resend(process.env.RESEND_API_KEY);

console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY ? "✅ Loaded" : "❌ Missing");


export async function POST(req) {
  try {
    const { name, email, phone, service, message } = await req.json();

    console.log("Incoming request:", { name, email, phone, service });

    // === VALIDATION ===
    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // === SEND EMAIL ===
    const { data, error } = await resend.emails.send({
      from: 'Dazzle Cleaning <no-reply@dazzlecleaning.com.au>',
      to: ['info@dazzlecleaning.com.au'],
      reply_to: email,
      subject: `New Quote Request from ${name}`,
      html: `
        <body style="background-color:#f4f7f6;font-family:Arial,sans-serif;margin:0;padding:20px;">
          <div style="max-width:600px;margin:auto;background-color:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #ddd;">
            
            <div style="background-color:#011017;color:#ffffff;padding:20px 30px;text-align:center;">
              <h1 style="margin:0;font-size:24px;">New Quote Request From Website</h1>
            </div>

            <div style="padding:30px;color:#333333;">
              <h2 style="color:#06a4eb;margin-top:0;">You've received a new inquiry!</h2>
              <p style="margin-bottom:20px;">Here are the details from the contact form:</p>

              <div style="line-height:1.8;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}" style="color:#06a4eb;">${email}</a></p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Service of Interest:</strong> ${service}</p>
              </div>

              <hr style="border:0;border-top:1px solid #eeeeee;margin:20px 0;">

              <div>
                <h3 style="color:#011017;margin-bottom:10px;">Message:</h3>
                <blockquote style="margin:0;padding:15px;background-color:#f9f9f9;border-left:4px solid #06a4eb;color:#555555;">
                  <p style="margin:0;">${message.replace(/\n/g, '<br>')}</p>
                </blockquote>
              </div>

              <hr style="border:0;border-top:1px solid #eeeeee;margin:30px 0;">
              
              <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
                <tr>
                  <td width="100" style="padding-right:20px; vertical-align:top;">
                    <img 
                      src="https://dazzlecleaning.com.au/assets/logo.png" 
                      alt="Dazzle Cleaning Logo" 
                      width="100" 
                      style="display:block; border:0;"
                    >
                  </td>
                  <td style="vertical-align:top; color:#555555;">
                    <p style="margin:0 0 5px 0; font-weight:bold; color:#011017;">The Dazzle Cleaning Team</p>
                    <p style="margin:0; font-size:14px;">
                      <a href="https://dazzlecleaning.com.au" style="color:#06a4eb; text-decoration:none;">www.dazzlecleaning.com.au</a>
                    </p>
                  </td>
                </tr>
              </table>
              </div>

            <div style="background-color:#f4f7f6;color:#888888;padding:20px 30px;text-align:center;font-size:12px;">
              <p style="margin:0;">This email was sent from the Dazzle Cleaning website contact form.</p>
            </div>

          </div>
        </body>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: 'Could not send email.', detail: error }, { status: 400 });
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });

  } catch (err) {
    console.error('Server Error:', err);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}