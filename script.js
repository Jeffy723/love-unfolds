const quotes = [
  "Love is composed of a single soul inhabiting two bodies. – Aristotle",
  "Where there is love, there is life. – Mahatma Gandhi",
  "Love recognizes no barriers. It jumps hurdles, leaps fences, and arrives at its destination full of hope. – Maya Angelou",
  "You are my today and all of my tomorrows. – Leo Christopher",
  "To love and be loved is to feel the sun from both sides. – David Viscott"
];

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').textContent = quotes[randomIndex];

  const imageElements = document.querySelectorAll('.quote-image');
  imageElements.forEach(function(imgEl, index) {
    const randomNum = Math.floor(Math.random() * 1000) + index;
    imgEl.src = `https://picsum.photos/400/300?random=${randomNum}`;
  });
}
