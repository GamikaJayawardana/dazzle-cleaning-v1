// File: app/api/send-email/route.js

import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    // 1. Get the form data from the request. It's now req.json()
    const { name, email, phone, service, message } = await req.json();

    // 2. Use Resend to send the email
    const { data, error } = await resend.emails.send({
      from: 'Dazzle Cleaning Quote <noreply@dazzlecleaning.com.au>',
      to: ['info@dazzlecleaning.com.au'],
      subject: `New Website Quote Request from ${name}`,
      reply_to: email,
      html: `
        <h1>New Quote Request for Dazzle Cleaning</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service Requested:</strong> ${service}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Handle errors from Resend
    if (error) {
      console.error({ error });
      return NextResponse.json({ error: 'Could not send the email.' }, { status: 400 });
    }

    
    // 3. Send a success response. It's now NextResponse.json()
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });

  } catch (e) {
    // Handle other server errors
    console.error(e);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}