import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 支援的語言
const locales = ['zh', 'en']
const defaultLocale = 'zh'

// 取得首選語言
function getLocale(request: NextRequest): string {
  // 檢查 URL 路徑是否已包含語言前綴
  const pathname = request.nextUrl.pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return defaultLocale

  // 檢查 Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    // 簡單的語言檢測
    if (acceptLanguage.includes('en')) return 'en'
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // 檢查路徑是否已經包含支援的語言
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // 如果路徑沒有語言前綴，且不是靜態資源
  if (!pathnameHasLocale && !pathname.includes('.')) {
    const locale = getLocale(request)
    
    // 如果是英文，重新導向到 /en 路徑
    if (locale === 'en') {
      const newUrl = new URL(`/en${pathname}`, request.url)
      return NextResponse.redirect(newUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * 匹配所有路徑除了：
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - 其他靜態資源
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
} 