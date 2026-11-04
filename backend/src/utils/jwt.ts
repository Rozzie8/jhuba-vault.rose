import jwt from 'jsonwebtoken';
import { Role } from '@prisma/client';
import { env } from '../config/env';
export function signToken(userId: string, role: Role): string { return jwt.sign({ userId, role }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRES_IN as jwt.SignOptions['expiresIn'] }); }
export const AUTH_COOKIE = 'jhub_access_token';
export function setAuthCookie(res: { append(name: string, value: string): void }, token: string): void {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  res.append('Set-Cookie', `${AUTH_COOKIE}=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400${secure}`);
}
export function clearAuthCookie(res: { append(name: string, value: string): void }): void {
  res.append('Set-Cookie', `${AUTH_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`);
}
export function readAuthCookie(cookieHeader: string | undefined): string | undefined {
  const cookie = cookieHeader?.split(';').map(value => value.trim()).find(value => value.startsWith(`${AUTH_COOKIE}=`));
  if (!cookie) return undefined;
  const value = cookie.slice(AUTH_COOKIE.length + 1);
  try { return decodeURIComponent(value); } catch { return undefined; }
}
