const search = document.getElementById('search');
const topics = [...document.querySelectorAll('[data-topic]')];
search.addEventListener('input', () => {
  const query = search.value.trim().toLowerCase();
  let count = 0;
  for (const topic of topics) {
    topic.hidden = !topic.textContent.toLowerCase().includes(query);
    if (!topic.hidden) count += 1;
  }
  document.getElementById('results').textContent = `${count} ${count === 1 ? 'exercise' : 'exercises'}`;
});
