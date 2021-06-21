const skills = document.querySelectorAll('.skills');
const maxProgressValue = document.querySelector('.skills-bar').offsetWidth;

const skillProgress = document.createElement('span');
skillProgress.className = 'skill-progress-tooltip';

Array.from(skills).forEach(skill => {
    skill.addEventListener('mouseover', (event) => {
        skillProgress.textContent = Math.ceil((skill.offsetWidth / maxProgressValue) * 100) + ' %';

        skill.append(skillProgress);
        skillProgress.style.top = skill.offsetTop  - skillProgress.offsetTop + 'px';
        skillProgress.style.left = skill.offsetWidth / 2 - skillProgress.offsetWidth / 2 + 'px';
    });
    skill.addEventListener('mouseout', () => {
        skillProgress.remove();
    });
});