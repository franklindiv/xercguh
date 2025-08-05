// 🎵 Música de fundo
let musica = document.createElement('audio');
musica.src = 'https://cdn.pixabay.com/audio/2022/03/15/audio_1959b1c1f8.mp3'; // Música sem direitos autorais
musica.autoplay = true;
musica.loop = true;
musica.volume = 0.3;
document.body.appendChild(musica);

// 🎉 Título com arco-íris
let titulo = document.createElement('h1');
titulo.innerText = '🏳️‍🌈 Viva com Orgulho! Seja quem você é! 💃🪩';
titulo.style.color = 'white';
titulo.style.padding = '20px';
titulo.style.textAlign = 'center';
titulo.style.borderRadius = '10px';
titulo.style.fontFamily = 'Arial, sans-serif';
titulo.style.fontSize = '2em';
titulo.style.background = 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)';
titulo.style.boxShadow = '0 0 20px white';
document.body.appendChild(titulo);

// 💃 Emojis dançantes
let emojis = ['💃', '🕺', '👯‍♀️', '🌈', '✨', '🎉', '🥳'];
let container = document.createElement('div');
container.style.textAlign = 'center';
container.style.fontSize = '2em';
container.style.marginTop = '30px';

for (let i = 0; i < 80; i++) {
  let emoji = document.createElement('span');
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.margin = '5px';
  emoji.style.display = 'inline-block';
  emoji.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out infinite`;
  container.appendChild(emoji);
}
document.body.appendChild(container);

// 🎨 Fundo estilizado
document.body.style.backgroundColor = '#111';
document.body.style.minHeight = '100vh';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.overflow = 'hidden';

// ✨ Glitter com Canvas
let canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = 'absolute';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = -1;
document.body.appendChild(canvas);

let ctx = canvas.getContext('2d');
let particles = [];

for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 2,
    dy: (Math.random() - 0.5) * 2,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`
  });
}

function animateGlitter() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  }
  requestAnimationFrame(animateGlitter);
}
animateGlitter();

// 🎈 Animação via CSS
let style = document.createElement('style');
style.innerHTML = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }
`;
document.head.appendChild(style);
