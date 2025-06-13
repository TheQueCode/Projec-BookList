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

  // Instatiate book
  const book = new Book(author, title, comment);
  
  // Add Book to UI
  UI.addBookToList(book);

  // Clear fields
  UI.clearFields();
});

// Event: Remove a Book
