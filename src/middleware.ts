import { NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { LOCALES } from "./i18n/locales";

export default function middleware(request: NextRequest) {
  // Create and call the next-intl middleware
  const handleI18nRouting = createIntlMiddleware({
    // A list of all locales that are supported
    locales: LOCALES,
    // Used when no locale matches
    defaultLocale: "en",
  });

  const response = handleI18nRouting(request);
  // Alter the response
  // response.headers.set('name', 'value');

  return response;
}

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - images (assets inside images folder under public)
   * - favicon.ico (favicon file)
   */
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};
