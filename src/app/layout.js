import AuthProvider from "@/components/providers/AuthProvider";
import "./globals.css";

export const metadata = {
  title: "Tech Tunes Motors",
  description: "Car Repair shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
