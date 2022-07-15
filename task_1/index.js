// Напишите функцию countDown(n), которая получает число {n} в качестве аргумента и печатает в консоль обратный отсчет, 
// начиная с этого числа. Например, countDown(3) напечатает: 3 2 1.

function countDown(n) {
    let result;
    let k = 0;
    if (n < 1) {
        result = 'Используйте положительное число';
    } else {
        result = [];
        for (let i = n; i >= 1; --i) {
            result[k] = i;
            k++;
        } 
    }
    return result;
}

module.exports = countDown;
