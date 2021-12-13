
let h = new Book('Project Hail Mary', 'Andy Weir', 496, false);
let g = new Book('The Gunslinger', 'Stephen King', 300, true);

let myLibrary = [h,g];
const addBtn = document.getElementById('add');
const cardContainer = document.getElementById('bookCardContainer');
const addBookPopup = document.getElementById('addBookPopup');
const addBookForm = document.getElementById('addBookContainer');


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        let output = title + ' by ' + author + ', ' + pages + ' pages';
        if(read){
            return output + ', read';
        } else {
            return output + ', not read yet';
        }
    }
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

    cardContainer.appendChild(card);
}

// function addBookToLibrary(){
//
// }

addBtn.addEventListener('click', ()=> {
    showForm();
});

function showForm(){
    addBookPopup.style.display = 'block';
}

function hideForm(){
    addBookPopup.style.display = 'none';
}

window.onclick = function(event) {
    if(event.target == addBookPopup)
        hideForm();
}

showLibrary();
