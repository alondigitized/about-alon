export function initChapter2(){
  const canvas = document.getElementById('c2');
  const ctx = canvas.getContext('2d');
  let x=100, y=50, vy=0, g=0.2;
  function step(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    vy += g; y += vy;
    if (y>canvas.height-20){ y = canvas.height-20; vy = -vy*0.6; }
    ctx.fillStyle='#e11d48'; ctx.beginPath(); ctx.arc(x,y,12,0,Math.PI*2); ctx.fill();
    requestAnimationFrame(step);
  }
  step();
}