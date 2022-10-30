let input = "";
let button = document.querySelectorAll('.b');
Array.from(button).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if (e.target.innerHTML == '=') {
            input= eval(input);
            document.querySelector('.scr').value = input;
        }
        else if (e.target.innerHTML == 'AC') {
            input= "";
            document.querySelector('.scr').value = input;
        }
        else{
        input =input+e.target.innerHTML;
        document.querySelector('.scr').value = input;
        }
    })
})