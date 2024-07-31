import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>crework</title>
      </head>
      <body className="flex flex-col min-h-screen bg-white shadow">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
