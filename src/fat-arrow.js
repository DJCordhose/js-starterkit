const func = input => input;

const res = func(1000);
console.log(res);

const numbers = [1, 2, 3];
const neu = numbers.map(num => 2 * num);
console.log(neu);


const neu2 = numbers
    .map(num => 2 * num)
    .filter(el => el % 4 !== 0)
    .reduce((res, el) => {
        console.log({res, el});
        return res + el;
    }, 0
    );
console.log(neu2);

// function mal2(num) {
//     return 2 * num;
// }

const mal2 = (num) => 2 * num;

const neu3 = numbers
    .map(mal2)
    .filter(el => el % 4 !== 0)
    .reduce((res, el) => {
        console.log({res, el});
        return res + el;
    }, 0
    );
console.log(neu3);


