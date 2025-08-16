import type React from "react"
import type { Metadata } from "next"
import { Great_Vibes, Pinyon_Script } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import RotatingLogo from "../components/rotating-logo"

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-great-vibes",
})

const pinyonScript = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pinyon-script",
})

export const metadata: Metadata = {
  title: "Sweet Pear - Digital Magazine",
  description: "Writing, Conceptual Collages, Cinematic Vlogs, and Handmade Art",
  generator: "v0.app",
}

function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <RotatingLogo size="nav" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/collages" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Collages
            </Link>
            <Link href="/vlogs" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Vlogs
            </Link>
            <Link href="/art" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Handmade Art
            </Link>
          </div>

          <div className="flex items-center">
            <button className="p-2 text-gray-700 hover:text-red-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${pinyonScript.variable} antialiased`}>
      <body className="bg-white">
        <Navigation />
        <main className="pt-20">{children}</main>

        <footer className="bg-white border-t border-gray-100 py-8">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="font-great-vibes text-3xl text-red-600 mb-4">Sweet Pear</h2>
            <p className="text-gray-500 text-sm">© 2025 Sweet Pear Digital Magazine</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
