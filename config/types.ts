// types.ts
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './entities/user.entity';

export type AuthToken = string;

export interface LoginResponse {
  token: AuthToken;
  user: User;
}

export interface RegisterResponse {
  user: User;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  username: string;
}

export interface AuthTokenPayload {
  sub: string;
  email: string;
  username: string;
  exp: number;
}

export class AuthException extends HttpException {
  constructor(message: string, status: HttpStatus = HttpStatus.UNAUTHORIZED) {
    super(message, status);
  }
}