$(function() {
    const menu = document.querySelector('.menu');
    const servicesLi = document.querySelector('.services');
    const productsLi = document.querySelector('.products');

    const maxHeight900 = window.matchMedia("(max-height: 900px)");


    function handlerForMediaQueries(x) {
        if (maxHeight900.matches) { // If media query matches
            //console.log('maxHeight900.matches');
            foldMenuItem();
        } else {
            unfoldMenuItems();
            //console.log('maxHeight900.matches else');
        }
    }

    function foldMenuItem() {
        const folded = productsLi.classList.contains('active') ? servicesLi : productsLi;
        folded.classList.add('folded');
        productsLi.addEventListener('click', clickHandler);
        servicesLi.addEventListener('click', clickHandler);
    }

    function unfoldMenuItems() {
        const foldedItems = document.querySelectorAll('.menu-item.folded');
        foldedItems.forEach(item => item.classList.remove('folded'));
        productsLi.removeEventListener('click', clickHandler);
        servicesLi.removeEventListener('click', clickHandler);
    }

    function clickHandler(e) {
        e.currentTarget.classList.add('folded');
    };

    //===========================================
    const windowInnerHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    if (windowInnerHeight <= 900 ) {
        handlerForMediaQueries();
    }

    try {
        maxHeight900.addEventListener("change", () => {
            handlerForMediaQueries();
        });
    } catch (e1) {
        try {
            maxHeight900.addListener((e) => {
                handlerForMediaQueries();
                //alert('inside');
            });
        } catch (e2) {
            console.error(e2);
        }
    }
});
