
// let h = new Book('Project Hail Mary', 'Andy Weir', 496, false);
// let g = new Book('The Gunslinger', 'Stephen King', 300, true);

// let myLibrary = [h,g];

let myLibrary = [];
const addBtn = document.getElementById('add');
const cardContainer = document.getElementById('bookCardContainer');
const addBookPopup = document.getElementById('addBookPopup');
const addBookContainer = document.getElementById('addBookContainer');
const submitBook = document.getElementById('submitBook');

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function showLibrary(){
    myLibrary.forEach((book) => {
        createBook(book);
    });
}

function createBook(book){
    const card = document.createElement('div');
    const title = document.createElement('div');
    const author = document.createElement('div');
    const pages = document.createElement('div');
    const read = document.createElement('div');

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    read.textContent = book.read;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);

    const test = document.createElement('BUTTON');
    test.textContent = "Remove";
    test.setAttribute('data-index', myLibrary.length-1);
    card.appendChild(test);

    cardContainer.appendChild(card);
}

addBtn.addEventListener('click', () => {
    showForm();
})

submitBook.addEventListener('click', () => {
    getBook();
})

function getBook(){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    createBook(newBook);
    hideForm();
}

function showForm(){
    addBookPopup.style.display = 'block';
}

function hideForm(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').value = 'yes';
    addBookPopup.style.display = 'none';
}

window.onclick = function(event) {
    if(event.target == addBookPopup)
        hideForm();
}

showLibrary();
