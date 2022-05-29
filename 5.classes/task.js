//ЗАДАЧА 1:

class PrintEditionItem {
  const state = 100;
  const type = null;
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
    }
    
    fix() {
      this.state = this.state * 1,5;
    }
    
  this._state = state;
    set state(numb) {
      if(numb < 0) {
        this.state = 0;
      } else if (numb > 100) {
        this.state = 100;
      } else {
        this.state = numb;
      }
    }
    
    get state() {
      return this._state;
    }
}

class Magazine extends PrintEditionItem {
  const state = 100;
  const type = "magazine";
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
    }
}

class Book extends PrintEditionItem {
  const state = 100;
  const type = "book";
    constructor(name, releaseDate, pagesCount, author) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
    }
}

class NovelBook extends Book {
  const state = 100;
  const type = "novel";
    constructor(name, releaseDate, pagesCount, author) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
    }
}

class FantasticBook extends Book {
  const state = 100;
  const type = "fantastic";
    constructor(name, releaseDate, pagesCount, author) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
    }
}

class DetectiveBook extends Book {
  const state = 100;
  const type = "detective";
    constructor(name, releaseDate, pagesCount, author) {
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
