import './globals.css'
import '../styles/global.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dimulai.id',
  description: 'Dimulai adalah media pembelajaran khusus untukmu yang ingin menambah wawasan dengan menyajikan berbagai konten menarik, yang membuat belajar menjadi terasa menyenangkan.',
  openGraph: {
    title: 'Dimulai.id',
    description: 'Dimulai adalah media pembelajaran khusus untukmu yang ingin menambah wawasan dengan menyajikan berbagai konten menarik, yang membuat belajar menjadi terasa menyenangkan.',
    url: 'https://nextjs.org',
    siteName: 'Dimulai.id',
    images: [
      {
        url: '/assets/logodimulai.png',
        width: 800,
        height: 600,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
