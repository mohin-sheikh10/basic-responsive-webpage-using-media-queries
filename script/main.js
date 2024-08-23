const navlink = document.querySelector('.navlink');
const menubar = document.querySelector('.menubar');
const menubarIcon = document.getElementById('menubarIcon');

menubar.addEventListener('click', function() {
    navlink.classList.toggle('active');
    menubarIcon.classList.toggle('fa-x')
})

window.onscroll = () => {
    navlink.classList.remove('active');
    menubarIcon.classList.remove('fa-x')
}


