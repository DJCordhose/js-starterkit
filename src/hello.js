export const message = '<h1>Hello, World</h1>';

export function sayHello() {
    const div = document.createElement('div');
    div.setAttribute('id', 'main');
    div.innerHTML = message;
    document.body.appendChild(div);
}

class Programmer {
    // public String name;
    // public String language;

    constructor(name, language) {
        this.name = name;
        this.language = language;
    }
}

const olli = new Programmer('Olli', 'JavaScript');
console.log(olli.name);

