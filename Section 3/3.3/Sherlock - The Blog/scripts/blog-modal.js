class BlogModal extends HTMLElement {
    static get observedAttributes() {
        return ['open', 'title', 'subtitle', 'synopsis', 'cover'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.close = new CustomEvent('close', {
            bubbles: true,
            cancelable: false,
            detail: {
                open: false
            }
        })
    }
    
    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if(attrName !== 'open' && oldValue !== newValue) {
            this[attrName] = newValue;
        } else if(attrName === 'open') {
            this[attrName] = this.hasAttribute(attrName);
        }
        this.render();
    }

    render() {
        const { shadowRoot } = this;
        const templateNode = document.getElementById('modal-template');

        shadowRoot.innerHTML = '';
        if(templateNode) {
            const instance = document.importNode(templateNode.content, true);
            const close = instance.querySelector('.close');
            const wrapper = instance.querySelector('.wrapper');
            const closeEvent = this.close;
            close.onclick = function() {
                this.dispatchEvent(closeEvent);
            }
            shadowRoot.addEventListener('close', () => {
                wrapper.classList.remove('open');
                this['open'] = false;
            })
            if(this['open'] === true) {
                instance.querySelector('.wrapper').classList.add('open');
            }
            instance.querySelector('.title').innerHTML = this['title'];
            instance.querySelector('.subtitle').innerHTML = this['subtitle'];
            instance.querySelector('.cover').src = this['cover'];
            instance.querySelector('.synopsis').innerHTML = this['synopsis'];
            shadowRoot.appendChild(instance);
        }
    }
}

customElements.define('blog-modal', BlogModal);