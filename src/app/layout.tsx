import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FITZONE | Unleash Your Potential",
  description: "Join a community where goals are crushed, strength is built, and potential becomes power.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
