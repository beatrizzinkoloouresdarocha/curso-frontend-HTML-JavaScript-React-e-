// seleção de elementos //
const multiplictionform =document.querySelector("#multiplictionform");
const numberinput =document.querySelector("#number");
const  multiplictioninput=document.querySelector("#multiplicador");


// funções //

// eventos //
multiplictionForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplictionNumber =+numberinput.value;

    const multiplicatorNumber =+multiplictioninput.value;

    if(!multiplictionNumber || !multiplicatorNumber) return;

    console.log(multiplictionNumber, multiplicatorNumber);
});