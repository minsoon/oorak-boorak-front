import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/shared/styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oorak Boorak',
  description: 'Oorak Boorak - A brawny platform for personal trainers',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
