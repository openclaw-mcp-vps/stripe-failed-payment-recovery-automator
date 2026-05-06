import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Auto-retry failed payments with smart timing',
  description: 'Automatically retries failed Stripe payments with ML-optimized timing and custom messaging to maximize recovery rates.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="66523274-1461-4988-9d34-f93abed60e54"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
