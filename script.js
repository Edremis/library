var addBookButton = document.querySelector(".addBook");
var dialogo = document.querySelector(".dialogForm");
var close = document.querySelector(".closeButton");
var send = document.querySelector(".closeButton");
var form = document.querySelector("#formulary");
var content = document.querySelector(".content");

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
    title = title.trim();
    author = author.trim();
    if(title == "" || author == ""){
        return;
    }
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
console.log(myLibrary);
showBooks();
}

function removeBook(id){
    myLibrary.splice(id,1);
    showBooks();
}

function changeRead(id){
myLibrary[id].read == true ? myLibrary[id].read = false : myLibrary[id].read = true
}


function showBooks(){

    while(content.firstChild !== null){
        content.removeChild(content.firstChild);
    }

for(let i = 0;i<myLibrary.length;i++){
    let author = myLibrary[i].author;
    let title = myLibrary[i].title;
    let newDiv = document.createElement("div");
    let titleText = document.createElement("p");
    let authorText = document.createElement("p");
    let removeButton = document.createElement("button");
    let readButton = document.createElement("button");
    content.appendChild(newDiv);
    newDiv.appendChild(titleText);
    newDiv.appendChild(authorText);
    newDiv.appendChild(removeButton);
    newDiv.appendChild(readButton);
    
    newDiv.classList.add("box");
    newDiv.id = i;
    titleText.textContent = title;
    titleText.id = "center";
    authorText.textContent = author;
    authorText.id = "center";
    removeButton.textContent = "Delete";
    removeButton.classList.add("centerbutton");
    removeButton.id = newDiv.id;
    removeButton.addEventListener("click",function(){
        removeBook(removeButton.id)});
        readButton.classList.add("centerbutton");
        readButton.id = newDiv.id;
        if(myLibrary[i].read == false){
            readButton.textContent = "Unread";
            readButton.classList.add("unread");
        } else{
            readButton.textContent = "Read";
            readButton.classList.add("read");            
        }
        
        readButton.addEventListener("click",function(){
            changeRead(removeButton.id);
            readButton.textContent == "Unread" ? 
            (function(){
                readButton.textContent = "Read"
                readButton.classList.replace("unread","read");
            })()
            : (function(){
                readButton.textContent = "Unread"
                readButton.classList.replace("read","unread");
            })() ;
        });
    
    


    }
    

    }




