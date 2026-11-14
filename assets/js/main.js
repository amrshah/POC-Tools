(() => {
  const grid = document.getElementById('tools-grid');
  const searchInput = document.getElementById('tool-search');
  const categoryNav = document.getElementById('category-navigation');
  const resultCount = document.getElementById('result-count');
  const activeFilterLabel = document.getElementById('active-filter-label');
  const clearFilters = document.getElementById('clear-filters');
  const emptyState = document.getElementById('empty-state');
  const loadError = document.getElementById('load-error');
  const sortSelect = document.getElementById('sort-tools');
  const sidebar = document.getElementById('directory-sidebar');
  const sidebarBackdrop = document.getElementById('sidebar-backdrop');
  const menuButton = document.getElementById('mobile-menu-button');

  let tools = [];
  let selectedCategory = 'all';

  const iconFallback = 'fa-solid fa-wand-magic-sparkles';
  const categoryIcons = {
    'Image Tools': 'fa-regular fa-images',
    'AI & Marketing': 'fa-solid fa-brain',
    'Productivity': 'fa-solid fa-bolt',
    'Experiments': 'fa-solid fa-flask'
  };

  function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarBackdrop.classList.remove('visible');
    menuButton.setAttribute('aria-expanded', 'false');
  }

  function openSidebar() {
    sidebar.classList.add('open');
    sidebarBackdrop.classList.add('visible');
    menuButton.setAttribute('aria-expanded', 'true');
  }

  menuButton.addEventListener('click', () => {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });
  sidebarBackdrop.addEventListener('click', closeSidebar);

  function createCategoryButton(category, count, icon, active = false) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'category-link' + (active ? ' active' : '');
    button.dataset.category = category;
    const left = document.createElement('span');
    const glyph = document.createElement('i');
    glyph.className = icon;
    const label = document.createElement('span');
    label.textContent = category === 'all' ? 'All tools' : category;
    left.append(glyph, label);
    const total = document.createElement('span');
    total.className = 'category-count';
    total.textContent = String(count);
    button.append(left, total);
    button.addEventListener('click', () => {
      selectedCategory = category;
      categoryNav.querySelectorAll('.category-link').forEach(item => item.classList.toggle('active', item.dataset.category === category));
      activeFilterLabel.textContent = category === 'all' ? 'All tools' : category;
      renderTools();
      closeSidebar();
    });
    return button;
  }

  function renderCategories() {
    const categories = [...new Set(tools.map(tool => tool.category).filter(Boolean))].sort((a, b) => a.localeCompare(b));
    categoryNav.replaceChildren();
    categoryNav.append(createCategoryButton('all', tools.length, 'fa-solid fa-border-all', true));
    categories.forEach(category => {
      const count = tools.filter(tool => tool.category === category).length;
      categoryNav.append(createCategoryButton(category, count, categoryIcons[category] || 'fa-regular fa-folder'));
    });
  }

  function createCard(tool) {
    const link = document.createElement('a');
    link.className = 'tool-card' + (tool.featured ? ' featured' : '');
    link.href = tool.link;
    link.setAttribute('aria-label', 'Open ' + tool.name);

    const top = document.createElement('div');
    top.className = 'card-top';
    const icon = document.createElement('span');
    icon.className = 'tool-icon';
    const glyph = document.createElement('i');
    glyph.className = tool.icon || iconFallback;
    icon.append(glyph);
    const status = document.createElement('span');
    status.className = 'tool-status' + (tool.status === 'Experimental' ? ' experimental' : '');
    status.textContent = tool.status || 'Available';
    top.append(icon, status);

    const title = document.createElement('h3');
    title.textContent = tool.name;
    const description = document.createElement('p');
    description.textContent = tool.description;

    const bottom = document.createElement('div');
    bottom.className = 'card-bottom';
    const category = document.createElement('span');
    category.className = 'tool-category';
    category.textContent = tool.category || 'Other';
    const open = document.createElement('span');
    open.className = 'open-label';
    open.textContent = 'Open tool ';
    const arrow = document.createElement('i');
    arrow.className = 'fa-solid fa-arrow-right';
    open.append(arrow);

    bottom.append(category, open);
    link.append(top, title, description, bottom);
    return link;
  }

  function renderTools() {
    const query = searchInput.value.trim().toLocaleLowerCase();
    let visible = tools.filter(tool => {
      const categoryMatch = selectedCategory === 'all' || tool.category === selectedCategory;
      const haystack = [tool.name, tool.description, tool.category, ...(tool.tags || [])].join(' ').toLocaleLowerCase();
      return categoryMatch && (!query || haystack.includes(query));
    });

    if (sortSelect.value === 'az') {
      visible = visible.slice().sort((a, b) => a.name.localeCompare(b.name));
    } else {
      visible = visible.slice().sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || a.name.localeCompare(b.name));
    }

    grid.replaceChildren(...visible.map(createCard));
    grid.hidden = visible.length === 0;
    emptyState.hidden = visible.length !== 0;
    resultCount.textContent = visible.length + (visible.length === 1 ? ' tool' : ' tools');
    clearFilters.hidden = !query && selectedCategory === 'all';
    activeFilterLabel.textContent = selectedCategory === 'all' ? 'All tools' : selectedCategory;
    grid.setAttribute('aria-busy', 'false');
  }

  searchInput.addEventListener('input', renderTools);
  sortSelect.addEventListener('change', renderTools);
  clearFilters.addEventListener('click', resetFilters);
  document.getElementById('reset-search').addEventListener('click', resetFilters);
  function resetFilters() {
    searchInput.value = '';
    selectedCategory = 'all';
    categoryNav.querySelectorAll('.category-link').forEach(item => item.classList.toggle('active', item.dataset.category === 'all'));
    renderTools();
  }

  document.addEventListener('keydown', event => {
    if (event.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName) && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      searchInput.focus();
    }
    if (event.key === 'Escape') closeSidebar();
  });

  document.getElementById('current-year').textContent = String(new Date().getFullYear());

  fetch('./tools.json')
    .then(response => {
      if (!response.ok) throw new Error('Unable to load tool registry');
      return response.json();
    })
    .then(data => {
      if (!Array.isArray(data)) throw new Error('Tool registry must be an array');
      tools = data;
      renderCategories();
      renderTools();
    })
    .catch(error => {
      console.error('Failed to load tools.json', error);
      grid.hidden = true;
      grid.setAttribute('aria-busy', 'false');
      loadError.hidden = false;
      resultCount.textContent = 'Unavailable';
    });
})();
