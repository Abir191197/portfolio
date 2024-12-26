export interface Project {
  id: string;
  name: string;
  url: string;
  repo: string;
  img: string;
  year: number;
  tags: string[];
}

export interface AdminUser {
  email: string;
  role: 'admin' | 'user';
}

export interface AdminLayoutProps {
  children: React.ReactNode;
}

export interface AuthContextType {
  user: AdminUser | null;
  login: (user: AdminUser) => void;
  logout: () => void;
}
