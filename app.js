const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const hoversign = document.querySelector(".hover-sign");
const videoList = [video1,video2,video3];
videoList.forEach(function(video){
    video.addEventListener('mouseover',function(){
        video.play()
        hoversign.classList.add("active")
    })
    video.addEventListener('mouseout',function(){
        video.pause()
        hoversign.classList.remove("active")

    })
})

// Smooth scrolling for navigation links
document.querySelectorAll('header ul a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Update the contact button in hero section to scroll to contact
document.querySelector('.hero-info button').addEventListener('click', () => {
    document.querySelector('.contact-section').scrollIntoView({
        behavior: 'smooth'
    });
});

// Add form submission feedback
document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    
    try {
        await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        });
        alert('Thanks for your message! I\'ll get back to you soon.');
        form.reset();
    } catch (error) {
        alert('Oops! There was a problem sending your message.');
    }
});

// Highlight active navigation link while scrolling
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
