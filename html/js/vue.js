


let mask = document.querySelector('.tab_mask');
let menuBtn = document.getElementById('menuBtn');
let menuFlag = false

menuBtn.addEventListener('click',()=>{
    menuFlag = !menuFlag
    if(menuFlag ){
        mask.style.top=2+"rem"

    }else{
        mask.style.top=-5+"rem"

    }
})
