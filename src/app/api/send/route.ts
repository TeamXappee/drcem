import AppointmentEmail from "@/email/appointment";
// import { Resend } from "resend";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request, res: Response) {
//   try {
//     // Parse the request body
//     const {appointment} = await req.json();

//     const patientInfo = appointment.patient;
    // const emailContent = AppointmentEmail({
    //   url: "https://resend.dev",
    //   type: appointment.type,
    //   appointmentFor: appointment.for,
    //   patient: patientInfo,
    // });

//     const data = await resend.emails.send({
//       from: "Acme <onboarding@resend.dev>",
//       to: [patientInfo.email], // Email goes to the patient's email
//       subject: `Appointment Confirmation for ${patientInfo.firstName} ${patientInfo.lastName}`,
//       react: emailContent,
//     });

//     // Send the response back with the data from Resend
//     return NextResponse.json(data);
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message || "An error occurred" });
//   }
// }


interface Patient {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  zipCode: string;
}

interface AppointmentEmailProps {
url: string;
appointmentFor: string;
type: string;
patient: Patient;
}


export async function POST(req: Request, res: Response) {
  try {
    console.log("www");
    // Parse the request body
    const { appointment } = await req.json();

    const patientInfo = appointment.patient;

    // const emailContent = AppointmentEmail({
    //   url: "https://resend.dev",
    //   type: appointment.type,
    //   appointmentFor: appointment.for,
    //   patient: patientInfo,
    // });


    // console.log("aaaaaa",emailContent);
    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g., "smtp.gmail.com"
      port: process.env.SMTP_PORT || 587, // 587 for TLS or 465 for SSL
      secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // your SMTP user
        pass: process.env.SMTP_PASSWORD, // your SMTP password
      },
    });
    console.log("eeeeee");
    const formattedDate = new Date(patientInfo.selectedDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Set up email data
    const mailOptions = {
      from: `"Acme" <${process.env.SMTP_FROM}>`, // sender address
      to: patientInfo.email, // list of receivers
      subject: `Appointment Confirmation for ${patientInfo.firstName} ${patientInfo.lastName}`, // Subject line
      html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <style>
            .text-2xl { font-size: 1.5rem; }
            .font-bold { font-weight: bold; }
            .text-brand { color: #007291; }
          </style>
        </head>
        <body>
          <h1 class="text-2xl font-bold">Appointment Confirmation</h1>
          <p>
            You have successfully booked an appointment for ${appointment.for} 
            with ${appointment.type}.
          </p>
          <h2>Patient Information</h2>
          <p>
            Name: ${patientInfo.firstName} ${patientInfo.lastName}<br />
            Email: ${patientInfo.email}<br />
            Phone: ${patientInfo.phoneNumber}<br />
            Zip Code: ${patientInfo.zipCode}
          </p>
  
          <h2>Appointment Details</h2>
          <p>
            Type: ${appointment.type}<br />
            For: ${appointment.for}
          </p>
  
          <h2>Appointment Date</h2>
          <p>${formattedDate}</p>
  
          <p>
            <a
              href="mailto:${process.env.SMTP_USER}?subject=Appointment Confirmation&body=Hi ${process.env.SMTP_USER_NAME},%0D%0A%0D%0AWe have successfully booked an appointment for ${appointment.for} with ${appointment.type}.%0D%0A%0D%0AAppointment Date: ${new Date().toDateString()}%0D%0A%0D%0AWe look forward to seeing you soon.%0D%0A%0D%0ARegards,%0D%0AYour Dental Clinic"
            >
              Confirm Appointment
            </a>
          </p>
        </body>
      </html>
      `,
    };
    console.log("eeeeee");
    // Send mail with defined transport object
    const info = await transporter.sendMail(mailOptions);
console.log("info",info)
    // Send the response back with the data from nodemailer
    return NextResponse.json({ messageId: info.messageId, response: info.response });
  } catch (error: any) {
    console.log("errrrrr");
    console.log(error.message)
    return NextResponse.json({ error: error.message || "An error occurred" });
  }
}