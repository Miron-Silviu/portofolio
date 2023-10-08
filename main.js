'use strict'
 
document, addEventListener('DOMContentLoaded', function () {
    
    const menuBtn = document.getElementById('menu');
    const menuList = document.getElementById('menubar');

    let isMenuOpen = false;
  

    menuBtn.addEventListener('click', () => {
        if (isMenuOpen) {
            menuList.style.display = 'none';
          
        } else {
            menuList.style.display = 'block'; 
        }
        isMenuOpen = !isMenuOpen;
    })
 })






