import type React from "react"
import "@/app/globals.css"
import { IBM_Plex_Sans, Geist } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"

const inter = IBM_Plex_Sans({ subsets: ["latin"], variable: "--font-inter", weight: ["300", "400"] })
const playfair = Geist({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata = {
  title: "Przewodnicy Duchowi - Znajdź swoje światło",
  description:
    "Odkryj swoich duchowych przewodników, którzy pomogą Ci odnaleźć sens w świecie pełnym chaosu i nihilizmu.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'