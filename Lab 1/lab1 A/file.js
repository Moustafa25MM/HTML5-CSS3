const hidebtn = document.querySelector('.btn');
const figure = document.querySelector('.figure');


hidebtn.addEventListener('click',hideshow);

let check = true;
function hideshow(){
    if(check == false){
        figure.style.display='none'
        check=true
    }else{
        figure.style.display='block'
        check=false;
    }
}
