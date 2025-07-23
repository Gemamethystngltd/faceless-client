import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/contexts/AuthContext";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Faceless",
  description:
    "A secure platform for experts to share knowledge and for curious minds to discover, learn, and engage anonymously.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} antialiased`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
