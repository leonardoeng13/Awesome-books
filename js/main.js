/* eslint-disable max-classes-per-file */
class Book {
  constructor(title, author, nPages) {
    this.title = title;
    this.author = author;
    this.nPages = nPages;
  }
}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(nPages) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.nPages === nPages) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}