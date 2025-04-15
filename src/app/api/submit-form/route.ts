// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';
// import { renderAsync } from '@react-email/render';

// // Initialize Resend with API key
// const resend = new Resend("re_AfwWUGrA_61az2HMXRAzQxs7LCjWSWeqC");

// export async function POST(request: Request) {
//   try {
//     // Parse the request body
//     const formData = await request.json();
//     const { name, email, phone } = formData;
    
//     // Validate the required fields
//     if (!name || !email || !phone) {
//       return NextResponse.json(
//         { success: false, message: 'Missing required fields' },
//         { status: 400 }
//       );
//     }

//     console.log("Attempting to send admin email to sarfraj1711@gmail.com");
    
//     try {
//       // Render the React Email component to HTML
//       const emailHtml = await renderAsync(
//         AdminLeadNotification({
//           name,
//           email,
//           phone
//         })
//       );
      
//       // Send the email using Resend
//       const adminEmailResult = await resend.emails.send({
//         from: 'onboarding@resend.dev', // Verified sender
//         to: 'sarfraj1711@gmail.com',
//         subject: 'New Quote Request',
//         html: emailHtml,
//       });
      
//       console.log("Admin email response:", adminEmailResult);
      
//       if (adminEmailResult.error) {
//         console.error("Admin email error:", adminEmailResult.error);
//         return NextResponse.json(
//           { success: false, message: 'Failed to send notification email' },
//           { status: 500 }
//         );
//       }
//     } catch (emailError) {
//       console.error("Failed to send admin email:", emailError);
//       return NextResponse.json(
//         { success: false, message: 'Failed to send notification email' },
//         { status: 500 }
//       );
//     }

//     // Return success response
//     return NextResponse.json({ 
//       success: true, 
//       message: 'Form submitted successfully',
//     });
    
//   } catch (error) {
//     console.error('Form submission error:', error);
//     return NextResponse.json(
//       { success: false, message: 'Failed to process your request' },
//       { status: 500 }
//     );
//   }
// }