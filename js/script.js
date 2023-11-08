// Function to open the menu
const openMenu = () => {
  document.querySelector('.backdrop').className = 'backdrop active';
  document.querySelector('aside').className = 'active';
  document.body.style.overflow = 'hidden'; // Disable scrolling on the entire page
}

// Function to close the menu
const closeMenu = () => {
  document.querySelector('.backdrop').className = 'backdrop';
  document.querySelector('aside').className = '';
  document.body.style.overflow = ''; // Enable scrolling on the entire page
}

// Event listener for the menu button click
document.getElementById('menu__btn').onclick = e => {
  e.preventDefault();
  openMenu();
}

// Event listener for the close button click
document.querySelector('aside button.close__item').onclick = e => {
  closeMenu();
}

// Event listener for the backdrop click
document.querySelector('.backdrop').onclick = e => {
  closeMenu();
}



// Get the header element and all the sections
const header = document.querySelector('header');
const sections = document.querySelectorAll('section');

// Get the first section
const firstSection = sections[0];

// Initialize variables for scrolling behavior
let isScrollingUp = false;
let prevScrollPos = window.pageYOffset;

// Scroll event listener
window.addEventListener('scroll', function() {
  const currentScrollPos = window.pageYOffset;

// Ignore scroll behavior on screens with width less than or equal to 768px
  if (window.innerWidth <= 768) {
    return;
  }
  if (currentScrollPos > prevScrollPos) {
    // Scroll down
    header.classList.add('header__hidden');
    isScrollingUp = false;
  } else {
    // Scroll up
    if (!isScrollingUp && currentScrollPos <= firstSection.offsetHeight) {
      header.classList.remove('header__hidden');
    }
    isScrollingUp = true;
  }
});


