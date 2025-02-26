import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default async function middleware(req) {
  const { pathname } = req.nextUrl;

  const parts = pathname.split('/'); // Split the string by "/"
  const locale = parts[1]; // Get the first part after "/"
  // Continue with internationalized routing if authorized
  return createMiddleware(routing)(req);
}

// Config for matching routes
export const config = {
  matcher: ['/', '/(ar|en)/:path*'],
};