function menutoggle() {
    var menuItems = document.getElementById('MenuItems');
    if (menuItems.classList.contains('open')) {
        menuItems.classList.remove('open');
    } else {
        menuItems.classList.add('open');
    }
}
