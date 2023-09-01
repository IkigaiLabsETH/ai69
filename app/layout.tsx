import "./globals.css";
import { Navbar } from "@/components/Navbar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ marginBottom: "20px" }}>
            {/* Place your search bar component here */}
          </div>
          <Navbar></Navbar>
          {children}
        </div>
      </body>
    </html>
  )
}