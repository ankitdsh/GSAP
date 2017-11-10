try {
    let $container = document.querySelector('.container');

    // Left Side Navigation
    let $nav = $container.querySelector('.navigation');
    let $navItemContainer = $nav.querySelector('.navigation-item');
    let $navItems = $nav.querySelectorAll('.navigation-item div');
    let $navAction = $nav.querySelector('#navigation-icon');
    let $navActionSVG = $nav.querySelector('#navigation-icon');
    let $navActionSVGLines = $nav.querySelectorAll('#navigation-icon line');
    let isNavOpen = false;
    let navWidth = $navItemContainer.offsetWidth;
    $navActionSVG.onclick = toggleNavigation

    // Demo Menu List
    let $demoListContainer = $nav.querySelector('#demo ')
    let $menu = $demoListContainer.querySelector('#menu')
    let $demoList = $demoListContainer.querySelector('ul')
    let $demoItems = $demoListContainer.querySelectorAll('li')
    let isDemoMenuOpen = false;
    $menu.onclick = toggleDemoList
    $demoList.onclick = showDemo
    // Main Content 
    let $content = document.querySelector('.main-content');
    let $demoContainers = $content.querySelectorAll('[data-item]')

    // Initiate GSAP TImeLine
    let timeLine = new TimelineMax();

    function showDemo(e) {

        let demoID = e.target.dataset && e.target.dataset.itemRef
        if (demoID) {
            demo['_demo' + demoID]()
        }

    }

    let demo = {

        showContentDiv: function(id) {

        },
        _demoTextSplitterAnimation: function() {

        }
    }

    function toggleNavigation() {
        timeLine.to($container, 0.2, {
            x: isNavOpen ? -navWidth : 0
        })
        /*.to($navActionSVGLines[0],0.3,{
                	rotation:45
                })*/
        /*.to($navActionSVGLines[2],0.3,{
                	rotation:-45
                })*/

        TweenMax.staggerFrom($navItems, 0.1 * ($navItems.length + 1), {
            opacity: 0,
            scale: 0,
            x: -180,
            ease: Back.easeOut.config(1)
        }, 0.1)

        isNavOpen = !isNavOpen
    }

    function toggleDemoList() {
        if ((isDemoMenuOpen = !isDemoMenuOpen)) {
            timeLine
                .set($demoList, { height: "auto" })
                .from($demoList, 0.2, { height: 0 })
                .staggerFromTo($demoItems, 0.2, {
                    opacity: 0,
                    scale: 0,
                    y: -180,
                    ease: Back.easeOut.config(1)
                }, {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    ease: Back.easeOut.config(1)
                }, 0.1)
        } else {

            timeLine
                .staggerFromTo($demoItems, 0.3, {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    ease: Back.easeOut.config(1)
                }, {
                    opacity: 0,
                    scale: 0,
                    y: -180,
                    ease: Back.easeOut.config(1)
                }, -0.1)
                .to($demoList, 0.1, { height: 0 })

        }

    }

    // function openNavigation() {
    //     timeLine.to($container, 0, {
    //         x: 0
    //     })
    // }
    toggleNavigation()
} catch (e) {

}