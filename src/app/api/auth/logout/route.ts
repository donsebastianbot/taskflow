import { NextResponse } from 'next/server';
import { authCookieName } from '@/lib/auth';

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(authCookieName, '', { maxAge: 0, path: '/' });
  return res;
}
