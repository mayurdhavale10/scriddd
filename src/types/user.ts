export type UserRole = 'factory-admin' | 'factory-staff' | 'user' | 'scrappal';

export type User = {
  id: string;
  email: string;
  role: UserRole;
  factoryId?: string;       // only for factory roles
  subscribed?: boolean;     // only for factory-admin
};
