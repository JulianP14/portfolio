import './globals.css'


export const metadata = {
  title: 'My Portfolio',
  description: 'Generated by create next app',
  icons: {}
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
