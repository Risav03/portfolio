import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "../context/MainContext";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Risavdeb Patra",
  description: "Explore my portfolio website :D",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={mont.className}>
      <GlobalContextProvider>
          {children}
      </GlobalContextProvider>
          </body>
    </html>
  );
}
