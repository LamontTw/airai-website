import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host')

  // 只在生產環境或特定域名下執行重新導向
  const isProduction = process.env.NODE_ENV === 'production'
  const isLocalhost = hostname?.includes('localhost') || hostname?.includes('127.0.0.1')
  
  // 跳過本地開發環境
  if (isLocalhost) {
    return NextResponse.next()
  }

  // 強制重新導向 www 到非 www（僅生產環境）
  if (isProduction && hostname?.startsWith('www.')) {
    url.hostname = hostname.replace('www.', '')
    return NextResponse.redirect(url, 301)
  }

  // 確保使用 HTTPS（僅生產環境）
  if (
    isProduction &&
    request.headers.get('x-forwarded-proto') === 'http'
  ) {
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
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