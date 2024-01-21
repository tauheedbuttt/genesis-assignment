import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Providers } from "@/redux/provider";
import Header from "@/components/layout/header";
import Alert from "@/components/alert";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tauheed Butt - Genesis Assignment",
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
          {/* <div className="bg-primary-CLASSIC bg-primary-COSMIC bg-primary-ATOMIC" />
          <div className="bg-secondary-CLASSIC bg-secondary-COSMIC bg-secondary-ATOMIC" />
          <div className="text-secondary-CLASSIC text-secondary-COSMIC text-secondary-ATOMIC" />
          <div className="text-primary-CLASSIC text-primary-COSMIC text-primary-ATOMIC" /> */}
        </Providers>
      </body>
    </html>
  );
}
