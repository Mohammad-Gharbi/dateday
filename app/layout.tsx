import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/ThemeProvider"

export const metadata: Metadata = {
  title: "AI Q&A.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans dark:bg-black ">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
