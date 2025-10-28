fetch('./tools.json')
  .then(response => response.json())
  .then(tools => {
    const grid = document.getElementById('tools-grid');
    tools.forEach(tool => {
      const card = document.createElement('div');
      card.className = 'bg-white shadow rounded-lg p-5 hover:shadow-lg transition';

      card.innerHTML = `
        <h2 class="text-xl font-semibold mb-2">${tool.name}</h2>
        <p class="text-gray-600 mb-4">${tool.description}</p>
        <a href="${tool.link}" class="text-blue-600 hover:underline">Open Tool →</a>
      `;

      grid.appendChild(card);
    });
  })
  .catch(err => {
    console.error('Failed to load tools.json', err);
  });
