const contacts = [
    {
        id: 1,
        name: "John",
        phoneNumber: "0847759632",
        email: "john@john.com"
    },
    {
        id: 2,
        name: "Merrie",
        phoneNumber: "0845996111",
        email: "merrie@merrie.com"
    },
    {
        id: 3,
        name: "Adam",
        phoneNumber: "0866592475",
        email: "adam@stamat.com"
    },
    {
        id: 4,
        name: "Peter",
        phoneNumber: "0866592475",
        email: "peter@peter.com"
    },
    {
        id: 5,
        name: "Max",
        phoneNumber: "0866592475",
        email: "max@max.com"
    },
    {
        id: 6,
        name: "David",
        phoneNumber: "0866592475",
        email: "david@david.com"
    }
];

async function cardGen() {
    let contactsSection = document.getElementById('contacts');
    let response = await fetch('./cardTemplate.hbs');
    let respText = await response.text();
    let html = Handlebars.compile(respText);
    contactsSection.innerHTML = html({ contacts });
    contactsSection.addEventListener('click', (e) => {
        
        if (e.target.tagName === 'BUTTON') {
            if (e.target.parentNode.children[2].style.display === 'block') {
                e.target.parentNode.children[2].style.display = 'none';
            } else {
                e.target.parentNode.children[2].style.display = 'block';
            }
        }
    });
}

cardGen();