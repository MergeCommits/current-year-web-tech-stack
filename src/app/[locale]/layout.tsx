import "src/styles/globals.css";

import { Inter } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import { TRPCReactProvider } from "src/trpc/react";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "Create T3 App",
    description: "Generated by create-t3-app",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    return (
        <ClerkProvider>
            <html lang={locale}>
                <body className={`font-sans ${inter.variable}`}>
                    <TRPCReactProvider>{children}</TRPCReactProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
