import type { Metadata } from "next";
import "./globals.css";
import { QuizProvider } from "@/context/QuizContext";

export const metadata: Metadata = {
  title: "Quiz App",
  description: "A quiz app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QuizProvider>{children}</QuizProvider>
      </body>
    </html>
  );
}
