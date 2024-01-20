import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Providers } from "@/redux/provider";
import Header from "@/components/layout/header";
import Alert from "@/components/alert";

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
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Alert />
        </Providers>
      </body>
    </html>
  );
}
