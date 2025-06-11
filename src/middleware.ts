import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 支援的語言
const locales = ['zh', 'en', 'ja']
const defaultLocale = 'zh'

// 取得路徑中的語言
function getPathnameLocale(pathname: string): string | null {
  for (const locale of locales) {
    if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
      return locale
    }
  }
  return null
}

// 取得首選語言
function getPreferredLocale(request: NextRequest): string {
  // 檢查 Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    // 解析語言偏好，取得最高優先級的語言
    const languages = acceptLanguage
      .split(',')
      .map(lang => {
        const [code, q = '1'] = lang.trim().split(';q=')
        return { code: code.toLowerCase(), quality: parseFloat(q) }
      })
      .sort((a, b) => b.quality - a.quality)
    
    // 檢查是否有支援的語言
    for (const lang of languages) {
      if (lang.code.startsWith('en')) return 'en'
      if (lang.code.startsWith('ja')) return 'ja'
      if (lang.code.startsWith('zh')) return 'zh'
    }
  }
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // 檢查路徑是否已經包含支援的語言
  const pathnameLocale = getPathnameLocale(pathname)

  // 如果路徑已經有語言前綴，直接通過
  if (pathnameLocale) {
    return NextResponse.next()
  }

  // 如果是靜態資源，直接通過
  if (pathname.includes('.') || pathname.startsWith('/_next/') || pathname.startsWith('/api/')) {
    return NextResponse.next()
  }

  // 對於根路徑和其他沒有語言前綴的路徑
  // 預設不重新導向，讓用戶保持在根路徑（中文版）
  // 只有在明確偏好英文且質量很高時才重新導向
  const preferredLocale = getPreferredLocale(request)
  
  // 只有在明確偏好英文時才重新導向（暫時不自動重新導向日文）
  if (preferredLocale === 'en') {
    // 檢查是否真的是英文優先
    const acceptLanguage = request.headers.get('accept-language')
    if (acceptLanguage && acceptLanguage.toLowerCase().startsWith('en')) {
      const newUrl = new URL(`/en${pathname === '/' ? '' : pathname}`, request.url)
      return NextResponse.redirect(newUrl)
    }
  }

  // 預設保持在根路徑（中文版）
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