import type { Metadata } from "next";
import Navbar, { NavItem } from "@/components/Navbar";
import Footer, { FotItem } from "@/components/Footer";
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
        <Navbar oClassName="bg-theme shadow-md">
          <div className="flex flex-row">
            <NavItem label="Home" url="/" />
            <NavItem label="Services" url="/services" />
            <NavItem label="Projects" url="/projects" />
            <NavItem label="About" url="/about" />
            <NavItem label="Contact" url="/contact" />
          </div>
        </Navbar>

        {children}

        <Footer>
          <hr className="w-[60%] my-5" />
          <div className="w-[60%] flex flex-row justify-evenly items-center">
            <FotItem label="Sitemap" url="/sitemap" />
            <FotItem label="Blog" url="/blog" />
            <FotItem label="Recent Work" url="/recentwork" />
          </div>
        </Footer>
      </body>
    </html>
  );
}
