AOS.init({
});

// Function to toggle the menu
// Function to toggle the menu
function toggleMenu() {
    if (window.innerWidth <= 768) { // Only toggle menu in mobile view
        const menu = document.getElementById('menu');
        menu.classList.toggle('open');  
    }
}

// Close the menu when clicking outside in mobile view
window.addEventListener('click', function(event) {
    if (window.innerWidth <= 768) { // Only execute on mobile screens
        const menu = document.getElementById('menu');
        const toggleBtn = document.querySelector('.toggle-btn');

        // Close the menu if click is outside
        if (!menu.contains(event.target) && !toggleBtn.contains(event.target)) {
            menu.classList.remove('open');
        }
    }
});

// Close the menu when any <li> item is clicked in mobile view
const menuItems = document.querySelectorAll('.navbar.menu ul li');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) { // Only close on mobile screens
            const menu = document.getElementById('menu');
            menu.classList.remove('open');
        }
    });
});


window.onscroll = function() {
    const topButton = document.getElementById('topButton');
    if (window.scrollY > 200) { 
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function showPopup(event) {
    event.preventDefault(); 
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

class LetterHighlighter {
    constructor(element) {
        this.element = element;
        this.text = element.textContent;
        this.element.innerHTML = ''; 
        this.createLetters();
    }

    createLetters() {

        this.text.split('').forEach(letter => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.classList.add('letter'); 
            this.element.appendChild(span);


            this.addHoverEffect(span);
        });
    }

    addHoverEffect(span) {
        span.addEventListener('mouseenter', () => {

            span.style.color = 'red';
        });

        span.addEventListener('mouseleave', () => {

            span.style.color = ''; 
        });
    }
}

const headings = document.querySelectorAll('.highlight');
headings.forEach(heading => {
    new LetterHighlighter(heading);
});
$(document).ready(function(){
    $('.slick-slider').slick({
        dots: true,
        arrows: true, 
        infinite: true, 
        speed: 500, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 2000, 
    });
});

// Create the custom cursor element
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

function createCursorTrail(x, y) {
  const trail = document.createElement('div');
  trail.classList.add('cursor-trail');
  document.body.appendChild(trail);
  trail.style.left = `${x - 5}px`;
  trail.style.top = `${y - 5}px`;

  setTimeout(() => {
    trail.remove();
  }, 300);
}

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
  createCursorTrail(e.pageX, e.pageY);
});
