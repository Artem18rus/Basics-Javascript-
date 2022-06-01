//ЗАДАЧА 1:

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.state = 100;
    this.type = null;
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(numb) {
    if(numb < 0) {
      this._state = 0;
    } else if (numb > 100) {
      this._state = 100;
    } else {
      this._state = numb;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {  
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

//ЗАДАЧА 2:

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  
  addBook(book) {
    if (this.state > 30) {
      this books.push(book);
    }
  }  
  findBookBy(type, value) {
    if (this.books.find([findBookBy]) {
      return book;
    } else {
      return null;
    }
  }

  giveBookByName(bookName) {
    if (bookName === true) {
      function check(bookName) {
        return bookName;
      }
      const res = books.findIndex(check);
      books.splice(res, 1);
    } else {
      return null;
    }
  }
}