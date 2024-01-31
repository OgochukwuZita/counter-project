'USE STRICT';

// initialise count
let count = 0;
//get identifiers
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');
btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const Data = e.currentTarget.classList;
        if(Data.contains('increase')){
            count++;
        }else if(Data.contains('decrease')){
            count--;
        }else{
            count = 0;
        }
        if(count>0){
            value.style.color = 'green'
        }else if(count<0){
            value.style.color = 'red';
        }else{
            value.style.color = 'black';
        }
        value.textContent = count;

    })
})