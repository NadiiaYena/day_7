const form = document.querySelector('#form');
console.log(form)
const mytable = document.querySelector('.table');
console.log(mytable)
const tableBody = mytable.querySelector('#tableData');
console.log(tableBody)

form.addEventListener('submit', e => {
  e.preventDefault(); // перешкоджаємо відправці форми відправити форму на сервер
  const formData = new FormData(form);
  console.log(formData)
  const file = formData.get('files');
  console.log(file)

//   const name = formData.get('name');
//   const dateOfBirth = formData.get('dateOfBirth');
//   const age = formData.get('age');
//   const address = formData.get('address');
//   console.log(name, dateOfBirth, age, address)

  // створюємо новий FileReader об'єкт
  const reader = new FileReader();
  console.log(reader)

  // викликаємо метод readAsText() для зчитування текстових даних з файлу
  reader.readAsText(file);

  // коли файли успішно прочитано, ми витягуємо дані з файлу і додаємо їх до таблиці
  reader.onload = () => {
    const data = reader.result;
    // console.log(data)
    const rows = data.split('\n').slice(1);
    // console.log(rows)
    // Для кожного рядка створюємо новий рядок таблиці
    rows.forEach(row => {
        // console.log(row)
      const cells = row.split(',');
    //   console.log(cells)
      
// Створюємо новий рядок таблиці та заповнюємо його даними з форми
const newRow = document.createElement('tr');
// створити клітинку для чекбоксу
let checkboxCell = document.createElement("td");
checkboxCell.className = "input"
let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.id = 'checkbox-' + (tableBody.rows.length);
checkbox.className = "checkbox";
checkboxCell.appendChild(checkbox);
//та клітинки для name, birthday, age, address
const nameCell = document.createElement('td');
nameCell.className = "name"
const dateCell = document.createElement('td');
dateCell.className = "datOfBirth"
const ageCell = document.createElement('td');
ageCell.className = "age"
const addressCell = document.createElement('td');
addressCell.className = "address"
for (let i = 0; i<cells.length; i++){
    // console.log(cells[i])
nameCell.textContent = cells[0];
dateCell.textContent = cells[1];
ageCell.textContent = cells[2];
addressCell.textContent = cells[3];

newRow.appendChild(checkboxCell);
newRow.appendChild(nameCell);
newRow.appendChild(dateCell);
newRow.appendChild(ageCell);
newRow.appendChild(addressCell);

// Додаємо новий рядок до тіла таблиці
document.getElementById('tableData').appendChild(newRow);

// Очищаємо форму
document.getElementById('form').reset();

//зчитуємо дані з таблиці і зберігаємо їх в локальному сховищі
const tableRowsForm = document.querySelectorAll('#myTable tbody tr');
    const tableDataForm = [];
    tableRowsForm.forEach(row => {
      const rowData = {
        name: row.cells[1].textContent,
        date: row.cells[2].textContent,
        age: row.cells[3].textContent,
        address: row.cells[4].textContent,
        isChecked: row.cells[0].querySelector('input[type="checkbox"]').checked // Додати стан чекбоксу до об'єкту rowData
        };
      tableDataForm.push(rowData);
    //   console.log(rowData)
    });
    // Зберегти дані в локальне сховище
    localStorage.setItem('savedTableData', JSON.stringify(tableDataForm));
    location.reload();
}
})
}
});

// function saveData() {
//     // Отримати дані з таблиці
//     const tableRowsForm = document.querySelectorAll('#myTable tbody tr');
//     const tableDataForm = [];
//     tableRowsForm.forEach(row => {
//       const rowData = {
//         name: row.cells[1].textContent,
//         date: row.cells[2].textContent,
//         age: row.cells[3].textContent,
//         address: row.cells[4].textContent,
//         isChecked: row.cells[0].querySelector('input[type="checkbox"]').checked // Додати стан чекбоксу до об'єкту rowData
//         };
//       tableDataForm.push(rowData);
//       console.log(rowData)
//     });
//     // Зберегти дані в локальне сховище
//     localStorage.setItem('savedTableData', JSON.stringify(tableDataform));
//     };
// const btn2 = document.querySelector('#btn2')
// btn2.addEventListener('click', saveData)

//       const tr = document.createElement('tr');
//       cells.forEach(cell => {
//         const td = document.createElement('td');
//         td.
//         td.textContent = cell;
//         tr.appendChild(td);
//       });
//       mytable.appendChild(tr);
//     });
//   };
// });
