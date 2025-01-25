type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  authorImage: string;
  date: string;
  category: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  message: string;
  newsletter: boolean;
};

type NavLink = {
  href: string;
  label: string;
};

type SocialLink = {
  href: string;
  label: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};