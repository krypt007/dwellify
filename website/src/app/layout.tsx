import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import { Providers } from "@/components/template/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dwelify",
  description: "Find your perfect place effortlessly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThirdwebProvider>
          <div className="h-screen rounded-md">
            <Providers>
             <main>{children}</main>
            </Providers>
        </div>
      </ThirdwebProvider>
      </body>
    </html>
  );
}
