import AppointmentEmail from "@/email/appointment";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
  try {
    // Parse the request body
    const {appointment} = await req.json();

    const patientInfo = appointment.patient;
    const emailContent = AppointmentEmail({
      url: "https://resend.dev",
      type: appointment.type,
      appointmentFor: appointment.for,
      patient: patientInfo,
    });

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [patientInfo.email], // Email goes to the patient's email
      subject: `Appointment Confirmation for ${patientInfo.firstName} ${patientInfo.lastName}`,
      react: emailContent,
    });

    // Send the response back with the data from Resend
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "An error occurred" });
  }
}

