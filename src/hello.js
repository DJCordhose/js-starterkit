// import jQuery from 'jquery';
export const message = '<h1>Hello, World</h1>';

export function sayHello() {
    const div = document.createElement('div');
    document.body.appendChild(div);
    // jQuery('div').text('Opi');
    div.setAttribute('id', 'main');
    div.innerHTML = message;
}

export function saySomething(something) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = something;
}

// 1. Eigenes Modul, mit eigener Klasse
// 2. Klasse exportieren, importieren und benutzen

