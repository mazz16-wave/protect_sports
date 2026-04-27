import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import ToastHost from "@/components/toast-host";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading"
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata = {
  title: "Digital Asset Protection Platform",
  description: "Protect sports media assets with fingerprinting, tracking, and authenticity verification."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${outfit.variable}`}>
        <Providers>
          {children}
          <ToastHost />
        </Providers>
      </body>
    </html>
  );
}
