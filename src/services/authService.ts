export type User = {
  id: string;
  email: string;
  role: 'factory-admin' | 'factory-staff' | 'user' | 'scrappal';
  factoryId?: string;
  subscribed?: boolean;
};

// Mock DB (in-memory)
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@alpha.com',
    role: 'factory-admin',
    factoryId: 'alpha',
    subscribed: true,
  },
  {
    id: '2',
    email: 'staff@alpha.com',
    role: 'factory-staff',
    factoryId: 'alpha',
  },
  {
    id: '3',
    email: 'user@gmail.com',
    role: 'user',
  },
  {
    id: '4',
    email: 'scrappal@pickup.com',
    role: 'scrappal',
  },
];

// ✅ Login by email
export async function login(email: string): Promise<User | null> {
  const user = mockUsers.find(u => u.email === email);
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  }
  return null;
}

// ✅ Signup a new user
export async function signup(
  email: string,
  role: User['role'],
  factoryId?: string
): Promise<User | null> {
  const exists = mockUsers.find(u => u.email === email);
  if (exists) return null;

  const newUser: User = {
    id: String(mockUsers.length + 1),
    email,
    role,
    factoryId,
    subscribed: role === 'factory-admin',
  };

  mockUsers.push(newUser);
  localStorage.setItem('user', JSON.stringify(newUser));
  return newUser;
}

// ✅ Get currently logged-in user
export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null;
  const data = localStorage.getItem('user');
  return data ? JSON.parse(data) : null;
}

// ✅ Logout
export function logout() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('user');
  }
}
