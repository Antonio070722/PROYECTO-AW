document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!hamburger || !mobileMenu) {
        return;
    }

    hamburger.addEventListener('click', function(event) {
        event.stopPropagation();
        if (window.innerWidth <= 900) {
            mobileMenu.classList.toggle('active');
        }
    });

    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 900 && !hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove('active');
        }
    });
});</content>
<parameter name="filePath">c:\Users\anton\Music\PROYECTO-AW\assets\js\menu.js