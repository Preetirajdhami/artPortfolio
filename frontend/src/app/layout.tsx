import type React from "react"
import LayoutWrapper from "./components/layout-wrapper"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-primary min-h-screen flex flex-col overflow-y-auto">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
