const panelHider = document.querySelector('.projects-count');
const arrow = document.querySelector('.projects-count > svg');
const projects = document.querySelectorAll('.project');


panelHider.addEventListener('click', () => {
    arrow.classList.toggle('open');
    Array.from(projects).forEach(project => {
        project.style.visibility = (project.style.visibility === 'hidden')? 'visible' : 'hidden';
    });
});