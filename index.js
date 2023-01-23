let myLibrary = [
  {
    title: 'Deep Work',
    author: 'Cal Newport',
    status: true,
  },
  {
    title: 'Deep Work 2',
    author: 'Cal Newport 2',
    status: true,
  },
];

// Book constructor function
function Book(title, author, status) {
  this.title = title;
  this.author = author;
  this.status = status;

  // Toggle status
  this.toggleStatus = function () {
    this.status = !this.status;
  };
}

// Add book to library
function addBookToLibrary() {
  // Grab the table body element
  let tableBody = document.getElementById('table-body');

  // Create row element
  let row = document.createElement('tr');

  // Create cells
  let cellTitle = document.createElement('td');
  let cellAuthor = document.createElement('td');
  let cellStatus = document.createElement('td');
  let cellDelete = document.createElement('td');

  // Insert data into cells
  cellTitle.innerText = 'Deep Work';
  cellAuthor.innerText = 'Cal Newport';
  cellStatus.innerText = 'Read';
  cellDelete.innerText = 'Delete';

  // Append cells to row
  row.appendChild(cellTitle);
  row.appendChild(cellAuthor);
  row.appendChild(cellStatus);
  row.appendChild(cellDelete);

  // Append row to table body
  tableBody.appendChild(row);
}

// const newBook = new Book('harry potter', 'jk rowling', false);
// console.log(newBook.status);
// newBook.toggleStatus();
// console.log(newBook.status);
