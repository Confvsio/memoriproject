import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const locale = request.nextUrl.locale || 'en'
  request.nextUrl.pathname = `/${locale}${request.nextUrl.pathname}`
  return NextResponse.rewrite(request.nextUrl)
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}