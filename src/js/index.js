
document.getElementsByClassName('humberger-icon')[0].addEventListener('click',(e)=>{
    e.preventDefault();
    const navItems = document.getElementsByClassName('nav-items')[0];
    const displayType = navItems.style.display;
    switch(displayType){
        case "block":
            navItems.style.display = "none";
            break;
        case "none":
            navItems.style.display="block";
            break;
        default:
            navItems.style.display="block";

    }
    
})