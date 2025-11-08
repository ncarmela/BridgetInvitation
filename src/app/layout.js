import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f7f4ef] min-h-screen flex justify-center">
        {children}
      </body>
    </html>
  );
}
