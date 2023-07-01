import './globals.css'
import { Inter, Lato, Nunito } from 'next/font/google'
import "bootstrap-icons/font/bootstrap-icons.css";


const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Lorenzo',
  description: 'Shopping site',
  themeColor: "#FEE8C8"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
