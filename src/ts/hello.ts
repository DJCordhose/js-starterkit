import * as $ from 'jquery';

export const message = '<h1>Hello, World</h1>';

export function sayHello() {

    const div = document.createElement('div');
    document.body.appendChild(div);
    div.setAttribute('id', 'main');
    $('div').html(message);
}