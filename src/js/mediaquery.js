$(function() {
    const menu = document.querySelector('.menu');
    const left_side = document.querySelector('.left-side');
    const content = document.querySelector('.content');
    const submenus = document.querySelectorAll('.submenu');

    const maxHeight900 = window.matchMedia("(max-height: 900px)");
    const maxWidth1366 = window.matchMedia("(max-width: 1366px)");


    function maxHeightHandlerForMediaQueries(x) {
        if (maxHeight900.matches) { // If media query matches
            //console.log('maxHeight900.matches');
            foldMenuItem();
        } else {
            unfoldMenuItems();
            //console.log('maxHeight900.matches else');
        }
    }

    function maxWidthHandlerForMediaQueries(x) {
        let activeMenuItem, firstMenuItem;

        if (maxWidth1366.matches) {
            console.log('maxWidth1366.matches');
            activeMenuItem = menu.querySelector('.menu-item.active');
            firstMenuItem = menu.querySelector('li:first-child');

            const className = activeMenuItem === firstMenuItem ? 'm-sm' : 'm-collapsed';
            changeClassName(className);
        } else {
            console.log('maxWidth1366.matches else');
            activeMenuItem = menu.querySelector('.menu-item.active');
            const menuType = activeMenuItem.dataset.menutype;
            changeClassName(menuType);
        }
    }

    function foldMenuItem() {
        submenus.forEach(submenu => {
            const submenuParent = submenu.closest('.menu-item');
            submenuParent.classList.add('folded');
        })
    }

    function unfoldMenuItems() {
        const foldedItems = document.querySelectorAll('.menu-item.folded');
        foldedItems.forEach(item => item.classList.remove('folded'));
    }

    function changeClassName(className) {
        const classList = left_side.classList.value;
        const menuClass = classList.match(/m-\w*/g);

        if (menuClass) menuClass.forEach(cl => {
            left_side.classList.remove(cl);
            content.classList.remove(cl);
        });
        left_side.classList.add(className);
        content.classList.add(className);
    }

    //===========================================
    const windowInnerHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    if (windowInnerHeight <= 900 ) {
        maxHeightHandlerForMediaQueries();
    }

    maxWidthHandlerForMediaQueries();

    try {
        maxHeight900.addEventListener("change", () => {
            maxHeightHandlerForMediaQueries();
        });
        maxWidth1366.addEventListener("change", () => {
            maxWidthHandlerForMediaQueries();
        });
    } catch (e1) {
        try {
            maxHeight900.addListener((e) => {
                maxHeightHandlerForMediaQueries();
            });
            maxWidth1366.addListener((e) => {
                maxWidthHandlerForMediaQueries();
            });
        } catch (e2) {
            console.error(e2);
        }
    }
});
