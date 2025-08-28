
import Navbar from '@/components/Home/navbar';
import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vansh Chauhan',
  description: 'Portfolio of Vansh',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar/> */}
        {children}
        <Toaster position="top-center" reverseOrder={false} />
        </body>
    </html>
  )
}
