// const titles = [
//     {title: 'The Five Orange Pips', subtitle: 'A delivery of innocous letter followed by death.'},
//     {title: 'A Study in Scarlet', subtitle: 'Dr. John Watson meets Mr. Sherlock Holmes.'},
//     {title: 'The Hound of the Baskervilles', subtitle: 'A mysterious hound terrifies a town.'}
// ]

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
        // console.log(oldValue, newValue);
        if(oldValue !== newValue && newValue !== null) {
            this[attrName] = newValue;
        }
        // this.render();
    }

    disconnectedCallback() {
        console.log('Disconnected from the DOM!');
    }

    render() {
        const { shadowRoot } = this;
        const templateNode = document.getElementById('card-template');

        // console.log(templateNode);

        shadowRoot.innerHTML = '';
        if(templateNode) {
            // titles.forEach(title => {
            //     const instance = document.importNode(templateNode.content, true);
            //     instance.querySelector('.title').innerHTML = title.title;
            //     instance.querySelector('.subtitle').innerHTML = title.subtitle;
    
            //     shadowRoot.appendChild(instance);
            // })

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