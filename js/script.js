

const input= document.querySelector('.text')
console.log(input);
const span= document.querySelector('.counter')
console.log(span);
let max=19


function updateCounter(){
    let value=input.value.length
span.innerHTML=max-value

}



input.addEventListener('keyup',updateCounter)