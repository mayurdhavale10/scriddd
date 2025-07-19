import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const hostname = req.headers.get('host') || '';
  const url = req.nextUrl.clone();

  // Extract subdomain (e.g. alpha.scriddd.com → alpha)
  const subdomain = hostname
    .replace('.scriddd.com', '')
    .replace('.vercel.app', '');

  if (
    subdomain &&
    subdomain !== 'scriddd' && // ignore root domain
    subdomain !== 'www'
  ) {
    url.pathname = `/saasmodel/factory/${subdomain}${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
