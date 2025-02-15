//1
class PrintEditionItem {

    constructor (name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

    fix(){
        return this.state *= 1.5;
    }

    set state(number) {
        if (number < 0) {this._state = 0}
        else if(number > 100) {this._state = 100}
        else {this._state = number}
    }

    get state() {
        return this._state;
    }

   
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state, type) {
        super (name, releaseDate, pagesCount, state, type);
        this.type = "magazine";
    }  
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount, state, type) {
        super (name, releaseDate, pagesCount, state, type);
        this.author = author;
        this.type = "book";   
    } 
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
            this.type = "novel";
        }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state, type) {
        super (author, name, releaseDate, pagesCount, state, type);
            this.type = "fantastic";
        }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state, type) {
        super (author, name, releaseDate, pagesCount, state, type);
        this.type = "detective";
        }
}

//2
class Library {
    constructor (name, books) {
        this.name = name;
        this.books = [];
    }

  addBook(book){
    if (book.state > 30){
        this.books.push(book);
    }
  }  

  findBookBy(type, value){
    const result = this.books.find(book => book[type] === value);
    if (result === undefined) {return null};
    return result;
  }

  giveBookByName(bookName){
    let result;
    for (let i = 0; i < this.books.length; i++){
        if (this.books[i].name == bookName){
            result = this.books[i];
            this.books.splice(i,1);
            return result;
            }
    }
    if (result === undefined){
    return null;
    }
    }

  }

