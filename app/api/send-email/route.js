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
      //from: 'Dazzle Cleaning <no-reply@dazzlecleaning.com.au>', // ✅ your verified domain
      from: 'onboarding@resend.dev',

      to: ['gamikakj@gmail.com'],                      // ✅ recipient email (can be same domain)
      reply_to: email,
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px;border:1px solid #eee;border-radius:10px;">
          <h2 style="color:#0a3d62;">New Quote Request</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone || 'Not provided'}</p>
          <p><b>Service:</b> ${service}</p>
          <hr/>
          <p><b>Message:</b></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr/>
          <p style="font-size:12px;color:#888;">This message was sent from your website contact form.</p>
        </div>
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
