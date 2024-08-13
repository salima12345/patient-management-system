import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StatusBadge } from './StatusBadge'; 
import { StatusIcon } from '@/constants'; 

describe('StatusBadge Component', () => {
  it('renders the StatusBadge with scheduled status', () => {
    render(<StatusBadge status="scheduled" />);

    const imageElement = screen.getByRole('img', { name: /doctor/i });
    const statusText = screen.getByText('scheduled');

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', StatusIcon['scheduled']);
    expect(statusText).toBeInTheDocument();
    expect(statusText).toHaveClass('text-12-semibold');
    expect(statusText).toHaveClass('capitalize');
    expect(statusText).toHaveClass('text-green-500');
    expect(screen.getByRole('img').parentElement).toHaveClass('bg-green-600');
  });

  it('renders the StatusBadge with pending status', () => {
    render(<StatusBadge status="pending" />);

    const imageElement = screen.getByRole('img', { name: /doctor/i });
    const statusText = screen.getByText('pending');

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', StatusIcon['pending']);
    expect(statusText).toBeInTheDocument();
    expect(statusText).toHaveClass('text-12-semibold');
    expect(statusText).toHaveClass('capitalize');
    expect(statusText).toHaveClass('text-blue-500');
    expect(screen.getByRole('img').parentElement).toHaveClass('bg-blue-600');
  });

  it('renders the StatusBadge with cancelled status', () => {
    render(<StatusBadge status="cancelled" />);

    const imageElement = screen.getByRole('img', { name: /doctor/i });
    const statusText = screen.getByText('cancelled');

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', StatusIcon['cancelled']);
    expect(statusText).toBeInTheDocument();
    expect(statusText).toHaveClass('text-12-semibold');
    expect(statusText).toHaveClass('capitalize');
    expect(statusText).toHaveClass('text-red-500');
    expect(screen.getByRole('img').parentElement).toHaveClass('bg-red-600');
  });
});
