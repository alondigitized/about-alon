export function initChapter3(){
  const canvas = document.getElementById('c3');
  const ctx = canvas.getContext('2d');
  let x=300, y=canvas.height-40, vx=0;
  canvas.addEventListener('click', ()=>{ vx -= 4; });
  function step(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    vx *= 0.98; x += vx;
    if (x<20){ x=20; vx=-vx; }
    ctx.fillStyle='#10b981'; ctx.beginPath(); ctx.arc(x,y,12,0,Math.PI*2); ctx.fill();
    requestAnimationFrame(step);
  }
  step();
}