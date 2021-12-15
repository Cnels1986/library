//
// let h = new Book('Project Hail Mary', 'Andy Weir', 496, false);
// let g = new Book('The Gunslinger', 'Stephen King', 300, true);
//
// let myLibrary = [h,g];

let myLibrary = [];
const addBtn = document.getElementById('add');
const cardContainer = document.getElementById('bookCardContainer');
const addBookPopup = document.getElementById('addBookPopup');
const addBookContainer = document.getElementById('addBookContainer');
const submitBook = document.getElementById('submitBook');

let bookCount = 0;

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.toggleRead = function () {
    if(this.read == 'read'){
        this.read = 'not read';
    } else {
        this.read = 'read';
    }
    showLibrary();
}

function toggleRead(){
    if(this.read == 'read'){
        this.read = 'not read';
    } else {
        this.read = 'read';
    }
    showLibrary();
}

function showLibrary(){
    while(cardContainer.firstChild){
        cardContainer.removeChild(cardContainer.firstChild);
    }
    for(let a = 0; a < myLibrary.length; a++) {
        createBook(myLibrary[a], a);
    }
}

function createBook(book, count){
    const card = document.createElement('div');
    const title = document.createElement('div');
    const author = document.createElement('div');
    const pages = document.createElement('div');
    const read = document.createElement('BUTTON');

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    read.textContent = book.read;
    read.addEventListener('click', () => {
        book.toggleRead();
    })

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);

    // adds a remove button to each of the book cards and uses the data attribute 'data-index' to track its index within the myLibrary array
    const remove = document.createElement('BUTTON');
    remove.textContent = "Remove";
    remove.setAttribute('data-index', count);
    remove.classList.add('removeBtn');
    remove.addEventListener('click', () => {
        let del = window.confirm("Remove: " + book.title);
        if(del){
            removeBook(remove.dataset.index);
        }
    });
    card.appendChild(remove);

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
    bookCount = myLibrary.length - 1;
    createBook(newBook, bookCount);
    hideForm();
}

function showForm(){
    addBookPopup.style.display = 'block';
}

function hideForm(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').value = 'read';
    addBookPopup.style.display = 'none';
}

window.onclick = function(event) {
    if(event.target == addBookPopup)
        hideForm();
}

function removeBook(index){
    myLibrary.splice(index, 1);
    bookCount--;
    showLibrary();
}

showLibrary();
