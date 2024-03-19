document.querySelector("#mobile-menu-toggle").addEventListener('click',toggleMenu)
document.querySelector("#mobile-full-nav").addEventListener('click',(e)=>{
    e.target.id==='mobile-full-nav' && toggleMenu();
})


function toggleMenu(){
    if(document.querySelector("#mobile-full-nav").classList.contains('dn')){
        document.querySelector("#mobile-full-nav").classList.remove('dn')
        setTimeout(()=>{
            document.querySelector("#mobile-nav").classList.remove('slideout')
        },300)
    }
    else{
        document.querySelector("#mobile-nav").classList.add('slideout')
        setTimeout(()=>{
            document.querySelector("#mobile-full-nav").classList.add('dn')
        },300)

    }
}