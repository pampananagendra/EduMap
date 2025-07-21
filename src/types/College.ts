export interface College {
  id?: number;
  name: string;
  location: string;
  type: string;
  ranking?: number;
  fees?: string;
  courses: string[];
  phone?: string;
  website?: string;
  email?: string;
  image?: string;
  description?: string;
}
