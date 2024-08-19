import React, { useState } from "react";
import { Input } from "../ui/input";
import { DatePickerDemo } from "../shared/datePciker";
import { Button } from "../ui/button";
import SselectDateBirth from "./selectDateBirth";
import { toast } from "sonner";

export default function Step3({
  setAppointment,
  appointment,
}: {
  setAppointment: React.Dispatch<React.SetStateAction<any>>;
  appointment: any;
}) {
  const disabled = Object.values(appointment.patient).some((val) => !val);

  const handlePatientChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAppointment((prev: any) => ({
      ...prev,
      patient: { ...prev.patient, [e.target.name]: e.target.value },
    }));
  };

  const handlePickDates = (key: string, date: Date) => {
    setAppointment((prev: any) => ({
      ...prev,
      patient: { ...prev.patient, [key]: date },
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      toast.info("Loading..");
      const res = await fetch("http://localhost:3000/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ appointment }),
      });
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleAgeChange = (type: any, value: any) => {
    setAppointment((prev: any) => ({
      ...prev,
      patient: { ...prev.patient, age: { ...prev.pateint.age, [type]: value } },
    }));
  };
  return (
    <div className="grid items-center justify-start sm:grid-cols-2 gap-[5vw] py-10 ">
      <form onSubmit={handleSubmit} className="space-y-2">
        <h1 className="mb-4 text-2xl font-semibold text-center sm:text-3xl sm:text-left ">
          Please enter your exact information
        </h1>
        <div className="flex gap-2">
          <Input
            required
            name="firstName"
            type="text"
            value={appointment.patient.firstName}
            onChange={handlePatientChange}
            placeholder="First name"
          />
          <Input
            required
            name="lastName"
            type="text"
            value={appointment.patient.lastName}
            onChange={handlePatientChange}
            placeholder="Last name"
          />
        </div>
        <div className="flex gap-2">
          <Input
            required
            name="email"
            type="email"
            value={appointment.patient.email}
            onChange={handlePatientChange}
            placeholder="Email"
          />
          <Input
            required
            type="tel"
            name="phoneNumber"
            value={appointment.patient.phoneNumber}
            onChange={handlePatientChange}
            placeholder="Phone number"
          />
        </div>
        <div className="flex gap-2">
          <Input
            required
            type="text"
            name="zipCode"
            value={appointment.patient.zipCode}
            onChange={handlePatientChange}
            placeholder="Zip code"
          />
          <Input
            required
            type="text"
            name="gender"
            value={appointment.patient.gender}
            onChange={handlePatientChange}
            placeholder="Gender"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <DatePickerDemo
            text="Appointment date"
            dataKey="selectedDate"
            handleDateChange={handlePickDates}
          />
           <Input
            required
            type="text"
            name="age"
            value={appointment.patient.age}
            onChange={handlePatientChange}
            placeholder="Age"
          />
        </div>
        <br />
        <div className="space-y-2 text-lg ">
          <label className="block ">
            comments or special requests {`(optional)`}
          </label>
          <textarea
            name="comments"
            onChange={(e) => handlePatientChange(e)}
            className="w-full p-4 border rounded-xl border-indigo-950/20 max-h-[200px]"
            placeholder="Is there anything we should know?"
          />
        </div>
        <Button
          type="submit"
          disabled={disabled}
          className="relative z-20 w-full h-12 text-lg"
        >
          {appointment.patient.selectedDate
            ? `Schedule me for ${new Date(appointment.patient.selectedDate).toLocaleDateString()}`
            : "Book Appointment"}
        </Button>
      </form>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.738697433601!2d28.991764712492916!3d41.05284301655884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab708d9df9245%3A0x9051ba933802648d!2sDr.%20Cem%20Baysal!5e0!3m2!1sen!2seg!4v1708875004397!5m2!1sen!2seg"
        className="w-full h-[70svh] border-none rounded-3xl"
        loading="lazy"
      ></iframe>
    </div>
  );
}
