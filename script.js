let navbar = document.querySelector('.navbar');

document.querySelector('#menu_btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchFrom.classList.remove('active');
}

let searchFrom = document.querySelector('.search_from');

document.querySelector('#search-btn').onclick = () =>{
    searchFrom.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchFrom.classList.remove('active');

    
}