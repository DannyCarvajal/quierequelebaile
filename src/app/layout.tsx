import { SWRConfig } from "swr";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig value={{ fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()) }}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </SWRConfig>
  );
}
