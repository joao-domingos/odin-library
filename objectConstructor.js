const myLibrary = [];

function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = function() {
        if (read == "yes") return "aleadry read"
        else return "didnt read"
    }

    function info() {
        return title + ", " + author + ", " + pages + ", " + read;
    }
}

function addBookToLibrary(title, author, pages, read) {
    const bookId = crypto.randomUUID(); // usar outro nome
    const newBook = new Book(bookId, title, author, pages, read);
    myLibrary.push(newBook);
}

//modificar depois
function showBooks() {
    for (let book of myLibrary) {
        console.log(book.id, book.title);
    }
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, "yes");
addBookToLibrary("1984", "George Orwell", 328, "no");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "yes");

showBooks();


