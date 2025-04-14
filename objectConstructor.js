const myLibrary = [];

function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.getReadStatus = function() {
        return this.read === "yes" ? "already read" : "didn't read";
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
    generateTable();
}

function generateTable() {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    // table header
    const headerRow = document.createElement("tr");
    ["title", "author", "pages", "read", "id"].forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    tblBody.appendChild(headerRow);
  
  // for each book create all cell info 1 by 1
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;
    row.appendChild(titleCell);

    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;
    row.appendChild(authorCell);

    const pagesCell = document.createElement("td");
    pagesCell.textContent = book.pages;
    row.appendChild(pagesCell);

    const readCell = document.createElement("td");
    readCell.textContent = book.getReadStatus();
    row.appendChild(readCell);

    const idCell = document.createElement("td");
    idCell.textContent = book.id;
    row.appendChild(idCell);

    tblBody.appendChild(row);
  }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  }

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, "yes");
addBookToLibrary("1984", "George Orwell", 328, "no");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "yes");

showBooks();


