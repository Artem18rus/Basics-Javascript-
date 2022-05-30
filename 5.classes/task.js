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
    super();
    this.state = 100;
    this.type = "magazine";
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super();
    this.state = 100;
    this.type = "book";
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.author = author;
  }
}

class NovelBook extends Book {  
  constructor(author, name, releaseDate, pagesCount) {
    super();
    this.state = 100;
    this.type = "novel";
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.author = author;
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super();
    this.state = 100;
    this.type = "fantastic";
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.author = author;
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super();
    this.state = 100;
    this.type = "detective";
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
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
