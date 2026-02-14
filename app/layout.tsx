import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FUIMR",
  description: "For Engineering and IT Solution",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased  bg-theme-light text-theme-dark dark:bg-theme-dark dark:text-theme-light`}
      >
        {children}
      </body>
    </html>
  );
}
