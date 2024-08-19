// AppointmentEmail.stories.jsx
import React from 'react';
import AppointmentEmail  from './appointment';

// Here you define the meta object to describe this group of stories
export default {
  title: 'Emails/Appointment Confirmation',
  component: AppointmentEmail,
};

// Template for stories
const Template = (args) => <AppointmentEmail {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  patient: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    appointmentDate: '2024-03-25',
  },
  url: 'https://example.com/confirm',
};
