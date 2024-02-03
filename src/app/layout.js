import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-kid_black_bluish font-arsenal_font text-l">
        {children}
      </body>
    </html>
  );
}
