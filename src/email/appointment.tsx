import * as React from "react";
import { Html, Tailwind } from "@react-email/components";

export function AppointmentEmail(props: {
  // url: any;
  type: string;
  appointmentFor: string;
  patient: any;
}) {
  //const { url, type, patient, appointmentFor } = props;
  const {  type, patient, appointmentFor } = props;

  return (
    <Html lang="en">
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#007291",
              },
            },
          },
        }}
      >
        <div>
          {/* {url} */}
          <h1 className="text-2xl font-bold">Appointment Confirmation</h1>
          <p>
            You have successfully booked an appointment for {appointmentFor}{" "}
            with {type}.
          </p>
          <h2>Patient Information</h2>
          <p>
            Name: {patient.firstName} {patient.lastName}
            <br />
            Email: {patient.email}
            <br />
            Phone: {patient.phoneNumber}
            <br />
            Zip Code: {patient.zipCode}
          </p>

          <h2>Appointment Details</h2>
          <p>
            Type: {type}
            <br />
            For: {appointmentFor}
          </p>

          <h2>Appointment Date</h2>
          <p>{new Date().toDateString()}</p>

          <p>
            <a
              href={
                "mailto:" +
                patient.email +
                "?subject=Appointment Confirmation&body=Hi " +
                patient.firstName +
                ",%0D%0A%0D%0AWe have successfully booked an appointment for " +
                appointmentFor +
                " with " +
                type +
                ".%0D%0A%0D%0AAppointment Date: " +
                new Date().toDateString() +
                "%0D%0A%0D%0AWe look forward to seeing you soon.%0D%0A%0D%0ARegards,%0D%0AYour Dental Clinic"
              }
            >
              Confirm Appointment
            </a>
          </p>
        </div>
      </Tailwind>
    </Html>
  );
}

export default AppointmentEmail;
