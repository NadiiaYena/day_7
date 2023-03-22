// Отримання даних з локального сховища та розпакування JSON
const table = JSON.parse(localStorage.getItem('savedTableData'));
console.log(table)

const filteredData = table.map(item => {
    return {
      name: item.name,
      dateOfBirth: item.date,
      age: item.age,
      address: item.address
    };
  });
  console.log(filteredData)
// Конвертування даних у формат CSV та створення файлу для завантаження
const csvData = [
    Object.keys(filteredData[0]).join(','), // додаємо рядок з назвами стовпців
    ...filteredData.map(item => Object.values(item).join(','))
  ].join('\n');
  console.log(csvData)
  
  const file = new Blob([csvData], { type: 'text/csv' });
  console.log(file)
  const url = URL.createObjectURL(file);
  console.log(url)
  
  // Додавання URL до кнопки завантаження
  const downloadButton = document.querySelector('a[download]');
  downloadButton.href = url;
  
  
  
  
  
