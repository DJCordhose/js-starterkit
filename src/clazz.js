import {saySomething} from './hello';

class Lebewesen {

    // public String name;
    // public number name;
    //
    /**
     * Erzeugt ein neues Lebewesen
     *
     * @param name {string} Name des Lebewesens
     * @param lebenszeit {number}
     */
    constructor({name, lebenszeit}) {
        this._name = name;
        this.lebenszeit = lebenszeit;
    }

    print() {
        saySomething(this.name, this.lebenszeit);
        // saySomething('name: ' + this.name + ', lebenszeit:' + this.lebenszeit);
//         saySomething(`
// name: ${this.name},
// lebenszeit: ${this.lebenszeit}
// `);
    }

    clickHandler() {
        return function() {
            console.log('aha', this.name);
        };
    }

    clickHandlerArrow() {
        return () => console.log('Arrow', this.name);
    }

    createButton() {
        const button = document.createElement('button');
        // button.setAttribute('value', 'Klick mich');
        document.body.appendChild(button);
        button.textContent = 'Klick mich';
        return button;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
}

// class Pflanze extends Lebewesen {
//     constructor({name, lebenszeit, wuchshoehe}) {
//         super({
//             name,
//             lebenszeit
//         });
//         this.wuchshoehe = wuchshoehe;
//     }
//
//     print() {
//         super.print();
//         saySomething(this.wuchshoehe);
//     }
//
// }

// const l = new Lebewesen('Lilie', 0.02);
// l.print();
// saySomething(l.name);
// l.name = 'Rose';
// saySomething(l.name);
//
// const rose = new Pflanze(
//     {
//         name: 'Keine Kletter-Rose (Buschrose)',
//         lebenszeit: 10,
//         wuchshoehe: 1
//     });
// rose.print();
//
// DAS MACHT MAN NICHT
// l.aua = 'Ja';
// saySomething(l.name);
// saySomething(l.lebenszeit);
// DAS MACHT MAN NICHT
// saySomething(l.aua);

const parameter = {
    lebenszeit: 0.5,
    name: 'Tulpe',
    farbe: 'lila'
};

const t = new Lebewesen(parameter);
try {
    t.print();
} catch (ex) {
    if (ex instanceof Error) {
        console.log(ex.message);
    } else {
        throw ex;
    }
}
const button = t.createButton();
button.addEventListener('click', () => console.log('Clicked'));
button.addEventListener('click', () => console.log(t.clickHandler()));
button.addEventListener('click', () => console.log(this.clickHandler()));
button.addEventListener('click', () => console.log(t.clickHandler.bind(t)));
button.addEventListener('click', () => console.log(t.clickHandler.bind(t)));
button.addEventListener('click', t.clickHandler());
button.addEventListener('click', t.clickHandlerArrow());
