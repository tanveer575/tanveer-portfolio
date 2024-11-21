AOS.init({
});


function toggleMenu() {
    if (window.innerWidth <= 768) { 
        const menu = document.getElementById('menu');
        menu.classList.toggle('open');  
    }
}

window.addEventListener('click', function(event) {
    if (window.innerWidth <= 768) { 
        const menu = document.getElementById('menu');
        const toggleBtn = document.querySelector('.toggle-btn');

        if (!menu.contains(event.target) && !toggleBtn.contains(event.target)) {
            menu.classList.remove('open');
        }
    }
});

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
