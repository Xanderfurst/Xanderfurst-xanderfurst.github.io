window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    button_menu = document.querySelector('.button_menu');

    button_menu.addEventListener('click', () => {
        button_menu.classList.toggle('button_menu_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            button_menu.classList.toggle('button_menu_active');
            menu.classList.toggle('menu_active');
        })
    })
})