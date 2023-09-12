// layout.tsx は名前の通りレイアウトに関するファイルで App Router では、
// app ディレクトリ直下に保存された layoutx.tsx （この）ファイルがすべての page.tsx に適用される
import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from "next/image";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
}

export default function Layout({children}: {
  children: React.ReactNode,
}) {
  return (
  <html lang="ja">
    <body>
      <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
        <header>
          <nav className="bg-gray-800 w-screen">
            <div className="flex items-center pl-8 h-14">
              <div className="flex space-x-4">
                <Link href="/" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Home
                </Link>
                <Link href="/blog" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Blog
                </Link>
                <Link href="/contact" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="flex flex-1 justify-center items-center flex-col w-screen">
          {children}
        </main>
        <footer className="w-full h-12 flex justify-center items-center border-t">
          <a
            className="flex items-center"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            {/* <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" /> */}
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </a>
        </footer>
      </div>
    </body>
  </html>
  )
}
