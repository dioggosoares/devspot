import '../styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { QueryProvider } from '@/providers/query-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevSpot',
  description: 'O melhor lugar para os GithubStars',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`${inter.className} bg-base-800 text-zinc-50`}>
        <div className="h-full">
          <Header />
          <QueryProvider>
            <main className="relative">{children}</main>
          </QueryProvider>
          <Footer />
        </div>
      </body>
    </html>
  )
}
