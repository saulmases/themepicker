import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

const Inter_Font = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "ThemePicker",
  description: "Theme Picker for NextJS based on shadcn components library.",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/themepicker-logo-light.svg',
        href: '/images/themepicker-logo-light.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/themepicker-logo-dark.svg',
        href: '/images/themepicker-logo-dark.svg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Inter_Font.className} w-full h-dvh flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
