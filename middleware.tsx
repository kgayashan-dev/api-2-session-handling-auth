// app/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('auth-token');
    
    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/account/:path*'], // Protect dashboard & account pages
};
