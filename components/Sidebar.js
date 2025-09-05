export default function Sidebar({ store }){
  const topBuyer = store && store.reserved && store.reserved.slice().sort((a,b)=> b.pixels.length - a.pixels.length)[0]
  const mostLiked = store && store.likes && Object.entries(store.likes).sort((a,b)=> b[1]-a[1])[0]
  return (
    <aside className="space-y-4">
      <div className="card">
        <h3 className="font-semibold">Top Buyer</h3>
        <div className="mt-2">{topBuyer ? `${topBuyer.name} — ${topBuyer.pixels.length} px` : '—'}</div>
      </div>
      <div className="card">
        <h3 className="font-semibold">Most Liked Ad</h3>
        <div className="mt-2">{mostLiked ? `${mostLiked[0]} — ${mostLiked[1]} Likes` : '—'}</div>
      </div>
      <div className="card">
        <h3 className="font-semibold">Recent Reservations</h3>
        <ul className="mt-2 space-y-2">
          {store && store.reserved && store.reserved.slice(-5).reverse().map(r=>(<li key={r.id} className="flex justify-between"><div>{r.name}</div><div className="text-xs opacity-70">{r.pixels.length} px</div></li>))}
        </ul>
      </div>
    </aside>
  )
}