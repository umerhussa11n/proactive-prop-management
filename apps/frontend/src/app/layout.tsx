import React from 'react';
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@components/ui/Header'
import Footer from "@components/ui/Footer"
import SideNavigation from "@components/ui/SideNavigation"
import MainLayout from "@components/ui/MainLayout"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Property Management Portal',
  description: 'Professional property maintenance and management solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-neutral-50 antialiased`}>
        <div className="h-full flex">
          {/* Left Sidebar Navigation */}
          <SideNavigation className="w-64 flex-shrink-0" />

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col min-w-0">
            <Header />
            <MainLayout>
              {children}
            </MainLayout>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
