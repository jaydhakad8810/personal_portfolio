import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jay Dhakad — Software Developer & Cybersecurity',
  description:
    'BTech IT student at MIT ADT University. Full-stack developer, cybersecurity enthusiast, hackathon winner. Building real things that work in the real world.',
  keywords: ['Jay Dhakad', 'Software Developer', 'Cybersecurity', 'Full Stack', 'MIT ADT', 'Pune', 'Flutter', 'React', 'Node.js'],
  openGraph: {
    title: 'Jay Dhakad — Portfolio',
    description: 'Full-stack developer & cybersecurity enthusiast from Pune',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
