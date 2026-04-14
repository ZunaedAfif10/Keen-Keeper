import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";

const geist = Geist({
  subsets: ["latin"],
});
export const metadata = {
  title: "Keen-Keeper",
  description: "Keen keeper app",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light"
      lang="en"
      className={geist.className}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        {children}
        </body>
    </html>
  );
}
