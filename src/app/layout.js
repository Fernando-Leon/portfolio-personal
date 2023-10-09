import './globals.css'
import { Inter } from 'next/font/google'
import { NavBar } from './components/NavBarComponent/NavBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundImage:  'url("/images/Wall1.jpg")', height: '100vh', margin: '0px', padding: '0px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div style={{height: '8vh'}}>
        <NavBar style={{ backgroundColor: 'blue'}}/>
        </div>
        <div style={{height: '92vh', minHeight: '92vh', display: 'grid'}}>
        {children}
        </div>
      </body>
    </html>
  )
}