
(function () {
    const left_side = document.querySelector('.left-side');
    if(left_side) {
        const menu = document.querySelector('.menu');
        const links = menu.querySelectorAll('.menu-item');
        links.forEach(link => link.addEventListener('click', e => left_side.classList.add('collapsed')))
    }
})();