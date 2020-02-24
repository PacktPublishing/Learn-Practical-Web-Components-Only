class BlogCard extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'subtitle', 'cover'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() { 
        this.render();
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if(oldValue !== newValue && newValue !== null) {
            this[attrName] = newValue;
        }
        this.render();
    }

    render() {
        const { shadowRoot } = this;
        const templateNode = document.getElementById('card-template');

        shadowRoot.innerHTML = '';
        if(templateNode) {
            const instance = document.importNode(templateNode.content, true);
            instance.querySelector('.title').innerHTML = this['title'];
            instance.querySelector('.subtitle').innerHTML = this['subtitle'];
            instance.querySelector('.cover').src = this['cover'];

            shadowRoot.appendChild(instance);
        } else {
            shadowRoot.innerHTML = '<p>Shadow Root failed. Please try again later.</p>';
        }
    }
}

customElements.define('blog-card', BlogCard);