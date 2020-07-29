
(function () {
    const left_side = document.querySelector('.left-side');
    if(left_side) {
        const menu = document.querySelector('.menu');
        const links = menu.querySelectorAll('.menu-item');
        links.forEach(link => link.addEventListener('click', e => {
            e.stopPropagation();

            const menuActiveItems = menu.querySelectorAll('.active.menu-item');
            menuActiveItems.forEach(item => item.classList.remove('active'));

            const menuType = link.dataset.menutype;
            //console.log(menuType);
            if (!left_side.classList.contains(menuType)) {
                const classList = left_side.classList.value;
                //str.match(/menu-\w*/g)
                const menuClass = classList.match(/m-\w*/g);

                if (menuClass) menuClass.forEach(cl => left_side.classList.remove(cl));

                if (menuType) {
                    left_side.classList.add(menuType);
                }
            }

            link.classList.add('active');

            const itemParent = link.parentNode;
            if (itemParent && itemParent.classList.contains('submenu')) {
                itemParent.closest('.menu-item').classList.add('active');
            }
        }));
    }

    function foldMenu() {
        const windowInnerHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
        if (windowInnerHeight <= 900) {
            const servicesLi = document.querySelector('.services');
            const productsLi = document.querySelector('.products');
        }
    }


})();