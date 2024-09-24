import type { Metadata } from "next";
import "./globals.css";
import { SearchProvider } from "@/context/SearchContext";

export const metadata: Metadata = {
  title: "App List",
  description: "Take-Home Interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="lofi">
      <body className="overflow-scroll">
        <SearchProvider>{children}</SearchProvider>
      </body>
    </html>
  );
}
