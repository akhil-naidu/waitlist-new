"use client";

import Input from './Input';
import Select from './Select';
import Checkbox from './Checkbox';
import Button from '../ui/Button';
import { EmailIcon, UserIcon } from '@/utils/icons';
import { COMPANY_SIZE_OPTIONS } from '@/utils/constants';
import { useContactForm } from './hooks/useContactForm';

export default function ContactForm() {
  const { formData, errors, updateField, handleSubmit } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Input
        label="Name"
        type="text"
        id="name"
        placeholder="Your name..."
        value={formData.name}
        onChange={(e) => updateField('name', e.target.value)}
        icon={<UserIcon />}
        error={errors.name}
        required
      />
      <Input
        label="Email"
        type="email"
        id="email"
        placeholder="Your email..."
        value={formData.email}
        onChange={(e) => updateField('email', e.target.value)}
        icon={<EmailIcon />}
        error={errors.email}
        required
      />
      <Select
        label="Company size"
        id="company"
        value={formData.company}
        onChange={(e) => updateField('company', e.target.value)}
        options={COMPANY_SIZE_OPTIONS}
        required
      />
      <textarea
        id="message"
        className="form-textarea text-sm w-full resize-none"
        placeholder="Your message.."
        rows={3}
        value={formData.message}
        onChange={(e) => updateField('message', e.target.value)}
        required
      />
      <Checkbox
        label="I'd like to receive updates & product news."
        id="newsletter"
        checked={formData.newsletter}
        onChange={(e) => updateField('newsletter', e.target.checked)}
      />
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
}