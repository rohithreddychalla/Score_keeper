const p1display = document.querySelector('#span1');
const p2display = document.querySelector('#span2');
const playerb1 = document.querySelector('#btn1');
const playerb2 = document.querySelector('#btn2');
const reset = document.querySelector('#btn3');
const go = document.querySelector('select');

// let inp = document.querySelector('input[type="number"]');
let goal = 0;
let p1 = 0;
let p2 = 0;
won = false;





playerb1.addEventListener('click',(e)=>{
    if(won===false){
    p1 = p1+1;
    if(p1===goal){
    p1display.textContent = p1;
    won= true;
    p1display.classList.add('winner');
    p2display.classList.add('loser');
    p1display.disabled = true;
    p2display.disabled = true;
    }
    else if(goal===0){
      p1display.textContent=0;  
     } 
    else{
    p1display.textContent = p1;
    }
    }
});

playerb2.addEventListener('click',(e)=>{
    if(won===false){
    p2 = p2+1;
    if(p2===goal){
    p2display.textContent = p2;
    won= true;
    p2display.classList.add('winner');
    p1display.classList.add('loser');
    p1display.disabled = true;
    p2display.disabled = true;
    }
    else if(goal===0){
        p1display.textContent=0;  
    } 
    else{
    p2display.textContent = p2;
    }
    }
});

go.addEventListener('change',()=>{
    goal = parseInt(go.value);
    resett();
})




reset.addEventListener('click',resett)

function resett(){
    won = false;
    p1 = 0;
    p2 = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove('winner','loser');
    p2display.classList.remove('winner','loser');
}

