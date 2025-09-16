import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import BottomNav from "@/components/BottomNav";
import SocialChips from "@/components/SocialChips";
import { ThemeTransitionWrapper } from "@/components/theme-transition-wrapper";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        document.documentElement.classList.add('loading');
        window.addEventListener('load', () => {
          document.documentElement.classList.remove('loading');
        });
      `,
          }}
        />
      </head>

      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <ThemeTransitionWrapper>
            <div className="relative flex flex-col min-h-screen">
              {/* Social Chips - Always visible */}
              <div className="block md:hidden">
                <SocialChips />
              </div>

              {/* Desktop Navbar - hidden on mobile */}
              <div className="hidden md:block">
                <Navbar />
              </div>

              {/* Main content with responsive padding */}
              <main className="container mx-auto max-w-7xl px-6 flex-1 pt-6 md:pt-24 pb-16 md:pb-6 flex flex-col justify-center min-h-0">
                <div className="w-full">{children}</div>
              </main>

              {/* Desktop Footer - hidden on mobile */}
              <footer className="hidden md:flex w-full items-center justify-center py-3 mt-auto">
                {/* <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://github.com/Fcatilizer/ashish-portfolio"
                  title="Ashish Gaurav Portfolio"
                >
                  <span className="text-primary">Ashish Gaurav</span>
                  <p className="text-secondary-500">Portfolio Page</p>
                </Link> */}
              </footer>

              {/* Mobile Bottom Navigation */}
              <BottomNav />
            </div>
          </ThemeTransitionWrapper>
        </Providers>
      </body>
    </html>
  );
}
