function scrollList() {
     document.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navigation-container');
        const logo = document.querySelector('.logo');

        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            logo.src = 'assets/logo-dark.png';
        } else {
            navbar.classList.remove('scrolled');
            logo.src = 'assets/logo-light.png';
        }
   });
}

export default scrollList;