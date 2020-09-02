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
            //console.log('maxWidth1366.matches');
            activeMenuItem = menu.querySelector('.menu-item.active');
            firstMenuItem = menu.querySelector('li:first-child');
            const className = activeMenuItem === firstMenuItem ? '' : 'm-collapsed';
            changeClassName(className);
        } else {
            //console.log('maxWidth1366.matches else');
            activeMenuItem = menu.querySelector('.menu-item.active');
            const menuType = activeMenuItem.dataset.menutype;
            const arr = window.location.href.split('/');

            if (arr[arr.length - 1] !== 'catalog_bench.html') changeClassName(menuType);
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
        if (!className) return;
        const classList = left_side.classList.value;
        const menuClass = classList.match(/m-\w*/g);

        if (menuClass) menuClass.forEach(cl => {
            left_side.classList.remove(cl);
            content.classList.remove(cl);
        });
        left_side.classList.add(className);
        content.classList.add(className);
    }

    function createTabs() {
        const infoDescr = document.querySelector('.info__descr');
        const descr = document.querySelector('.descr');
        if (!infoDescr) return false;
        console.log('createTab=====');
        const tabs = createTabsWrapper();
        const tabsBody = tabs.querySelector('.tabs__body');
        const specBody = createTabBody('spec', infoDescr);
        specBody.classList.add('active');
        const descrBody = createTabBody('descr', descr);
        tabsBody.insertAdjacentElement('beforeend', specBody);
        tabsBody.insertAdjacentElement('beforeend', descrBody);
        console.log('++++', tabs);

        const contentCenter = document.querySelector('.content__center');
        contentCenter.insertAdjacentElement('beforeend', tabs);

        initTabs('#tabs');
    };

    function createTabsWrapper() {
        console.log('createTabsWrapper');
        const tabs = document.createElement('div');
        tabs.className = 'tabs';
        tabs.id = 'tabs';
        const nav = document.createElement('nav');
        nav.className = 'tabs__items';
        const a_spec = createLink('Характеристики', 'spec');
        a_spec.classList.add('active');
        const a_descr = createLink('Описание', 'descr');
        nav.insertAdjacentElement('beforeend', a_spec);
        nav.insertAdjacentElement('beforeend', a_descr);
        const tabBody = document.createElement('div');
        tabBody.className = 'tabs__body';

        tabs.insertAdjacentElement('beforeend', nav);
        tabs.insertAdjacentElement('beforeend', tabBody);
        return tabs;
    }

    function createLink(title, href) {
        const a = document.createElement('a');
        a.className = 'tabs__item';
        a.href = '#' + href;
        a.innerHTML = title;
        return a;
    }
    
    function createTabBody(id, content) {
        const div = document.createElement('div');
        div.className = 'tabs__block';
        div.id = id;
        div.insertAdjacentElement('beforeend', content);
        return div;
    }

    //===========================================
    const windowInnerHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    if (windowInnerHeight <= 900 ) {
        maxHeightHandlerForMediaQueries();
    }

    maxWidthHandlerForMediaQueries();
    createTabs();

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
