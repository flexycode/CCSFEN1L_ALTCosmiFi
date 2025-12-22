import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ALTCosmiFi | Decentralized Finance",
    description: "Artificial Ledger Technology Banking System powered by Web3",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="galaxy-overlay" />
                {children}
            </body>
        </html>
    );
}
