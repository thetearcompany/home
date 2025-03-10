import type React from "react"
import "@/app/globals.css"
import { IBM_Plex_Sans, Geist } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"

const inter = IBM_Plex_Sans({ subsets: ["latin"], variable: "--font-inter", weight: ["300", "400"] })
const playfair = Geist({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata = {
  title: "Divines Life – Find Your Spiritual Light",
  description:
    "Discover your spiritual guides and embark on a journey of inner awakening. Find meaning in a world of illusions and chaos.",
  keywords: [
    "spiritual guides",
    "inner awakening",
    "divine wisdom",
    "higher consciousness",
    "enlightenment",
    "sacred journey",
    "mysticism",
    "soul purpose",
    "spiritual growth",
    "universal truth"
  ],
  generator: "Divines Engine"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} ${playfair.variable} font-sans select-none`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'