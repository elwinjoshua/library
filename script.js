const loginBtn = document.querySelector('.loginbtn');
const addBookBtn = document.querySelector('.addbutton');
const addNewBook = document.querySelector('.addnewbook');
const sumbitBtn = document.querySelector('.Submit');
const form = document.querySelector('.form');
const cardContainer = document.querySelector('.cardcontainer');



let myLibrary = [];
let check;
let i=0;
let removeBtn;
let bookAdded;



class Book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}



loginBtn.addEventListener('click', () => {
    window.location.href = 'https://accounts.google.com/v3/signin/identifier?dsh=S-2146908273%3A1686642507487520&elo=1&ffgf=1&ifkv=Af_xneH6JVcWd_AzakdI1rs78ImG_PGC1zp9sILsyp1SplzR_YPUO94kINkoxg7sGCdQESFsKQ2cBQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin';
})


addBookBtn.addEventListener('click', () => {
    addNewBook.classList.toggle('visible');
});


function addToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let checkbox = document.querySelector('#checkbox').checked;
    let newBook = new Book(title, author, pages, checkbox);
    check = checkbox;
    if(title === '' && author === '' && pages === '' && check === false) return;
    myLibrary.push(newBook);
}

function render(value) {
    let htmlContent = 
    `<div class="bookadded">
        <button id="myInput">${myLibrary[value].title}</button> 
        <button id="myInput">${myLibrary[value].author}</button> 
        <button id="myInput">${myLibrary[value].pages}</button>
        <button class="read" onclick="read(${value})" ${check ? "check" : ""} id="readBtn${value}">${check ? "Read" : "Not Read"}</button>
        <button class="remove" onclick="remove(${value})">Remove</button>
    </div>`
    cardContainer.insertAdjacentHTML("afterbegin", htmlContent);

}


function remove(i) {
    myLibrary.splice(i, 1);
    cardContainer.innerHTML = '';
    myLibrary.forEach((book, i) => {
        render(i);
  });
}

function read(i) {
    myLibrary[i].check = !myLibrary[i].check;
    const readBtn = document.querySelector(`#readBtn${i}`);
    readBtn.classList.toggle("check");
    if (readBtn.textContent === "Read") {
        readBtn.textContent = "Not Read";
      } else {
        readBtn.textContent = "Read"
      }
}


sumbitBtn.addEventListener('click', () => {
    addToLibrary();
    addNewBook.classList.toggle('visible');
    while (i<myLibrary.length) {
    render(i);
    form.reset();
    i++;
    }
    
});
