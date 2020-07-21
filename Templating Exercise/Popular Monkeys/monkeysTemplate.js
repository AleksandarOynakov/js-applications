import { monkeys } from './monkeys.js';

function monkey() {
    let elements = {
        outputSection: document.getElementsByClassName('monkeys')
    }

    async function monkeyTemplate() {
        let html = await (await fetch('./monkeyTemplate.hbs')).text();
        let template = Handlebars.compile(html);
        elements.outputSection[0].innerHTML = template({ monkeys });
    }

    function infoBtnToggle() {
        elements.outputSection[0].addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                let { display } = e.target.parentNode.children[3].style;
                if (display === 'none') {
                    e.target.parentNode.children[3].style.display = 'block';
                } else {
                    e.target.parentNode.children[3].style.display = 'none';
                }
            }
        });
    }

    infoBtnToggle();
    monkeyTemplate();
}

monkey();