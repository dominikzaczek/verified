import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Betting Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container-fluid gradient-background min-h-screen flex justify-center">
        <div className="container static-background p-5">
            <Link href="/dashboard"><h3 className="mb-5">&lt; Your dashboard</h3></Link>
        {children}
        </div>
    </div>
  );
}
