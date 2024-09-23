import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const targetDomain = 'https://invoice2.in';

    if (req.nextUrl.protocol === 'http:') {
        // Create a new URL object for the redirect
        const httpsUrl = new URL(req.nextUrl.href); // Clone the original URL
        httpsUrl.protocol = 'https'; // Change the protocol to HTTPS
        httpsUrl.host = new URL(targetDomain).host; // Set the host to the target domain
        httpsUrl.port = ''; // Clear the port to avoid defaulting to 3000
        return NextResponse.redirect(httpsUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/:path*',
};
