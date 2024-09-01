import "./globals.css";

export const metadata = {
  title: "HooBank",
  description: "The Next Generation Payment Method.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
