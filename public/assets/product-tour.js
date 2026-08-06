const root = document.querySelector('[data-product-tour]');
const configNode = document.querySelector('#product-tour-config');

if (root && configNode) {
  const config = JSON.parse(configNode.textContent);
  const collections = config.collections;
  const labels = config.labels;
  const image = root.querySelector('[data-tour-image]');
  const hotspot = root.querySelector('[data-tour-hotspot]');
  const hint = root.querySelector('[data-tour-hint]');
  const counter = root.querySelector('[data-tour-counter]');
  const summary = root.querySelector('[data-tour-summary]');
  const title = root.querySelector('[data-tour-title]');
  const description = root.querySelector('[data-tour-description]');
  const tags = root.querySelector('[data-tour-tags]');
  const dots = root.querySelector('[data-tour-dots]');
  const previous = root.querySelector('[data-tour-previous]');
  const next = root.querySelector('[data-tour-next]');
  const tabs = [...root.querySelectorAll('[data-tour-tab]')];
  const workspace = root.querySelector('.tour-workspace');
  const params = new URLSearchParams(window.location.search);

  let collectionIndex = Math.max(
    0,
    collections.findIndex((collection) => collection.id === params.get('area'))
  );
  let stepIndex = Math.max(0, Number.parseInt(params.get('step') || '1', 10) - 1);

  const currentCollection = () => collections[collectionIndex];
  const currentStep = () => currentCollection().steps[stepIndex];
  const isFirstStep = () => collectionIndex === 0 && stepIndex === 0;
  const isLastStep = () =>
    collectionIndex === collections.length - 1 && stepIndex === currentCollection().steps.length - 1;

  const setText = (node, value) => {
    if (node) node.textContent = value;
  };

  const writeUrl = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('area', currentCollection().id);
    url.searchParams.set('step', String(stepIndex + 1));
    history.replaceState(null, '', url);
  };

  const preloadNext = () => {
    let nextCollectionIndex = collectionIndex;
    let nextStepIndex = stepIndex + 1;
    if (nextStepIndex >= currentCollection().steps.length) {
      nextCollectionIndex += 1;
      nextStepIndex = 0;
    }
    if (nextCollectionIndex >= collections.length) return;
    const preload = new Image();
    preload.src = collections[nextCollectionIndex].steps[nextStepIndex].image;
  };

  const announceInteraction = (action) => {
    window.dataLayer?.push({
      event: 'product_tour_interaction',
      productTourArea: currentCollection().id,
      productTourStep: stepIndex + 1,
      productTourAction: action
    });
  };

  const renderDots = () => {
    dots.replaceChildren();
    currentCollection().steps.forEach((step, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `tour-dot${index === stepIndex ? ' is-active' : ''}`;
      dot.setAttribute('aria-label', `${labels.step} ${index + 1}: ${step.title}`);
      dot.setAttribute('aria-current', index === stepIndex ? 'step' : 'false');
      dot.addEventListener('click', () => {
        stepIndex = index;
        render();
        announceInteraction('step_dot');
      });
      dots.append(dot);
    });
  };

  const render = () => {
    const collection = currentCollection();
    stepIndex = Math.min(stepIndex, collection.steps.length - 1);
    const step = currentStep();

    tabs.forEach((tab) => {
      const active = tab.dataset.tourTab === collection.id;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
    });

    image.src = step.image;
    image.alt = step.alt;
    hotspot.setAttribute('aria-label', step.prompt);
    hotspot.style.left = `${step.hotspot.left}%`;
    hotspot.style.top = `${step.hotspot.top}%`;
    hotspot.style.width = `${step.hotspot.width}%`;
    hotspot.style.height = `${step.hotspot.height}%`;

    setText(hint, step.prompt);
    setText(counter, `${labels.step} ${stepIndex + 1} ${labels.of} ${collection.steps.length}`);
    setText(summary, collection.summary);
    setText(title, step.title);
    setText(description, step.description);

    tags.replaceChildren();
    step.tags.forEach((tag) => {
      const chip = document.createElement('span');
      chip.textContent = tag;
      tags.append(chip);
    });

    renderDots();
    previous.disabled = isFirstStep();
    setText(next, isLastStep() ? labels.restart : labels.next);
    writeUrl();
    preloadNext();
  };

  const goNext = (action = 'next') => {
    if (isLastStep()) {
      collectionIndex = 0;
      stepIndex = 0;
    } else if (stepIndex < currentCollection().steps.length - 1) {
      stepIndex += 1;
    } else {
      collectionIndex += 1;
      stepIndex = 0;
    }
    render();
    announceInteraction(action);
  };

  const goPrevious = () => {
    if (isFirstStep()) return;
    if (stepIndex > 0) {
      stepIndex -= 1;
    } else {
      collectionIndex -= 1;
      stepIndex = currentCollection().steps.length - 1;
    }
    render();
    announceInteraction('previous');
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      collectionIndex = collections.findIndex((collection) => collection.id === tab.dataset.tourTab);
      stepIndex = 0;
      render();
      announceInteraction('area_tab');
    });
  });

  previous.addEventListener('click', goPrevious);
  next.addEventListener('click', () => goNext());
  hotspot.addEventListener('click', () => goNext('screen_hotspot'));

  workspace.addEventListener('keydown', (event) => {
    if (event.target.closest('button, a')) return;
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goNext('keyboard_next');
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goPrevious();
    }
  });

  render();
}
