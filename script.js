let display = document.getElementById('display');

function appendNumber(number) {
    if(display.value.includes("Ошибка")){clearDisplay()}
    display.value += number;
}

function appendOperation(operation) {
    if(display.value.includes("Ошибка")){clearDisplay()}
    const lastChar = display.value.slice(-1); // Получаем последний символ
    const operations = ['+', '-', '*', '/']; // Список допустимых операций

    if (operations.includes(lastChar)) {
        // Если последний символ — это знак операции, заменяем его
        display.value = display.value.slice(0, -1) + operation;
    } else {
        // Иначе просто добавляем новый знак операции
        display.value += operation;
    }
}

function percent(){
    display.value = display.value/100;
}

function calculate() {
    try {
        let result = eval(display.value);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Ошибка');
        }
        display.value = result;
    } catch (error) {
        display.value = 'Ошибка';
    }
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}