import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Aneri Bhavsar | AI/ML Engineer',
  description: 'AI/ML Engineer specializing in Computer Vision and Deep Learning. Building intelligent systems that solve real-world problems.',
  generator: 'v0.app',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" style={{ colorScheme: 'light' }}>
      <body className="font-sans antialiased bg-background text-foreground" style={{ backgroundColor: '#F5F3EF' }}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
