
// script.js - simple loader to fetch projects.json and render cards
async function loadProjects(){
  try{
    const res = await fetch('/data/projects.json');
    const projects = await res.json();
    const gridElems = document.querySelectorAll('#project-grid');
    gridElems.forEach(grid => {
      grid.innerHTML = '';
      projects.forEach(p => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
          <img src="${p.image}" alt="${p.title}">
          <h4>${p.title}</h4>
          <p class="muted">${p.tags.join(' • ')}</p>
          <p>${p.short}</p>
          <p><a href="${p.link}" target="_blank">View project →</a></p>
        `;
        grid.appendChild(card);
      });
    });
  }catch(e){
    console.error('Could not load projects.json', e);
  }
}

document.addEventListener('DOMContentLoaded', loadProjects);
