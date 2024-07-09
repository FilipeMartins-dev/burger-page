function openMenu(){
    let navMenu = document.querySelector("#aside-nav");
    navMenu.classList.toggle("display-none")
}

function bodyResize(){
    if(window.innerWidth >= 768){
        let navMenu = document.querySelector("#aside-nav")
        navMenu.classList.add("display-none")
    }
}