let  foo: string = 'Huhu';
// foo = 10;

function func(a: number): number | string {
    if (a > 100) {
        return 'sauber';
    } else {
        return a * 10;
    }
}

const result: number | string = func(100);
if (result === 'sauber') {

}

interface Growable {
    grow(cm: number);
}

interface Nameable {
    name: string;
}

class Pflanze implements Growable, Nameable {
// class Pflanze {

    name: string;
    height: number;

    constructor(name: string) {
        this.name = name;
        this.height = 20;
    }

    grow(cm: number) {
        this.height += cm;
    }
}

const p: Growable = new Pflanze('Primel');
p.grow(10);

const pr: Pflanze = <Pflanze>p;
console.log(pr.height);
// console.log(p.name);

const thing: Nameable = pr;
console.log(thing.name);

// not ok, non-nullability is default set in tsconfig.json (strictNullChecks)
// let olli2: string = undefined;
// ok
let olli2: string|undefined = undefined;