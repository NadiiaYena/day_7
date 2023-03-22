    function addToTable(event) {
        event.preventDefault(); // забороняємо стандартну поведінку кнопки "submit"
    // Отримуємо дані з полів форми
    const name = document.getElementById('nameInput').value;
    const age = document.getElementById('ageInput').value;
    const address = document.getElementById('addressInput').value;

    if (name && age && address) {    
    // Створюємо новий рядок таблиці та заповнюємо його даними з форми
    const newRow = document.createElement('tr');
    const nameCell = document.createElement('td');
    const ageCell = document.createElement('td');
    const addressCell = document.createElement('td');
    nameCell.textContent = name;
    ageCell.textContent = age;
    addressCell.textContent = address;
  
    newRow.appendChild(nameCell);
    newRow.appendChild(ageCell);
    newRow.appendChild(addressCell);

    // Додаємо новий рядок до тіла таблиці
    document.getElementById('tableData').appendChild(newRow);

    // Очищаємо форму
    document.getElementById('myForm').reset();
}
}
// })

document.getElementById('myForm').addEventListener('submit', addToTable);

window.addEventListener('unload', function() {
    // Отримати дані з таблиці
    const tableRows = document.querySelectorAll('#myTable tbody tr');
    const tableData = [];
    tableRows.forEach(row => {
      const rowData = {
        name: row.cells[0].textContent,
        age: row.cells[1].textContent,
        address: row.cells[2].textContent
      };
      tableData.push(rowData);
    });
  
    // Зберегти дані в локальне сховище
    localStorage.setItem('savedTableData', JSON.stringify(tableData));
  });
  

window.addEventListener('load', function() {
    // Перевірити, чи є збережені дані в локальному сховищі
    const savedData = localStorage.getItem('savedTableData');
  
    // Якщо є збережені дані, відтворити їх у таблиці
    if (savedData) {
      const tableData = JSON.parse(savedData);
      const tableBody = document.querySelector('#myTable tbody');
      tableData.forEach(rowData => {
        const newRow = document.createElement('tr');
        const nameCell = document.createElement('td');
        const ageCell = document.createElement('td');
        const addressCell = document.createElement('td');
        nameCell.textContent = rowData.name;
        ageCell.textContent = rowData.age;
        addressCell.textContent = rowData.address;
        newRow.appendChild(nameCell);
        newRow.appendChild(ageCell);
        newRow.appendChild(addressCell);
        tableBody.appendChild(newRow);
      });
    }
  });
  

