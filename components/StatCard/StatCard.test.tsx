import { render, screen } from '@testing-library/react';
import { StatCard } from './StatCard'; 
import '@testing-library/jest-dom';



describe('StatCard Component', () => {
  it('renders the StatCard with appointments type', () => {
    render(<StatCard count={5} label="Appointments" icon="/icon-path.svg" type="appointments" />);

    const countElement = screen.getByText('5');
    const labelElement = screen.getByText('Appointments');
    const imageElement = screen.getByRole('img', { name: /appointments/i });

    expect(countElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', '/icon-path.svg');
    expect(imageElement).toHaveAttribute('alt', 'appointments');
    expect(countElement).toHaveClass('text-32-bold');
    expect(labelElement).toHaveClass('text-14-regular');
    expect(screen.getByRole('img').parentElement?.parentElement).toHaveClass('bg-appointments');
  });

  it('renders the StatCard with pending type', () => {
    render(<StatCard count={2} label="Pending" icon="/icon-path.svg" type="pending" />);

    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('Pending')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /appointments/i })).toHaveAttribute('src', '/icon-path.svg');
    expect(screen.getByRole('img').parentElement?.parentElement).toHaveClass('bg-pending');
  });

  it('renders the StatCard with cancelled type', () => {
    render(<StatCard count={0} label="Cancelled" icon="/icon-path.svg" type="cancelled" />);

    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('Cancelled')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /appointments/i })).toHaveAttribute('src', '/icon-path.svg');
    expect(screen.getByRole('img').parentElement?.parentElement).toHaveClass('bg-cancelled');
  });

  it('renders with default count of 0 if no count is provided', () => {
    render(<StatCard label="No Count" icon="/icon-path.svg" type="appointments"  count={0}/>);

    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('No Count')).toBeInTheDocument();
  });
});
