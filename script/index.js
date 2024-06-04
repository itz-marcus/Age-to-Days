//made my varibles im going to use in the calculations
let age = document.querySelector('input')
let converter = document.querySelector('button')
let answer = document.querySelector('#Answer')

converter.addEventListener('click',()=>{
    answer.innerText = ('your age in days: ' + (eval(`${age.value} *365`)))  // using the single input and multiplying it by 365 
})