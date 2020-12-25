import Router from "./Router.js";

export default class Network {
    constructor() {
        this.routers = null;

    }

    set nbRouters(n) {
        this.routers = parseInt(n);
        this.createRouters();
    }

    createRouters() {
        for(let i = 0; i < this.routers; i++) {
            const router = new Router(i);
            router.create();
        }
        return true;
            
    }

}