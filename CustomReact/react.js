const mainContainer = document.getElementById('root');



// sample react component visualization

const reactEl = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    textValue: 'Click me to open Google'
}

// Custom renderring function 
function renderReactComponent(mainContainer, reactElement){

    console.log(mainContainer);

    const el = document.createElement(reactEl.type);
    for (const prop in reactElement.props) {
        el.setAttribute(prop, reactElement.props[prop]);
    }
    el.textContent = reactElement.textValue;


    mainContainer.appendChild(el);
}


renderReactComponent(mainContainer, reactEl);