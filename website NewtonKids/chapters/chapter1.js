export function initChapter1(){
  const canvas = document.getElementById('c1');
  const ctx = canvas.getContext('2d');
  let x=100, y=canvas.height/2, vx=2;
  function step(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle='#1e90ff';
    x += vx;
    if (x>canvas.width) x=0;
    ctx.beginPath(); ctx.arc(x, y, 12, 0, Math.PI*2); ctx.fill();
    requestAnimationFrame(step);
  }
  step();
}