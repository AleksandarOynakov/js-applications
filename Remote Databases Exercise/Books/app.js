function booksDB() {
    let submitBtn = document.getElementById('new-book').getElementsByTagName('button')[0];
    let editBtn = document.getElementById('new-book').getElementsByTagName('button')[1];
    let bookKey = '';
    let loadAllBooks = document.getElementById('loadBooks');
    let booksTable = document.getElementsByTagName('tbody')[0];
    booksTable.innerHTML = '';

    loadAllBooks.addEventListener('click', listAllBooks);
    submitBtn.addEventListener('click', createNewBook);
    editBtn.addEventListener('click', updateBook);
    booksTable.addEventListener('click', updateDeleteBook);

    async function updateBook(e) {
        e.preventDefault();
        let bodyRequest = getFromInformation();
        await sendRequest(`https://softuni-tests-bfd33.firebaseio.com/books/${bookKey}.json`, 'PUT', JSON.stringify(bodyRequest));
        setFormInformation({ author: '', isbn: '', title: '' });
        listAllBooks();
        submitBtn.style.display = 'block';
        editBtn.style.display = 'none';
    }

    function updateDeleteBook(e) {
        let buttons = {
            'Edit': () => {
                let bookInfo = {
                    author: e.target.parentNode.parentNode.children[1].textContent,
                    isbn: e.target.parentNode.parentNode.children[2].textContent,
                    title: e.target.parentNode.parentNode.children[0].textContent
                }
                setFormInformation(bookInfo);
                submitBtn.style.display = 'none';
                editBtn.style.display = 'block';
            },
            'Delete': () => {
                document.getElementById(`${bookKey}`).remove();
                sendRequest(`https://softuni-tests-bfd33.firebaseio.com/books/${bookKey}.json`, 'DELETE');
            }
        }
        if (e.target.tagName === 'BUTTON') {
            bookKey = e.target.parentNode.parentNode.getAttribute('id');
            buttons[e.target.textContent]();
        }
    }

    async function createNewBook(e) {
        e.preventDefault();
        let bodyRequest = getFromInformation();
        await sendRequest('https://softuni-tests-bfd33.firebaseio.com/books.json', 'POST', JSON.stringify(bodyRequest));
        listAllBooks();
    }

    function getFromInformation() {
        return {
            author: document.getElementById('author').value,
            isbn: document.getElementById('isbn').value,
            title: document.getElementById('title').value
        }
    }

    function setFormInformation({ author, isbn, title }) {
        document.getElementById('author').value = author;
        document.getElementById('isbn').value = isbn;
        document.getElementById('title').value = title;
    }

    async function listAllBooks() {
        let books = await sendRequest('https://softuni-tests-bfd33.firebaseio.com/books.json', 'GET');
        booksTable.innerHTML = '';
        for (const key in books) {
            genarateBookHTML(books[key], key);
        }
    }

    function genarateBookHTML(bookObj, key) {
        let newBook =
            `<tr id="${key}">` +
            `<td>${bookObj.title}</td>` +
            `<td>${bookObj.author}</td>` +
            `<td>${bookObj.isbn}</td>` +
            `<td>` +
            `<button>Edit</button>` +
            `<button>Delete</button>` +
            `</td>` +
            `</tr>`;
        booksTable.innerHTML += newBook;
    }

    async function sendRequest(url, method, body) {
        let requestObj = {
            method,
            body
        }
        if (body === undefined) {
            delete requestObj.body;
        }
        try {
            let response = await fetch(url, requestObj);
            if (response.status !== 200) {
                throw new Error('Something went wrong');
            }
            let data = await response.json();
            return data;
        } catch (error) {
            //Handle errors
        }
    }
}

booksDB();