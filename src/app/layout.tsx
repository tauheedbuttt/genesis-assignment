import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Providers } from "@/redux/provider";
import Alert from "@/components/alert/Alert";
import Header from "@/components/layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Template",
  description: "Next.js boiler plate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body className={inter.className}>
        <Providers>
          {children}
          <Alert />
        </Providers>
      </body>
    </html>
  );
}
