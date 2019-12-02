$(document).ready(function () {
    
    let calc = $('.calculator');
    let calcDisplay = calc.find('.calculator__display');
    let calcKeys = calc.find('.calculator__key');
    let calcButton = calc.find('.calculator__button');
    let calcClear = calc.find('.calculator__clear');
    let calcEqual = calc.find('.calculator__key--equal');
    let calcPower = calc.find('.calculator__power');
    let calcSpace = calc.find('.calculator__backspace');

    // Вывожу клавиши калькулятора
    calcKeys.each(function () {
        let current = $(this).attr('value');
        $(this).text(current);
    });
    // Выводим значение в Input
    calcButton.on('click', function () {
        calcDisplay.val( calcDisplay.val() + $(this).attr('value') );
    });
    // Очищаем Input
    calcClear.on('click', function () {
       calcDisplay.val(''); 
    });
    // Показываем результат
    calcEqual.on('click', function () {
        calcDisplay.val(eval(calcDisplay.val()));
    });
    // Возводим в ^3 степень
    calcPower.on('click', function () {
        calcDisplay.val( Math.pow( calcDisplay.val(), 3 ) );
    });

    // Кнопка Backspace
    calcSpace.on('click', function () {
        calcDisplay.val( calcDisplay.val().substring(0, calcDisplay.val().length-1) );
    });
});