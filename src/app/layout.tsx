import type { Metadata } from "next";
import "./globals.css";
import { QuizProvider } from "@/context/QuizContext";

export const metadata: Metadata = {
  title: "QuizApp",
  description: "A quiz app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full md:h-screen h-full">
        <QuizProvider>{children}</QuizProvider>
      </body>
    </html>
  );
}
