'use client'
import { useState, useEffect } from 'react'
import { load, init, save } from '../../lib/store'

export default function Chat(){
  const [store, setStore] = useState(null)
  const [text, setText] = useState('')
  useEffect(()=>{ const s=load(); if(!s) setStore(init()); else setStore(s) },[])

  function send(){ if(!text.trim()) return; const n = { id: Date.now(), user:'You', text }; const s = {...store, chat:[...store.chat, n]}; setStore(s); save(s); setText('') }
  if(!store) return <div>Loading...</div>
  return (
    <div className="card">
      <h2 className="text-lg font-semibold">Chat</h2>
      <div className="mt-3 border rounded h-64 p-2 overflow-auto space-y-2">
        {store.chat.map(m=>(<div key={m.id}><b>{m.user}:</b> {m.text}</div>))}
      </div>
      <div className="mt-3 flex gap-2">
        <input className="input" value={text} onChange={e=>setText(e.target.value)} placeholder="Type..." />
        <button className="nav-btn" onClick={send}>Send</button>
      </div>
    </div>
  )
}