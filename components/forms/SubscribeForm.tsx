"use client";

import Input from './Input';
import Button from '../ui/Button';
import { EmailIcon } from '@/utils/icons';
import { useSubscribeForm } from './hooks/useSubscribeForm';

export default function SubscribeForm() {
  const { email, setEmail, error, handleSubmit } = useSubscribeForm();

  return (
    <form onSubmit={handleSubmit} className="max-w-xs mx-auto">
      <Input
        label="Email"
        type="email"
        id="email"
        placeholder="Your email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={<EmailIcon />}
        error={error}
        required
      />
      <Button type="submit" className="w-full mt-3">
        Join The Waitlist
      </Button>
    </form>
  );
}