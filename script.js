
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
        let card = document.createElement('div');

        cardContainer.appendChild(card);
    });
}

function addBookToLibrary(){

}

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
