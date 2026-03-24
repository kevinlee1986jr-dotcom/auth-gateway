interface User {
  id: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  createdAt: Date;
  updatedAt: Date;
}

interface TokenPayload {
  userId: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  iat: number;
  exp: number;
}

interface AuthResponse {
  user: User;
  token: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  email: string;
  password: string;
  role?: 'admin' | 'user' | 'guest';
}

interface PasswordResetRequest {
  email: string;
  newPassword: string;
  token: string;
}

interface ErrorResponse {
  message: string;
  code: number;
}

type AuthOperation = 'login' | 'register' | 'resetPassword';

export type {
  User,
  TokenPayload,
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  PasswordResetRequest,
  ErrorResponse,
  AuthOperation,
};