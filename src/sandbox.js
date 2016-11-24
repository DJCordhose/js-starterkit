import {saySomething} from './hello';

class Lebewesen {

    constructor({name, lebenszeit}) {
        this._name = name;
        this.lebenszeit = lebenszeit;
        // this.print = this.print.bind(this);
    }

    createButton() {
        const button = document.createElement('button');
        // button.setAttribute('value', 'Klick mich');
        document.body.appendChild(button);
        button.textContent = 'Klick mich';
        return button;
    }

    print() {
        saySomething(this.name, this.lebenszeit);
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
}
const parameter = {
    name: 'Tulpe',
    lebenszeit: 0.5
};

const t = new Lebewesen(parameter);
t.print();
const button = t.createButton();
console.log(button);
// button.addEventListener('click', () => console.log('Ich wurde geklickt!'));
button.addEventListener('click', () => t.print()); // GEHT
// button.addEventListener('click', t.print);
// const listener = t.print();
// console.log(listener);
// button.addEventListener('click', listener);
button.addEventListener('click', t.print.bind(t));

// button.addEventListener('click', t.print);
// button.setAttribute('onclick', 'console.log("Aua")');

const mach = t.print.bind(t);

export {mach};

const ichHabAucheinenNamen = {
    name: 'Mein Name'
};

const neueFunktion = t.print.bind(ichHabAucheinenNamen);
neueFunktion();
const neueFunktion2 = t.print.bind({name: 'Hase'});
neueFunktion2();

t.print.call(t);
t.print();
console.log(typeof t.print);