'use client'
import { useMemo } from 'react'

export default function PixelGrid({ width=50, height=30, reserved=[], cell=10 }){
  const cells = useMemo(()=>{
    const arr = []
    for(let y=0;y<height;y++) for(let x=0;x<width;x++) arr.push({x,y})
    return arr
  },[width,height])

  function isReserved(x,y){
    if(!reserved) return null
    for(const r of reserved){
      for(const p of r.pixels) if(p.x===x && p.y===y) return r
    }
    return null
  }

  return (
    <div className="card p-3 overflow-auto">
      <div style={{ width: width*(cell+2) }}>
        <div style={{ display:'grid', gridTemplateColumns:`repeat(${width}, ${cell}px)`, gap:4 }}>
          {cells.map(c=>{
            const r = isReserved(c.x,c.y)
            return <div key={`${c.x}-${c.y}`} className="pixel" title={r ? r.name : `${c.x},${c.y}`} style={{ background: r ? r.color || '#7c3aed' : '#f1f5f9', border: r ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(0,0,0,0.03)' }} />
          })}
        </div>
      </div>
    </div>
  )
}