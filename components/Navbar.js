'use client'
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Navbar(){
  const [dark, setDark] = useState(false)
  useEffect(()=>{ if(dark) document.documentElement.classList.add('dark'); else document.documentElement.classList.remove('dark'); },[dark])
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-gray-900/60 border-b border-gray-200/60 dark:border-gray-800">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <Link href="/"><span className="font-bold text-lg">MillionPixel</span></Link>
          <nav className="flex gap-2">
            <Link href="/marketplace"><button className="nav-btn">Marketplace</button></Link>
            <Link href="/editor"><button className="nav-btn">Editor</button></Link>
            <Link href="/chat"><button className="nav-btn">Chat</button></Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button className="nav-btn" onClick={()=> setDark(!dark)}>{dark ? 'Light' : 'Dark'}</button>
        </div>
      </div>
    </header>
  )
}