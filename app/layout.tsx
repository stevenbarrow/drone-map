import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "WellLifeAi",
  description: "The Wizzards at Patronus Energy have made it kindergarden-easy to detect drones...mic drop...",
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WellLifeAi',
    description: 'The Wizzards at Patronus Energy have made it kindergarden-easy to detect drones...mic drop...',
    images: 'https://static.wixstatic.com/media/6d8ffc_591befbdf8a44f8ea14a1db4af557673~mv2.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className="min-h-screen h-screen overflow-hidden flex flex-col">
        <Toaster />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
