import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lautarodesouches.com"),
  title: {
    default: "Lautaro Desouches | Front-End Developer",
    template: "%s | Lautaro Desouches",
  },
  description:
    "Portfolio profesional de Lautaro Desouches. Desarrollador Front-End especializado en Next.js, React y TypeScript. Creando experiencias web performantes y accesibles.",
  keywords: [
    "Front-End Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Web Development",
    "Argentina",
    "Software Engineer",
  ],
  authors: [{ name: "Lautaro Desouches", url: "https://lautarodesouches.com" }],
  creator: "Lautaro Desouches",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://lautarodesouches.com",
    title: "Lautaro Desouches | Front-End Developer",
    description:
      "Ingeniería Front-End Escalable. Especialista en Next.js y ecosistema React moderno.",
    siteName: "Lautaro Desouches Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Lautaro Desouches Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lautaro Desouches | Front-End Developer",
    description: "Ingeniería Front-End Escalable. Next.js, TypeScript, Tailwind.",
    creator: "@lautarodesouches", // Update if known, otherwise keep generic or remove
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "https://lautarodesouches.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
