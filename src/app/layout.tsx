import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import ParticleBackground from '@/components/Particles'

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
        <div className="absolute inset-0 -z-10">
          <ParticleBackground />
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
