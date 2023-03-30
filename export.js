
//якщо чекбокси не відмічені, то = 
// Отримання даних з локального сховища та розпакування JSON
// const table = JSON.parse(localStorage.getItem('savedTableData'));
// console.log(table)

// const filteredData = table.map(item => {
//     return {
//       name: item.name,
//       dateOfBirth: item.date,
//       age: item.age,
//       address: item.address
//     };
//   });
//   console.log(filteredData)
// // Конвертування даних у формат CSV та створення файлу для завантаження
// const csvData = [
//     Object.keys(filteredData[0]).join(','), // додаємо рядок з назвами стовпців
//     ...filteredData.map(item => Object.values(item).join(','))
//   ].join('\n');
//   console.log(csvData)
  
//   const file = new Blob([csvData], { type: 'text/csv' });
//   // console.log(file)
//   const url = URL.createObjectURL(file);
//   // console.log(url)
  
//   // Додавання URL до кнопки завантаження
//   const downloadButton = document.querySelector('a[download]');
//   downloadButton.href = url;
  
// new function=============================

const downloadButton = document.querySelector('a[download]');

downloadButton.addEventListener('click', () => {
  const tableRows = document.querySelectorAll('#myTable tbody tr');
  console.log(tableRows);
  const tableData = [];
  const headerData ={
        name: "name",
        dateOfBirth: "dateOfBirth",
        age: "age",
        address: "address",
}

 console.log(Object.values(headerData).join(','))
  // Перевіряємо, чи є відмічені чекбокси
  const checkedRows = [...tableRows].filter((row) => {
    const checkbox = row.querySelector('input[type="checkbox"]');
    return checkbox && checkbox.checked;
  });
  console.log(checkedRows)

  // Якщо є відмічені чекбокси, експортуємо тільки відмічені рядки
  if (checkedRows.length > 0) {
    checkedRows.forEach((row) => {
      const rowData = {
        name: row.cells[1].textContent,
        dateOfBirth: row.cells[2].textContent,
        age: row.cells[3].textContent,
        address: row.cells[4].textContent,
      };
      tableData.push(rowData);
    });
  }
  // Якщо відмічених чекбоксів немає, експортуємо всі дані таблиці
  else {
    tableRows.forEach((row) => {
      const rowData = {
        name: row.cells[1].textContent,
        dateOfBirth: row.cells[2].textContent,
        age: row.cells[3].textContent,
        address: row.cells[4].textContent,
      };
      tableData.push(rowData);
    });
  }
console.log(tableData)
  // Конвертування даних у формат CSV та створення файлу для завантаження
  const csvData = [
    Object.values(headerData).join(','),
    // Object.keys(tableData[0]).join(','), // додаємо рядок з назвами стовпців, додає все що є в цій клітинці зі схованими елементами???
    ...tableData.map((item) => Object.values(item).join(',')),
  ].join('\n');
  console.log(csvData);

  
  const file = new Blob([csvData], { type: 'text/csv' });
  const url = URL.createObjectURL(file);

  // Додавання URL до кнопки завантаження
  const downloadButton = document.querySelector('a[download]');
  downloadButton.href = url;
});

  
