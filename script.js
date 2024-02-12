window.addEventListener('DOMContentLoaded', (event) => {
    const menuLinks = document.querySelectorAll('.horizontal-menu a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const offsetTop = targetSection.offsetTop;
            window.scrollTo({
                top: offsetTop - 80, // Adjusted for header height
                behavior: 'smooth'
            });
        });
    });
});
