import "./globals.css";
import { Inter, Lato, Nunito } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  themeColor: "#1F2229",
  title: "ticket Master by Nazville",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
