const minQueryLength = 2;
const searchIndexPromises = new Map();

const searchRoots = Array.from(document.querySelectorAll('[data-site-search]'));

if (searchRoots.length) {
  searchRoots.forEach(setupSearch);
}

function setupSearch(root) {
  const toggle = root.querySelector('[data-search-toggle]');
  const searchPanel = root.querySelector('[data-search-panel]');
  const input = root.querySelector('[data-search-input]');
  const panel = root.querySelector('[data-search-results]');
  const list = root.querySelector('[data-search-list]');
  const status = root.querySelector('[data-search-status]');
  if (!input || !panel || !list || !status) return;

  let activeIndex = -1;
  let currentResults = [];

  if (toggle && searchPanel) {
    toggle.addEventListener('click', () => {
      if (searchPanel.hidden) {
        openSearchPanel();
      } else {
        closeSearchPanel();
        toggle.focus();
      }
    });
  }

  input.addEventListener('input', () => updateResults());
  input.addEventListener('focus', () => {
    if (input.value.trim()) updateResults();
  });
  input.addEventListener('keydown', (event) => {
    const links = Array.from(list.querySelectorAll('.search-result'));
    if (event.key === 'Escape') {
      event.preventDefault();
      closeSearchPanel();
      return;
    }
    if (!links.length) return;
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      activeIndex = (activeIndex + 1) % links.length;
      setActiveResult(links, activeIndex);
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      activeIndex = activeIndex <= 0 ? links.length - 1 : activeIndex - 1;
      setActiveResult(links, activeIndex);
    }
    if (event.key === 'Enter' && activeIndex >= 0) {
      event.preventDefault();
      links[activeIndex].click();
    }
  });

  root.addEventListener('submit', (event) => {
    event.preventDefault();
    const firstResult = list.querySelector('.search-result');
    if (firstResult) firstResult.click();
  });

  document.addEventListener('click', (event) => {
    if (!root.contains(event.target)) closeSearchPanel();
  });

  async function updateResults() {
    const rawQuery = input.value.trim();
    const query = normalizeText(rawQuery);
    activeIndex = -1;
    currentResults = [];
    list.replaceChildren();

    if (!rawQuery) {
      closeResults();
      return;
    }

    openResults();
    if (query.length < minQueryLength) {
      setStatus(root.dataset.emptyMessage || 'Type at least 2 characters to search');
      return;
    }

    const lang = root.dataset.searchLang || document.documentElement.lang || 'en';
    const entries = await getSearchIndex(lang);
    currentResults = entries
      .filter((entry) => entry.lang === lang)
      .map((entry) => ({ entry, score: scoreEntry(entry, query) }))
      .filter((result) => result.score > 0)
      .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
      .slice(0, 8)
      .map((result) => result.entry);

    renderResults();
  }

  function renderResults() {
    list.replaceChildren();
    if (!currentResults.length) {
      setStatus(root.dataset.noResultsMessage || 'No matching guides found');
      return;
    }

    const label = root.dataset.resultsLabel || 'results';
    setStatus(`${currentResults.length} ${label}`);
    currentResults.forEach((entry) => {
      list.appendChild(createResult(entry));
    });
  }

  function createResult(entry) {
    const link = document.createElement('a');
    link.className = 'search-result';
    link.href = entry.url;

    const eyebrow = document.createElement('span');
    eyebrow.className = 'search-result-type';
    eyebrow.textContent = `${entry.type} / ${entry.category}`;

    const title = document.createElement('strong');
    title.textContent = entry.title;

    const description = document.createElement('span');
    description.className = 'search-result-description';
    description.textContent = entry.description;

    link.append(eyebrow, title, description);
    return link;
  }

  function setStatus(message) {
    status.textContent = message;
  }

  function openResults() {
    panel.hidden = false;
    input.setAttribute('aria-expanded', 'true');
  }

  function closeResults() {
    panel.hidden = true;
    input.setAttribute('aria-expanded', 'false');
    activeIndex = -1;
  }

  function openSearchPanel() {
    if (searchPanel) {
      searchPanel.hidden = false;
    }
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'true');
    }
    requestAnimationFrame(() => {
      input.focus();
      if (input.value.trim()) updateResults();
    });
  }

  function closeSearchPanel() {
    closeResults();
    if (searchPanel) {
      searchPanel.hidden = true;
    }
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
    }
    input.blur();
  }
}

function setActiveResult(links, index) {
  links.forEach((link, linkIndex) => {
    link.classList.toggle('is-active', linkIndex === index);
  });
  links[index]?.scrollIntoView({ block: 'nearest' });
}

function getSearchIndex(lang) {
  const language = String(lang || 'en').split('-')[0] || 'en';
  if (!searchIndexPromises.has(language)) {
    const promise = fetch(`/search-index-${language}.json`)
      .then((response) => {
        if (!response.ok) throw new Error(`Search index failed: ${response.status}`);
        return response.json();
      })
      .then((entries) =>
        entries.map((entry) => ({
          ...entry,
          searchableTitle: normalizeText(entry.title),
          searchableDescription: normalizeText(entry.description),
          searchableCategory: normalizeText(entry.category),
          searchableBody: normalizeText(entry.body)
        }))
      )
      .catch(() => []);
    searchIndexPromises.set(language, promise);
  }
  return searchIndexPromises.get(language);
}

function scoreEntry(entry, query) {
  const terms = query.split(' ').filter(Boolean);
  let score = 0;

  if (entry.searchableTitle === query) score += 120;
  if (entry.searchableTitle.includes(query)) score += 70;
  if (entry.searchableDescription.includes(query)) score += 24;
  if (entry.searchableCategory.includes(query)) score += 18;
  if (entry.searchableBody.includes(query)) score += 10;

  for (const term of terms) {
    if (entry.searchableTitle.includes(term)) score += 30;
    if (entry.searchableDescription.includes(term)) score += 10;
    if (entry.searchableCategory.includes(term)) score += 8;
    if (entry.searchableBody.includes(term)) score += 2;
  }

  return score;
}

function normalizeText(value) {
  return String(value || '')
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
