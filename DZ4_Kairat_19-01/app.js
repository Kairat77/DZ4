//задача 1
 const months = ["январь","февраль","март", "апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"]
let date = new Date();
let month = date.getMonth();
alert(months[month]);

//задача 2
function buttonClick() {
    let input1 = document.getElementById('input1');
    let input2 = document.getElementById('input2');
    let input1value = input1.value;
    let input2value = input2.value;
    input1.value = input2value;
    input2.value = input1value;
}




