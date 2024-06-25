import { Inter } from "next/font/google";
import "@styles/globals.css";
import BasePath from "./components/BasePath";

const inter = Inter({ subsets: ["latin"] });
const basePath = BasePath();

export const metadata = {
  title: "Lamy Construction",
  description: "Lamy Construction Website",
  icons: {
    icon: `${basePath}/assets/logo.png`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nBrXyw023e.woff2"
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />
        <link
          rel="icon"
          href={`${basePath}/assets/logo.png`}
          type="image/png"
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
