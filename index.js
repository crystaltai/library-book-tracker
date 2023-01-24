const myLibrary = [];

// Book constructor function
function Book(title, author, status) {
  this.title = title;
  this.author = author;
  this.status = status;

  // Toggle status
  this.toggleStatus = function () {
    if (this.status === 'Read') {
      this.status === 'Unread';
    }
    this.status === 'Read';
  };
}

// Add book to library
function addBookToLibrary() {
  // Grab the form input values
  let inputTitle = document.getElementById('title').value;
  let inputAuthor = document.getElementById('author').value;
  let inputStatus = document.getElementById('status').value;

  // Check if any inputs are missing
  if (inputTitle && inputAuthor && inputStatus) {
    // Create new object and push to Library array
    const newBook = new Book(inputTitle, inputAuthor, inputStatus);
    myLibrary.push(newBook);

    // Update table with new row of input book
    updateTable(inputTitle, inputAuthor, inputStatus);

    // Clear form input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('status').value = '';
  }
}

// Update table
function updateTable(title, author, status) {
  // Grab the table body element
  let tableBody = document.getElementById('table-body');

  // Create row element
  let row = document.createElement('tr');

  // Create cells
  let cellTitle = document.createElement('td');
  let cellAuthor = document.createElement('td');
  let cellStatus = document.createElement('td');
  let cellDelete = document.createElement('td');

  // Create status button
  let statusButton = document.createElement('button');
  statusButton.innerHTML = status;
  statusButton.classList.add('button');
  statusButton.classList.add('status-button');

  // Create delete button
  let deleteButton = document.createElement('button');
  deleteButton.innerText = 'X';
  deleteButton.classList.add('button');
  deleteButton.classList.add('delete-button');

  // Insert data into cells
  cellTitle.innerText = title;
  cellAuthor.innerText = author;
  cellStatus.appendChild(statusButton);
  cellDelete.appendChild(deleteButton);

  // Append cells to row
  row.appendChild(cellTitle);
  row.appendChild(cellAuthor);
  row.appendChild(cellStatus);
  row.appendChild(cellDelete);

  // Append row to table body
  tableBody.appendChild(row);
}

// Generate pre-existing Library
function generateLibrary() {
  const firstBook = new Book('Deep Work', 'Cal Newport', 'Read');
  myLibrary.push(firstBook);
  const secondBook = new Book('Harry Potter', 'JK Rowling', 'Read');
  myLibrary.push(secondBook);

  myLibrary.forEach(element => {
    updateTable(element.title, element.author, element.status);
  });
}
generateLibrary();

// const newBook = new Book('harry potter', 'jk rowling', false);
// console.log(newBook.status);
// newBook.toggleStatus();
// console.log(newBook.status);
