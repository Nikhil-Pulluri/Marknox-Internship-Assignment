import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Nikhil Pulluri',
  description: 'Nikhil Pulluri Portfolio Website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="dark bg-[#1a1a1a]">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
