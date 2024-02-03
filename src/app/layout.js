import "./globals.css";
import { Header } from "@/components/index";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-kid_black font-arsenal_font text-l">
        <nav>
          <Header />
        </nav>
        {children}
      </body>
    </html>
  );
}
