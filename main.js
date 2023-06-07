var bookIndex = 0;
let myLibrary = [];

const Book = (title, author, pages, isRead) => {
  return { title, author, pages, isRead };
}

function addBookToLibrary(title, author, pages, isRead) {
  const book = Book(title, author, pages, isRead);
  myLibrary.push(book);
}

function displayBooksInLibrary() 
{
  var t = document.getElementById('title').value;
  var a = document.getElementById('author').value;
  var p = document.getElementById('pages').value;
  var r = document.getElementById('read').value;

  addBookToLibrary(t, a, p, r);
  const container = document.querySelector('#container');

  //Need to change this for create a card modal that add to body
  const div = document.createElement('div');
  const paraTitle = document.createElement('p');
  const paraAuthor = document.createElement('p');
  const paraPages = document.createElement('p');

  const buttonRemove = document.createElement('button');
  const buttonRead = document.createElement('button');

  paraTitle.textContent = myLibrary[bookIndex].title;
  paraAuthor.textContent = myLibrary[bookIndex].author;
  paraPages.textContent = myLibrary[bookIndex].pages;

  buttonRemove.dataset.id = bookIndex;
  buttonRemove.textContent = "Remove";
  buttonRemove.addEventListener('click', removeBook);

  buttonRead.dataset.id = bookIndex;
  buttonRead.textContent = "Read";
  buttonRead.addEventListener('click', toggleReadStatus);

  div.appendChild(paraTitle);
  div.appendChild(paraAuthor);
  div.appendChild(paraPages);
  div.appendChild(buttonRead);
  div.appendChild(buttonRemove);
  container.appendChild(div);

  bookIndex++;
}

function removeBook(e) 
{
  let index = e.target.dataset.id;
  let bookTitle = myLibrary[index].title;
  myLibrary = myLibrary.filter( book => book.title != bookTitle );
  removeElement(bookTitle);
}

function toggleReadStatus(e) 
{
  let index = e.target.dataset.id;
  let bookReadStatus = myLibrary[index].isRead;
  myLibrary[index].isRead = !bookReadStatus;
}

function removeElement(title)
{
  var el = document.getElementById(title);
  el.remove();
}

function openForm() {
  document.getElementById("myForm").style.display = "inline-block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}