const myLibrary = [];

// Book constructor function
function Book(title, author, status) {
  this.title = title;
  this.author = author;
  this.status = status;
  this.order = null;

  // Toggle status
  this.toggleStatus = function () {
    if (this.status === 'Read') {
      this.status = 'Unread';
    } else {
      this.status = 'Read';
    }
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

    // Clear and Update table with new row of input book
    clearTable();
    myLibrary.forEach((element, index) => {
      element.order = index;
      updateTable(element.title, element.author, element.status, element.order);
    });

    // Clear form input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('status').value = 'Read';
  }
}

// Update table
function updateTable(title, author, status, order) {
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
  statusButton.setAttribute('id', order);
  statusButton.addEventListener('click', toggleStatus);

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

// Delete all table rows
function clearTable() {
  // Grab the table body element
  let table = document.getElementById('table');
  let tableRowCount = table.rows.length;
  for (let i = tableRowCount - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}

// Toggle status
function toggleStatus(e) {
  // Update object
  let titleOrder = e.target.id;
  myLibrary[titleOrder].toggleStatus();

  clearTable();
  myLibrary.forEach((element, index) => {
    element.order = index;
    updateTable(element.title, element.author, element.status, element.order);
  });
}

// Generate pre-existing Library
function generateLibrary() {
  const firstBook = new Book('Deep Work', 'Cal Newport', 'Read');
  myLibrary.push(firstBook);
  const secondBook = new Book('Harry Potter', 'JK Rowling', 'Read');
  myLibrary.push(secondBook);

  myLibrary.forEach((element, index) => {
    element.order = index;
    updateTable(element.title, element.author, element.status, element.order);
  });
}
generateLibrary();
