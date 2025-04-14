// app/api/submit-form/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend("re_AfwWUGrA_61az2HMXRAzQxs7LCjWSWeqC");

export async function POST(request: Request) {
  try {
    // Parse the request body
    const formData = await request.json();
    const { name, email, phone } = formData;
    
    // Validate the required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log("Attempting to send admin email to sarfraj1711@gmail.com");
    
    // Email to admin
    try {
      const adminEmailResult = await resend.emails.send({
        from: 'onboarding@resend.dev', // This needs to be a verified sender
        to: 'sarfraj1711@gmail.com',
        subject: 'New Quote Request',
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> +91 ${phone}</p>
          <p>Please follow up with this lead soon.</p>
        `,
      });
      
      console.log("Admin email response:", adminEmailResult);
      
      if (adminEmailResult.error) {
        console.error("Admin email error:", adminEmailResult.error);
      }
    } catch (emailError) {
      console.error("Failed to send admin email:", emailError);
    }

    console.log("Attempting to send welcome email to user:", email);
    
    // Welcome email to user
    try {
      const userEmailResult = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Thank You for Your Interest!',
        html: `
          <h2>Thank you, ${name}!</h2>
          <p>We've received your request for a quote. Our team will review your information and get back to you shortly.</p>
          <p>In the meantime, feel free to explore our services on our website.</p>
          <p>Best regards,<br>Your Company Team</p>
        `,
      });
      
      
      if (userEmailResult.error) {
        console.error("User email error:", userEmailResult.error);
      }
    } catch (emailError) {
      console.error("Failed to send user email:", emailError);
    }

    // Return success response even if emails fail for now
    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully',
    });
    
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process your request' },
      { status: 500 }
    );
  }
}