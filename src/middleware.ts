import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 移除重新導向邏輯，交給 next.config.ts 處理
  // 這裡只保留其他必要的 middleware 邏輯
  
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