import Network from './class/Network.js';

let isCreated = false;

function main() {
    if(!isCreated) {
        createNetwork();
        return isCreated = true;
    }
    const main = document.querySelector("main");
    main.innerHTML = "";
    createNetwork();
    return isCreated;
}

function createNetwork() {
    const input = document.getElementById("n");
    const network = new Network();
    network.nbRouters = input.value;
    input.value = "";

}

document.querySelector("button").addEventListener("click",main)