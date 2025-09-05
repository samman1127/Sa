'use client'
import { useState, useEffect } from 'react'
import { load, init, save } from '../../lib/store'

export default function Editor(){
  const [store, setStore] = useState(null)
  const [fileUrl, setFileUrl] = useState(null)
  useEffect(()=>{ const s=load(); if(!s) setStore(init()); else setStore(s) },[])

  function handleUpload(e){ const f=e.target.files?.[0]; if(!f) return; setFileUrl(URL.createObjectURL(f)) }
  function placeMock(){ alert('Image placed (mock). Saved locally)') }

  if(!store) return <div>Loading...</div>
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="md:col-span-2 card">
        <h2 className="text-lg font-semibold">Editor</h2>
        <p className="text-sm opacity-70">Upload a small logo and place it visually (mock action).</p>
        <div className="mt-4">
          <input type="file" onChange={handleUpload} />
          {fileUrl && <div className="mt-4"><img src={fileUrl} alt="preview" className="w-40 h-40 object-contain rounded" /></div>}
        </div>
      </div>
      <aside className="space-y-4">
        <div className="card">
          <h3 className="font-semibold">Place</h3>
          <p className="text-sm opacity-70">Pick position on grid (mock)</p>
          <button className="mt-3 nav-btn" onClick={placeMock}>Place Image</button>
        </div>
      </aside>
    </div>
  )
}