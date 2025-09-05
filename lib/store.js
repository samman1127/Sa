export function load(){ try{ const raw = localStorage.getItem('md_store_v2'); return raw ? JSON.parse(raw) : null }catch(e){ return null } }
export function save(s){ localStorage.setItem('md_store_v2', JSON.stringify(s)) }
export function init(){ const s = {
  width: 50, height: 30,
  reserved: [
    { id:'r1', name:'Ali', url:'https://example.com', color:'#ffbe0b', pixels:[{x:2,y:1},{x:3,y:1},{x:2,y:2},{x:3,y:2}], createdAt: new Date().toISOString() },
    { id:'r2', name:'Sara', url:'https://sara.test', color:'#fb5607', pixels:[{x:10,y:5},{x:11,y:5},{x:12,y:5}], createdAt: new Date().toISOString() },
    { id:'r3', name:'Mona', url:'', color:'#7c3aed', pixels:[{x:20,y:8}] }
  ],
  likes: { r1: 12, r2: 34 },
  bids: [{user:'Ahmed',price:10,amount:5},{user:'Lina',price:9,amount:3}],
  asks: [{user:'Sara',price:12,amount:4},{user:'Omar',price:11,amount:2}],
  chat: [{id:1,user:'System',text:'Welcome to Pixel Chat'}]
}; save(s); return s }