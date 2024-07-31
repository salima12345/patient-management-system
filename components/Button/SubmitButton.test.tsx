import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SubmitButton from './SubmitButton';

describe('SubmitButton', () => {
  it('should render with default props', () => {
    render(<SubmitButton isLoading={false}>Submit</SubmitButton>);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('shad-primary-btn w-full');
    expect(buttonElement).not.toBeDisabled();
    expect(buttonElement).toHaveTextContent('Submit');
  });

  it('should render with isLoading true', () => {
    render(<SubmitButton isLoading={true}>Submit</SubmitButton>);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
    expect(screen.getByAltText('loader')).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Loading...');
  });

  it('should override default className', () => {
    render(<SubmitButton  isLoading={false} className="custom-class">Submit</SubmitButton>);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('custom-class');
    expect(buttonElement).toHaveTextContent('Submit');
  });
});
