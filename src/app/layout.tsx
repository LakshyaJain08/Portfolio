import type {Metadata} from "next";
import {Space_Grotesk, DM_Sans, JetBrains_Mono} from "next/font/google";
import Footer from "@/components/layout/Footer";
import Terminal from "@/components/terminal/Terminal";
import ScrollProgress from "@/components/ui/ScrollProgress";
import {CommandMenu} from "@/components/ui/CommandMenu";
import SpotlightCursor from "@/components/ui/SpotlightCursor";
import {Dock} from "@/components/ui/Dock";
import {MobileMenu} from "@/components/ui/MobileMenu";
import {ThemeProvider} from "@/components/theme/ThemeProvider";
import Script from "next/script";
import "./globals.css";
import React from "react";

const displayFont = Space_Grotesk({
    variable: "--font-display",
    subsets: ["latin"],
    weight: ["500", "600", "700"],
});

const sansFont = DM_Sans({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const monoFont = JetBrains_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
    weight: ["400", "500"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
    title: "Lakshya Jain — AI & ML Engineer | Data Scientist",
    description:
        "Personal portfolio of Lakshya Jain — AI Engineer, ML Engineer, Data Scientist, and Data & Business Analyst building intelligent systems and data-driven solutions.",
    metadataBase: new URL("https://lakshyajain08.github.io/Portfolio"),
    icons: {
        icon: [
            { url: `${basePath}/favicon.ico` },
            { url: `${basePath}/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
            { url: `${basePath}/favicon-16x16.png`, sizes: "16x16", type: "image/png" },
        ],
        apple: [
            { url: `${basePath}/apple-touch-icon.png`, sizes: "180x180", type: "image/png" },
        ],
        shortcut: [`${basePath}/favicon.ico`],
    },
    manifest: `${basePath}/site.webmanifest`,
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Lakshya Jain — AI & ML Engineer | Data Scientist",
        description:
            "AI Engineer, ML Engineer, Data Scientist, and Data & Business Analyst building intelligent systems and data-driven solutions.",
        type: "website",
        url: "https://lakshyajain08.github.io/Portfolio",
        siteName: "Lakshya Jain",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        <head>
            <link
                rel="icon"
                href={`${basePath}/favicon.ico`}
                sizes="any"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href={`${basePath}/apple-touch-icon.png`}
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href={`${basePath}/favicon-32x32.png`}
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href={`${basePath}/favicon-16x16.png`}
            />
            <link rel="manifest" href={`${basePath}/site.webmanifest`}/>
        </head>
        <body
            className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable} antialiased bg-[#fafaf9] dark:bg-[#0c0a09] text-[#1c1917] dark:text-[#fafaf9] font-sans relative transition-colors duration-300 selection:bg-indigo-500/20 selection:text-indigo-400`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange={false}
        >
            <Script
                id="json-ld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: "Lakshya Jain",
                        url: "https://shubhamxgupta.github.io",
                        jobTitle: "AI & ML Engineer | Data Scientist",
                        sameAs: [
                            "https://github.com/LakshyaJain08",
                            "https://www.linkedin.com/in/lakshya-jain-837ab7288/",
                        ],
                        knowsAbout: [
                            "Artificial Intelligence",
                            "Machine Learning",
                            "Data Science",
                            "Data Analytics",
                            "Business Analytics",
                            "Deep Learning",
                            "Software Engineering",
                        ],
                    }),
                }}
            />
            <div className="hidden md:block">
                <SpotlightCursor/>
            </div>
            <CommandMenu/>
            <ScrollProgress/>

            {/* Navigation: macOS Dock */}
            <div className="hidden md:block">
                <Dock/>
            </div>
            <MobileMenu/>

            <main className="min-h-screen flex flex-col pb-28">{children}</main>

            <Terminal/>
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}
