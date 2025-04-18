import BtnSuggestion from "@/components/button/btn-suggestion";
import QueryClientProvider from "@/context/react-query/QueryClientProvider";
import SessionWrapper from "@/lib/SessionWrapper";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata = {
  title: "QuickTome - AI",
  description: "Generated by create next app",
  metadataBase: new URL("http://localhost:3000"),
  keywords: ["Keyword 1", "Keyword 2"],
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} antialiased size-full`}>
          <Toaster />
          <NextTopLoader />
          <QueryClientProvider>{children}</QueryClientProvider>
          <BtnSuggestion />
        </body>
      </html>
    </SessionWrapper>
  );
}
