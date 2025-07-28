import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // Если запрос идет на главную страницу
  if (request.nextUrl.pathname === '/') {
    // Редиректим на /search-process
    return NextResponse.redirect(new URL('/search-process', request.url))
  }
 
  return NextResponse.next()
}
 
export const config = {
  matcher: '/',
} 