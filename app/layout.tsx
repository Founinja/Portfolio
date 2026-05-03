import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Jordan Aziaha - Portfolio BTS SIO SISR',
  description: "Découvrez mon parcours et mes compétences en infrastructure, réseaux et sécurité informatique. Étudiant en 2ème année de BTS SIO option SISR.",
  keywords: ["Jordan Aziaha", "Portfolio", "BTS SIO", "SISR", "Infrastructure", "Réseaux", "Sécurité", "Informatique"],
  authors: [{ name: "Jordan Aziaha" }],
  openGraph: {
    title: 'Jordan Aziaha - Portfolio BTS SIO SISR',
    description: "Expertise en infrastructure IT et solutions réseaux. Découvrez mes projets académiques et professionnels.",
    url: 'https://jordan-aziaha.fr',
    siteName: 'Portfolio Jordan Aziaha',
    locale: 'fr_FR',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
