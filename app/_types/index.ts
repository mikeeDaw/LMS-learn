export interface Course {
  title: string;
  code: string;
  desc: string;
  tags: string[];
  tier: string;
  diff: string;
  publisherEmail: string;
  publisherName: string;
  students: string[];
  published: false;
}

export interface User {
  name: string;
  email: string;
  password: string;
  userRole: string;
  courses: string[];
  tier: string;
}

export interface Tier {
  tierLabel: string;
  price: number;
  features: string[];
}
