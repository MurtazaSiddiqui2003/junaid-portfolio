import "./globals.css";

export const metadata = {
  title: "Syed Junaid Shah | Fashion & Technical Designer",
  description: "Portfolio of Syed Junaid Shah — fashion design, technical design, techpack development, and graphic design."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
