import React from 'react';
import './globals.css'
import { Inter } from 'next/font/google'
import Image  from 'next/image'

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
        <header className="bg-blue-600 text-white p-4 flex flex-col items-center gap-3" >
          <Image 
              src="/images/logo.png"
              width={100}
              height={100}
              alt="logo image"
              className="rounded border-black-100"
            />
          <h1 className="text-2xl font-bold text-center">Property Maintenance Portal</h1>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-100 p-4 text-center text-sm text-gray-600">
          © 2024 Property Management System
        </footer>
      </body>
    </html>
  )
}