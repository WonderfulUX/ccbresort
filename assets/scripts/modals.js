let closeBtns = document.querySelectorAll('.close');
let modals = document.querySelectorAll('.modal');

//LOCAL STORAGE
!(localStorage.getItem('lang'))&& localStorage.setItem('lang', 'french');


//CHANGE LANGUAGE

function changeLanguage(){
    document.getElementById('language-modal').classList.add('poppedUp');
    setTimeout(()=>{
        document.getElementById('language-modal').querySelector('.modal-content').classList.add('displayed');
    },300)
}
function triggerSwitchTo(ele){
    if(!(ele.closest('li').classList.contains('active'))){
        document.querySelector("#language-modal .active").classList.remove('active');
        ele.closest('li').classList.add('active');
    }
    let languageShort = ele.querySelector('.language-label').innerText;
    switchTo(languageShort);
    document.querySelector('#language-modal .close').click();
}
function switchTo(lang){
    switch (lang){
        case 'Français':
            [... document.querySelectorAll('.fr')].map(ele=>ele.classList.remove('dn'));
            [... document.querySelectorAll('.en')].map(ele=>ele.classList.add('dn'));
            [... document.querySelectorAll('.pt')].map(ele=>ele.classList.add('dn'));
            localStorage.setItem('lang', 'french')
            break;
        case 'English':
            [... document.querySelectorAll('.fr')].map(ele=>ele.classList.add('dn'));
            [... document.querySelectorAll('.en')].map(ele=>ele.classList.remove('dn'));
            [... document.querySelectorAll('.pt')].map(ele=>ele.classList.add('dn'));
            localStorage.setItem('lang', 'english')
            break;
    }
    document.querySelector('#language-modal .close').click();
}

closeBtns.forEach((ele)=>{
    ele.addEventListener('click',(ele)=>{
        if(ele.target.parentElement.tagName==="BUTTON"){
            ele.target.parentElement.parentElement.querySelector('.modal-content').classList.remove('displayed');
            setTimeout(()=>{
                ele.target.parentElement.parentElement.classList.remove('poppedUp');
            },450)
        }
        else{
            ele.target.parentElement.querySelector('.modal-content').classList.remove('displayed');
            setTimeout(()=>{
                ele.target.parentElement.classList.remove('poppedUp');
            },450)
        }
    })
})

window.addEventListener('load',()=>{
    let lang = localStorage.getItem('lang');
    document.querySelector(`#language-modal ul .${lang}`).closest('li').classList.add('active');
    if(lang === 'french'){
        document.querySelectorAll('#language .fr').forEach(element=>{
            element.classList.remove('dn');
        })
        document.querySelectorAll('#language .en').forEach(element=>{
            element.classList.add('dn');
        })
        switchTo('Français');
    } else{
        document.querySelectorAll('#language .en').forEach(element=>{
            element.classList.remove('dn');
            console.log(element);
        })
        document.querySelectorAll('#language .fr').forEach(element=>{
            element.classList.add('dn');
            console.log(element);
        })
        switchTo('English');
    }
    document.getElementById('language').classList.remove('dn');
})