const toggleDropdown = () => {
  document.getElementById('my-dropdown').classList.toggle('show');
};

window.onclick = (e) => {
  if (!e.target.matches('.dropbtn')) {
    const myDropdown = document.getElementById('my-dropdown');
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
};

const myFunc = () => {
  const nav = document.getElementById('my-nav');
  const icon = document.getElementById('my-icon');

  if (nav.className === 'main-nav') {
    nav.className += ' responsive';

    icon.classList.remove('fa-bars');
    icon.className += ' fa-times';
  } else {
    nav.className = 'main-nav';

    icon.classList.remove('fa-times');
    icon.className += ' fa-bars';
  }
};