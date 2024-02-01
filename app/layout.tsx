import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Sidebar from "./sidebar/sidebar";
import Navbar from "./navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ada",
  description: "The new way to study for interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(metadata);

  return (
    <html lang="en">
      <body className={inter.className}>
        {
          <>
            <Navbar />
            <div className={styles.app}>
              <Sidebar />
              <div className={styles.children}>{children}</div>
            </div>
          </>
        }
      </body>
    </html>
  );
}
