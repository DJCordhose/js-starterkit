// Aufgabe:
// 1. Eigenes Modul, mit eigener Klasse
// 2. Klasse exportieren, importieren und benutzen

export default class Programmer {
    // public String name;
    // public String language;

    constructor(name, language) {
        this.name = name;
        this.language = language;
    }

    program() {
        console.log(this.name + ' programs');
    }
}

