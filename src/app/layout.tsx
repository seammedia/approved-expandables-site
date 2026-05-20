import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Approved Expandable Homes | Australian Council Approved Expandable Homes",
  description: "Council approved expandable container homes for Australia. From $65,000. Custom designed, 1-3 bedrooms, cyclone-rated builds available, delivered Australia wide in 90 days.",
  keywords: "expandable homes, council approved homes, granny flat, secondary dwelling, affordable housing Australia, cyclone rated homes, Class 1a homes, Expandihome partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
