document.addEventListener('DOMContentLoaded', function () {
  const skillsContainer = document.querySelector('.skillscontainer');
  const addSkillBtn = document.getElementById('addSkillBtn');

  addSkillBtn.addEventListener('click', function () {
    const newSkillName = prompt("Enter new skill name:");

    if (newSkillName) {
      const skillItem = document.createElement('div');
      skillItem.classList.add('skillitem');
      skillItem.innerHTML = `${newSkillName}: <div class="skills"></div>`;
      skillsContainer.appendChild(skillItem);
    }
  });
});

