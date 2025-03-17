import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/ Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie App",
  description: "A responsive movie web app using Next.js 13 App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
