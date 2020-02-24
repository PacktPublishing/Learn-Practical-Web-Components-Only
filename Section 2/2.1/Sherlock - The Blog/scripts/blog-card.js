const titles = [
    {title: 'The Five Orange Pips', subtitle: 'A delivery of innocous letter followed by death.'},
    {title: 'A Study in Scarlet', subtitle: 'Dr. John Watson meets Mr. Sherlock Holmes.'},
    {title: 'The Hound of the Baskervilles', subtitle: 'A mysterious hound terrifies a town.'}
]

class BlogCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() { 
        this.render();
    }

    disconnectedCallback() {
        console.log('Disconnected from the DOM!');
    }

    render() {
        const { shadowRoot } = this;
        const templateNode = document.getElementById('card-template');

        shadowRoot.innerHTML = '';
        if(templateNode) {
            titles.forEach(title => {
                const instance = document.importNode(templateNode.content, true);
                instance.querySelector('.title').innerHTML = title.title;
                instance.querySelector('.subtitle').innerHTML = title.subtitle;
    
                shadowRoot.appendChild(instance);
            })
        } else {
            shadowRoot.innerHTML = '<p>Shadow Root failed. Please try again later.</p>';
        }
    }
}

customElements.define('blog-card', BlogCard);