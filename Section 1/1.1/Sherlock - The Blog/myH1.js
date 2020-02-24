class MyH1 extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 'Hello World';
    }
}

window.customElements.define('my-h1', MyH1)