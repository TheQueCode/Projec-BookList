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
}

// Store Class: Handles Storage

// Event: Display a Book
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book

// Event: Remove a Book