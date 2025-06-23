function zapyskMenu() {
    const menu__mobile = document.querySelector('.menu__mobile')
    const header__icon = document.querySelector('.header__icon img')
    const menu__mobile__close = document.querySelector('.menu__mobile__close img')

    header__icon.onclick = function() {
        menu__mobile.classList.add('menu__mobile--active')
        document.body.classList.add('no-scroll')
    }

    menu__mobile__close.onclick = function() {
        menu__mobile.classList.remove('menu__mobile--active')
        document.body.classList.remove('no-scroll')
    }
}

export {zapyskMenu}