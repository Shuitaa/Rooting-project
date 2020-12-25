export default class Router {
    constructor(number) {
        this.number = number;
        this.svg = `/source/Router.svg`;
        this.row = Math.floor(Math.random() * (7-1)+1);
        this.column = Math.floor(Math.random() * (4-1)+1);
    }

    create() {
        const main = document.querySelector("main");
        let check = document.querySelector(`[data-row="${this.row}"][data-column="${this.column}"]`);
        if(check !== null) {
            this.row = Math.floor(Math.random() * (7-1)+1);
            this.column = Math.floor(Math.random() * (4-1)+1);
        }

        main.innerHTML += `<img 
                            src="${this.svg}" 
                            title="Routeur numéro ${this.number}"
                            style="
                                    grid-row:${this.row};
                                    grid-column:${this.column};
                            "
                            data-row=${this.row}
                            data-column=${this.column}
                            >`;
        return true;
    }

}