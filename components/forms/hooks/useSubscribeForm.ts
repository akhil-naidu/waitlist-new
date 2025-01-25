import { useState } from 'react';
import { validateEmail, validateRequired } from '@/utils/validation';

export function useSubscribeForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateForm = (): boolean => {
    if (!validateRequired(email)) {
      setError('Email is required');
      return false;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    try {
      // Handle form submission
      console.log('Form submitted:', email);
      // Reset form after successful submission
      setEmail('');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return {
    email,
    setEmail,
    error,
    handleSubmit,
  };
}