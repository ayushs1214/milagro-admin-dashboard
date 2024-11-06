import type { UserRole } from '../types';

interface Permission {
  action: string;
  subject: string;
}

const permissions: Record<UserRole, Permission[]> = {
  dealer: [
    { action: 'read', subject: 'products' },
    { action: 'create', subject: 'orders' },
    { action: 'read', subject: 'orders' },
    { action: 'negotiate', subject: 'orders' }
  ],
  builder: [
    { action: 'read', subject: 'products' },
    { action: 'create', subject: 'orders' },
    { action: 'read', subject: 'orders' }
  ],
  architect: [
    { action: 'read', subject: 'products' },
    { action: 'create', subject: 'orders' },
    { action: 'read', subject: 'orders' },
    { action: 'create', subject: 'designs' }
  ],
  salesperson: [
    { action: 'read', subject: 'products' },
    { action: 'create', subject: 'orders' },
    { action: 'read', subject: 'orders' },
    { action: 'read', subject: 'customers' },
    { action: 'create', subject: 'customers' }
  ]
};

export const can = (role: UserRole, action: string, subject: string): boolean => {
  if (!permissions[role]) return false;
  return permissions[role].some(
    permission => permission.action === action && permission.subject === subject
  );
};

export const getPermissions = (role: UserRole): Permission[] => {
  return permissions[role] || [];
};