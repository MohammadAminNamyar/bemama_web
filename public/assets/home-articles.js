// The JSON contains escaped, build-rendered cards from the published catalogue.
const grid = document.querySelector('[data-home-articles]');

async function shuffleArticles() {
  try {
    const response = await fetch(grid.dataset.homeArticles);
    if (!response.ok) return;
    const pool = await response.json();
    const count = Number(grid.dataset.cardCount);
    if (!Array.isArray(pool) || pool.length < count) return;
    // Partial Fisher–Yates selects unique articles without sorting bias.
    for (let index = 0; index < count; index += 1) {
      const randomIndex = index + Math.floor(Math.random() * (pool.length - index));
      [pool[index], pool[randomIndex]] = [pool[randomIndex], pool[index]];
    }
    const cards = pool.slice(0, count).map(article => {
      const template = document.createElement('template');
      template.innerHTML = article.html;
      return template.content;
    });
    grid.replaceChildren(...cards);
    grid.dataset.shuffled = 'true';
  } catch {
    // The twelve pre-rendered cards remain usable if the request fails.
  }
}

if (grid) {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        observer.disconnect();
        void shuffleArticles();
      }
    }, { rootMargin: '600px' });
    observer.observe(grid);
  } else {
    void shuffleArticles();
  }
}
