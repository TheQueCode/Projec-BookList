// Book Class: represents a book

class Book {
  constructor (author, title, comment) {
    this.author = author;
    this.title = title;
    this.comment = comment;
  }
}

// UI Class: Handle UI tasks

class UI{
  static displayBooks () {
    const StoredBooks = [
      {
        author: 'John Doe',
        title: 'Book One',
        comment: 'Boring'
      },
      {
        author: 'Jane Doe',
        title: 'Book Two',
        comment: 'Great book'
      }
    ];

    const books = StoredBooks

    books.forEach((book) => UI.addBookToList(book))
  }

  static addBookToList (book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.author}</td>
      <td>${book.title}</td>
      <td>${book.comment}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }

  static deleteBook (el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert (message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
    
    // Vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  static clearFields () {
    document.querySelector('#author').value = '';
    document.querySelector('#title').value = '';
    document.querySelector('#comment').value = '';
  }
}

// Store Class: Handles Storage

// Event: Display a Book
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  //Prevent actual submit
  e.preventDefault();
  
  //Get form values
  const author = document.querySelector('#author').value;
  const title = document.querySelector('#title').value;
  const comment = document.querySelector('#comment').value;

  // Validate
  if (author == '' || title == '') {
    UI.showAlert('Please fill in all fields', 'danger');
  } else {
    // Instatiate book
    const book = new Book(author, title, comment);
  
    // Add Book to UI
    UI.addBookToList(book);

    // Show success message
    UI.showAlert('Book Added', 'success');

    // Clear fields
    UI.clearFields();
  }
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', e => {
  UI.deleteBook(e.target);

  // Show success message
  UI.showAlert('Book Removed', 'success');
})