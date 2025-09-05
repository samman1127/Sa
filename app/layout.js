import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = { title: 'MillionPixel Demo' }

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container py-6">{children}</main>
      </body>
    </html>
  )
}