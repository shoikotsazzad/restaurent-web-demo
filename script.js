window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-black/80', 'backdrop-blur-md');
    } else {
        navbar.classList.remove('bg-black/80', 'backdrop-blur-md');
    }
});