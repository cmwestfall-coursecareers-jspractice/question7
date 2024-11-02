// come back tomorrow and redo all of these. we have reached burnout for the day

class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    this.books.push({
      title: title,
      author: author,
      borrower: null,
    });
  }

  checkoutBook(title, borrower) {
    for (let book of this.books) {
      if (book.title === title) {
        book.borrower = borrower;
        return;
      }
    }
  }

  returnBook(title) {
    for (let book of this.books) {
      if (book.title === title) {
        book.borrower = null;
        return;
      }
    }
  }

  listBorrowedBooks() {
    return this.books.filter((book) => book.borrower !== null);
  }
}

let library = new Library();
library.addBook("The Great Gatsby", "F. Scott Fitzgerald");
library.addBook("Moby Dick", "Herman Melville");
library.addBook("1984", "George Orwell");
library.checkoutBook("The Great Gatsby", "John Doe");
library.checkoutBook("1984", "Jane Doe");
console.log(library.listBorrowedBooks());

library.returnBook("The Great Gatsby");
console.log(library.listBorrowedBooks());
