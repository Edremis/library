var addBookButton = document.querySelector(".addBook");
var dialogo = document.querySelector(".dialogForm");
var close = document.querySelector(".closeButton");
var send = document.querySelector(".closeButton");
var form = document.querySelector("#formulary");

addBookButton.addEventListener("click",function(){
    dialogo.showModal();
});

close.addEventListener("click",function(){
    dialogo.close();
});

form.addEventListener("submit",function(){
    event.preventDefault();

    let title = document.querySelector("#bookTitle").value;
    let author = document.querySelector("#bookAuthor").value;

    addBook(title,author);
    dialogo.close();
})

const myLibrary=[];

// Constructor de libros
function Book(title,author){
this.title = title,
this.author = author
this.read = false;
}

//Función para añadir libros
function addBook(title,author){
const newBook = new Book(title,author);
myLibrary.push(newBook);
showBooks();
}

function removeBook(){
    
}

//Función que muestra todos los libros
function showBooks(){
//Crear divs y colocarlos
}