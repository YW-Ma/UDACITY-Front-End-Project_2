/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

// Add four new part to the page dynamically
const Page = document.querySelector('main');
for (let i = 4; i <= 7; i++) {
    // new part holder
    const Section = document.createElement('section');
    const textArea = document.createElement('div');
    Section.appendChild(textArea);
    textArea.setAttribute('class', 'landing__container');
    Section.setAttribute('id', `section${i}`);
    Section.setAttribute('data-nav', `Section ${i}`);
    // new contents
    textArea.insertAdjacentHTML('beforeend', `<h2>Section ${i}</h2>`);
    textArea.insertAdjacentHTML('beforeend', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>');
    textArea.insertAdjacentHTML('beforeend', '<p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>');
    // append the holder to the page
    Page.appendChild(Section);
}
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navBar = document.querySelector('#navbar__list');
// insert content to the navBar
document.querySelectorAll('section').forEach(section => {
    navBar.insertAdjacentHTML('beforeend', `<li><a href="${section.id}">${section.dataset.nav}</a></li>`)
});
// add attribute to these content
const navbarContents = document.querySelectorAll('li');
document.querySelectorAll('li').forEach(item => {
    item.setAttribute('class', 'menu__link');
});

// Add class 'active' to section when near top of viewport
// Add and remove active className
const activate = (inView, section, item) => {
    if (inView) {
      section.classList.add('your-active-class');
      item.classList.add('navbar__active');
    }
  }
  const deactivate = (section, item) => {
    section.classList.remove('your-active-class');
    item.classList.remove('navbar__active');
  }
  
  // Detect and apply active className
  const activeSection = () => {
    navbarContents.forEach(item => {
      const section = document.getElementById(item.firstChild.getAttribute('href'));
      const sectionOffset = (Math.floor(section.getBoundingClientRect().top));
      
      deactivate(section, item);
      activate((sectionOffset < 100 && sectionOffset >= -100), section, item);
    })
  }
  window.addEventListener('scroll', activeSection);

// Scroll to anchor ID using scrollTO event

document.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById(a.getAttribute('href')).scrollIntoView();
    });
});

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


