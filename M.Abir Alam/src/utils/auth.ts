// utils/auth.ts

import { AdminUser } from '../types/admin';

export const checkAdminAuth = (): boolean => {
  const adminToken = localStorage.getItem('adminToken');
  return !!adminToken;
};

export const loginAdmin = (user: AdminUser) => {
  // You would typically fetch a JWT token from an API here
  localStorage.setItem('adminToken', 'fake-admin-token'); // Store a fake token for demo purposes
  localStorage.setItem('adminUser', JSON.stringify(user)); // Save user data
};

export const logoutAdmin = () => {
  localStorage.removeItem('adminToken');
  localStorage.removeItem('adminUser');
};
