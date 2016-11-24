// import jQuery from 'jquery';
export const message = '<h1>Hello, World</h1>';

export function sayHello() {
    const div = document.createElement('div');
    document.body.appendChild(div);
    // jQuery('div').text('Opi');
    div.setAttribute('id', 'main');
    div.innerHTML = message;
}

export function saySomething(...args) {
    // console.log(args instanceof Array);
    // if (args.length === 1) { // === in JavaScript, == Java
    //     throw new Error('Can only contain up to 1 elements'); // RuntimeException
    // }
    // console.log(arguments instanceof Array);
    // console.log(arguments);
    // const argumentsArray = Array.prototype.slice.apply(arguments);
    // args.forEach(function (element) {
    args.forEach(element => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = element;

    });

    // for (let i = 0; i < arguments.length; i++) {
    //     const div = document.createElement('div');
    //     document.body.appendChild(div);
    //     div.innerHTML = arguments[i];
    // }
}

