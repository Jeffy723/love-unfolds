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
}
