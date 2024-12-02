export interface User {
  id: string;
  email: string;
  name: string;
  role: 'ADMIN' | 'USER';
  createdAt: string;
  updatedAt: string;
}

export interface UpdateUserInput {
  id: string;
  role?: 'ADMIN' | 'USER';
  name?: string;
}