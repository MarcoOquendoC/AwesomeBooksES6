import UI from './modules/ui.js';
import Book from './modules/book.js';
import Storage from './modules/storage.js';
import Time from './modules/time.js';

const s1 = document.getElementById('list');
const s2 = document.getElementById('new');
const s3 = document.getElementById('contact');
const b1 = document.getElementById('navList');
const b2 = document.getElementById('navNew');
const b3 = document.getElementById('navContact');

// Nav Links Events
b1.addEventListener('click', () => {
  s1.classList.remove('hide');
  s2.classList.add('hide');
  s3.classList.add('hide');
  b1.classList.add('active');
  b2.classList.remove('active');
  b3.classList.remove('active');
});

b2.addEventListener('click', () => {
  s1.classList.add('hide');
  s2.classList.remove('hide');
  s3.classList.add('hide');
  b1.classList.remove('active');
  b2.classList.add('active');
  b3.classList.remove('active');
});

b3.addEventListener('click', () => {
  s1.classList.add('hide');
  s2.classList.add('hide');
  s3.classList.remove('hide');
  b1.classList.remove('active');
  b2.classList.remove('active');
  b3.classList.add('active');
});

// Event: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: add book
document.getElementById('addBtn').addEventListener('click', () => {
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('author').value;

  if (!(title === '' || author === '')) {
    const book = new Book(title, author);
    UI.addBookToList(book);
    UI.clearFields();
    Storage.addBook(book);
  }
});

// Event: remove book
document.getElementById('bookList').addEventListener('click', (e) => {
  UI.removeBook(e.target);
  Storage.deleteBook(e.target.parentElement.previousElementSibling.textContent);
});

// Sets the datetime in website
const fecha = document.getElementById('fecha');
fecha.innerHTML = Time.getDate();
const setTime = () => {
  fecha.innerHTML = Time.getDate();
};
setInterval(setTime, 1000);