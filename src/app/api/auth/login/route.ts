import { NextResponse } from 'next/server';
import { authCookieName, getAuthCookieValue } from '@/lib/auth';

export async function POST(request: Request) {
  const { password } = await request.json();

  if (!password || password !== (process.env.APP_PASSWORD || 'admin123')) {
    return NextResponse.json({ ok: false, error: 'Credenciales incorrectas' }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(authCookieName, getAuthCookieValue(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 14,
    path: '/',
  });
  return response;
}
