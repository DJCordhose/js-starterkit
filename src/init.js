import {sayHello, message, saySomething} from './hello';
import Programmer from './Programmer';

document.addEventListener('DOMContentLoaded', () => {
    sayHello();
});
saySomething(message);

let olli = new Programmer('Olli', 'JavaScript');
olli.program();
saySomething(olli.name);

