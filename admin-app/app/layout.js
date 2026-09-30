import "./globals.css";

export const metadata = {
  title: "Florar - Admin",
  description: "Panel de administración de los links de Florar",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" }
    ],
    apple: { url: "/favicon-180.png", sizes: "180x180" }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
