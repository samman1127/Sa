'use client'
import { useEffect, useState } from 'react'
import { load, init, save } from '../../lib/store'

export default function Marketplace(){
  const [store, setStore] = useState(null)
  useEffect(()=>{ const s=load(); if(!s) setStore(init()); else setStore(s) },[])
  useEffect(()=>{ if(store) save(store) },[store])

  if(!store) return <div>Loading...</div>
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="md:col-span-2 card p-4">
        <h2 className="text-lg font-semibold">Order Book</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="p-2 border rounded">
            <h3 className="font-semibold">Bids</h3>
            <table className="w-full text-sm mt-2">
              <thead><tr><th>User</th><th>Price</th><th>Amount</th></tr></thead>
              <tbody>{store.bids.map((b,i)=>(<tr key={i}><td>{b.user}</td><td>{b.price}</td><td>{b.amount}</td></tr>))}</tbody>
            </table>
          </div>
          <div className="p-2 border rounded">
            <h3 className="font-semibold">Asks</h3>
            <table className="w-full text-sm mt-2">
              <thead><tr><th>User</th><th>Price</th><th>Amount</th></tr></thead>
              <tbody>{store.asks.map((a,i)=>(<tr key={i}><td>{a.user}</td><td>{a.price}</td><td>{a.amount}</td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </div>
      <aside className="space-y-4">
        <div className="card">
          <h3 className="font-semibold">Quick Buy</h3>
          <p className="text-sm opacity-70 mt-1">Mock purchase (local only)</p>
          <button className="mt-3 nav-btn" onClick={()=> alert('Mock buy — saved locally')}>Buy Selected</button>
        </div>
        <div className="card">
          <h3 className="font-semibold">Your Fee</h3>
          <div className="mt-2">Estimated: 0.2%</div>
        </div>
      </aside>
    </div>
  )
}