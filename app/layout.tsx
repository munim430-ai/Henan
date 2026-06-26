import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Henan Sitong Boiler — Bangladesh Authorized Partner",
  description:
    "Henan Sitong Boiler Bangladesh authorized representative. 15-25% below premium brands. Full Bangladesh Boiler Act 2022 compliance included. ISO 9001 certified. Local service team in Gazipur.",
  keywords:
    "Henan Sitong Boiler Bangladesh, biomass boiler Bangladesh, steam boiler supplier Bangladesh, boiler registration Bangladesh, RMG factory boiler, gas boiler Bangladesh, TDF loan boiler, Gazipur boiler supplier",
  openGraph: {
    title: "Henan Sitong Boiler — Bangladesh Authorized Partner",
    description:
      "15-25% Below Premium Brands. Full Bangladesh Compliance Included.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
