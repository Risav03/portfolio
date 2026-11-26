import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "../context/MainContext";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title: "Risavdeb Patra",
  description: "Full stack developer building multi-tenant AI products, LMS platforms, and Web3 apps. Currently at House of Edtech on Cinnamon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-[#020817]`}
            style={{ fontFamily: 'var(--font-space), sans-serif' }}
            suppressHydrationWarning>
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
