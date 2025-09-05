'use client'
import { useEffect, useState } from 'react'
import PixelGrid from '../components/PixelGrid'
import Sidebar from '../components/Sidebar'
import { load, init, save } from '../lib/store'

export default function Home(){
  const [store, setStore] = useState(null)
  useEffect(()=>{ const s = load(); if(!s) setStore(init()); else setStore(s) },[])
  useEffect(()=>{ if(store) save(store) },[store])

  if(!store) return <div>Loading...</div>
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="md:col-span-2 space-y-4">
        <div className="card p-4">
          <h1 className="text-2xl font-semibold">MillionPixel — Modern Demo</h1>
          <p className="text-sm opacity-70 mt-1">شبكة تفاعلية مع إعلانات وهمية ومعلومات جانبية.</p>
        </div>
        <PixelGrid width={store.width} height={store.height} reserved={store.reserved} cell={9} />
      </div>
      <aside>
        <Sidebar store={store} />
      </aside>
    </div>
  )
}