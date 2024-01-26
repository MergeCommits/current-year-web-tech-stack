import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/"]);
const isApiRoute = createRouteMatcher(["/api/(.*)"]);

function createNextIntlMiddleware() {
    return createMiddleware({
        locales: ["en", "fr-ca"],
        defaultLocale: "en",
        localePrefix: "as-needed",
    });
}

export default clerkMiddleware((auth, req) => {
    if (isApiRoute(req)) {
        return NextResponse.next();
    }

    const { userId, redirectToSignIn, protect } = auth();
    const isPublic = isPublicRoute(req);

    if (!userId && !isPublic) {
        redirectToSignIn();
    }
    if (!isPublic) {
        protect();
    }

    return createNextIntlMiddleware()(req);
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/api(.*)"],
};
