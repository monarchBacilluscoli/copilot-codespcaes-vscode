function skillsMember() {
  var member = document.querySelector('.member');
  var memberSkills = document.querySelector('.member-skills');
  var memberSkillsClose = document.querySelector('.member-skills-close');

  if (member && memberSkills && memberSkillsClose) {
    member.addEventListener('click', function (event) {
      var target = event.target;
      var memberItem = target.closest('.member-item');
      var memberSkillsItem = target.closest('.member-skills-item');

      if (memberItem) {
        memberSkills.classList.add('active');
      } else if (memberSkillsItem) {
        memberSkills.classList.remove('active');
      } else if (target === memberSkillsClose) {
        memberSkills.classList.remove('active');
      }
    });
  }
}