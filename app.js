const toggleDropdown = (index) => {
  let id = '';
  if (index === 1) {
    id = 'my-dropdown';
  } else if (index === 2) {
    id = 'my-dropdown-2';
  } else {
    id = 'my-dropdown-3';
  }

  removeShowClass();
  document.getElementById(id).classList.toggle('show');
};

window.onclick = (e) => {
  if (!e.target.matches('.dropbtn')) {
    removeShowClass();
  }
};

const removeShowClass = () => {
  const myDropdown = document.getElementById('my-dropdown');
  const myDropdown2 = document.getElementById('my-dropdown-2');
  const myDropdown3 = document.getElementById('my-dropdown-3');

  if (myDropdown.classList.contains('show')) {
    myDropdown.classList.remove('show');
  }
  if (myDropdown2.classList.contains('show')) {
    myDropdown2.classList.remove('show');
  }
  if (myDropdown3.classList.contains('show')) {
    myDropdown3.classList.remove('show');
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
