import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppointmentModal } from './AppointmentModal';
import { AppointmentForm } from '../forms/AppointmentForm';

jest.mock('../forms/AppointmentForm', () => ({
  AppointmentForm: jest.fn(() => <div>Mocked AppointmentForm</div>),
}));

describe('AppointmentModal', () => {
  const defaultProps = {
    patientId: 'patient123',
    userId: 'user123',
    type: 'schedule' as 'schedule', 
    title: 'Schedule Appointment',
    description: 'Please fill in the following details to schedule appointment',
  };

  it('renders the button with correct text', () => {
    render(<AppointmentModal {...defaultProps} />);
    const button = screen.getByText(/schedule/i);
    expect(button).toBeInTheDocument();
  });

  it('opens the dialog when the button is clicked', () => {
    render(<AppointmentModal {...defaultProps} />);
    const button = screen.getByText(/schedule/i);
    fireEvent.click(button);

    const dialog = screen.getByRole('dialog');
    
    const dialogTitle = within(dialog).getByRole('heading', { name: /schedule appointment/i });
    expect(dialogTitle).toBeInTheDocument();
  });

  it('renders the AppointmentForm inside the dialog', () => {
    render(<AppointmentModal {...defaultProps} />);
    const button = screen.getByText(/schedule/i);
    fireEvent.click(button);

    const dialog = screen.getByRole('dialog');
    const form = within(dialog).getByText(/mocked appointmentform/i);
    expect(form).toBeInTheDocument();
  });
});
