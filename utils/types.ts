export interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  newsletter: boolean;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  label: string;
}