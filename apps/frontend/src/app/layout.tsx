import React from 'react';
import './globals.css'
import { Inter } from 'next/font/google'
import  Header  from '@components/ui/Header'
import Footer from "@components/ui/Footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tenant Maintenance Tickets',
  description: 'Submit and track property maintenance requests',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Header />
        
        <main className="container mx-auto px-4 py-8 border border-white-700">
          <div className='border border-red-50'>Main Test</div>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}