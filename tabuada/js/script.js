// seleção de elementos //
const multiplictionform =document.querySelector("#multiplictionform");
const numberinput =document.querySelector("#number");
const  multiplictioninput=document.querySelector("#multiplicador");


// funções //
const createTable= (number,multiplicatorNumber)=>{
    console.log(number, multiplicatorNumber);
}


// eventos //
// eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicatorNumber) return;

    console.log(multiplicationNumber, multiplicatorNumber);
});
