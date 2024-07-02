import { Suspense } from "react";
import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={"dark:bg-zinc-800" } >
          <Suspense fallback={<>Loading.......</>}>
            {children}
          </Suspense>
      </body>
    </html>
  );
}
