let inpBox = document.getElementById("input");
const input = (inp) => {
 inpBox.value += inp;
}

const calc = () => {
    let expression = inpBox.value;
    let result = eval(expression);
    inpBox.value = '';
    inpBox.value = result;
}

const clearAll = () => {
    inpBox.value = '';
}

const del = () => {
    inpBox.value = inpBox.value.slice(0,-1);
}