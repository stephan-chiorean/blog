import "../../styles/globals.css";
export const metadata = {
  title: 'Studio',
  description: 'A Stevie Production',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
