//додавання даних в таблицю і їх зберігання ======================
function addToTable(event) {
    event.preventDefault(); // забороняємо стандартну поведінку кнопки "submit"
    const dob = new Date(document.getElementById('dateInput').value); // отримати дату народження з поля введення
    console.log(dob)
    const now = new Date(); // отримати поточну дату
    console.log(now)
    const diffInMs = now - dob; // відняти дату народження від поточної дати, щоб отримати різницю в мілісекундах
    console.log(diffInMs)
    // const ageDate = new Date(diffInMs); // створити нову дату, щоб перетворити різницю відносно поточної дати в формат дати
    // console.log(ageDate); 
    // const age = Math.abs(ageDate.getUTCFullYear() - 1970); // перетворити різницю в роки та вивести вік користувача
    // console.log(age);   

    const msInYear = 1000 * 60 * 60 * 24 * 365.25; // кількість мілісекунд в році з урахуванням високосних років
    console.log(msInYear)
const age = Math.floor(diffInMs / msInYear);
console.log(age);  

    // Отримуємо дані з полів форми
const name = document.getElementById('nameInput').value;
const dateOfBirth = document.getElementById('dateInput').value;
// const age = document.getElementById('ageInput').value;
const address = document.getElementById('addressInput').value;

if (name && age>=0 && address) {    
// Створюємо новий рядок таблиці та заповнюємо його даними з форми
const newRow = document.createElement('tr');
// створити клітинку для чекбоксу
let checkboxCell = document.createElement("td");
checkboxCell.className = "input"
let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.id = 'checkbox-' + (tableData.rows.length);
checkbox.className = "checkbox";
checkboxCell.appendChild(checkbox);
//та клітинки для name, age, address
const nameCell = document.createElement('td');
nameCell.className = "name";
const dateCell = document.createElement('td');
dateCell.className = "datOfBirth"
const ageCell = document.createElement('td');
ageCell.className = "age";
const addressCell = document.createElement('td');
addressCell.className = "address";
nameCell.textContent = name;
dateCell.textContent = dateOfBirth;
ageCell.textContent = age;
addressCell.textContent = address;

newRow.appendChild(checkboxCell);
newRow.appendChild(nameCell);
newRow.appendChild(dateCell);
newRow.appendChild(ageCell);
newRow.appendChild(addressCell);

// Додаємо новий рядок до тіла таблиці
document.getElementById('tableData').appendChild(newRow);

// Очищаємо форму
document.getElementById('myForm').reset();
location.reload();
}
}

document.getElementById('myForm').addEventListener('submit', addToTable);

//при закритті сторінки збереження даних таблиці("unload") - змінила на зберігання таблиці при натисканні на кнопку сабміт
window.addEventListener('submit', function() {
// Отримати дані з таблиці
const tableRows = document.querySelectorAll('#myTable tbody tr');
console.log(tableRows)
const tableData = [];
tableRows.forEach(row => {
  const rowData = {
    name: row.cells[1].textContent,
    date: row.cells[2].textContent,
    age: row.cells[3].textContent,
    address: row.cells[4].textContent,
    isChecked: row.cells[0].querySelector('input[type="checkbox"]').checked // Додати стан чекбоксу до об'єкту rowData
    };
  tableData.push(rowData);
});
// Зберегти дані в локальне сховище
localStorage.setItem('savedTableData', JSON.stringify(tableData));
});


// const saveTableData = (btnId) => {
//   // Отримати дані з таблиці
//   const tableRows = document.querySelectorAll('#myTable tbody tr');
//   const tableData = [];
//   tableRows.forEach(row => {
//     const rowData = {
//       name: row.cells[1].textContent,
//       date: row.cells[2].textContent,
//       age: row.cells[3].textContent,
//       address: row.cells[4].textContent,
//       isChecked: row.cells[0].querySelector('input[type="checkbox"]').checked // Додати стан чекбоксу до об'єкту rowData
//     };
//     tableData.push(rowData);
//   });
//   // Зберегти дані в локальне сховище з використанням ідентифікатора кнопки
//   localStorage.setItem(`savedTableData`, JSON.stringify(tableData));
// };

// // Додати обробник події на обидві кнопки сабміту
// const btn1 = document.querySelector('#btn1');
// console.log(btn1)
// const btn2 = document.querySelector('#btn2');
// console.log(btn2)
// btn1.addEventListener('click', () => {
//   saveTableData('#btn1');
// });
// btn2.addEventListener('click', () => {
//   saveTableData('#btn2');
// });



//при оновленні сторінки ==============
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
    nameCell.className = "name";
    const dateCell = document.createElement('td');
    dateCell.className = "datOfBirth"
    const ageCell = document.createElement('td');
    ageCell.className = "age";
    const addressCell = document.createElement('td');
    addressCell.className = "address";
    const checkboxCell = document.createElement('td'); // Додати нову ячейку для чекбоксу
    checkboxCell.className = "input"
      const checkbox = document.createElement('input'); // Створити новий елемент чекбоксу
      checkbox.type = 'checkbox';
      checkbox.className = 'checkbox';
    checkbox.checked = rowData.isChecked; // Встановити стан чекбоксу збережених даних
    checkboxCell.appendChild(checkbox); // Додати чекбокс в ячейку
    nameCell.textContent = rowData.name;
    dateCell.textContent = rowData.date;
    ageCell.textContent = rowData.age;
    addressCell.textContent = rowData.address;
    newRow.appendChild(checkboxCell); // Додати ячейку з чекбоксом до рядка
    newRow.appendChild(nameCell);
    newRow.appendChild(dateCell);
    newRow.appendChild(ageCell);
    newRow.appendChild(addressCell);
    tableBody.appendChild(newRow);
  });
}
});


  
//відмічання чекбоксів 1 стовбик ============================
//     window.onload = function selectRows() {
// const overall = document.querySelector('.checkCommon') //class - повертає инпут загального чекбоксу
// console.log(overall)
// const tableData = document.querySelector('#tableData');
// console.log(tableData)
// const checkboxes = tableData.getElementsByClassName('checkbox');
// console.log(checkboxes)

// for (const checkbox of checkboxes) {
//     checkbox.addEventListener("click", selectCheck)
// }
// function selectCheck() {
//     let checkedCount = 0;
//     for(const checkbox of checkboxes) {
//         if (checkbox.checked) {
//             checkedCount++;
//         }
//     }

//     if (checkedCount ===0) {
//         overall.checked = false;
//         overall.indeterminate = false;
//     } else if ( checkedCount == checkboxes.length) {
//         overall.checked = true;
//         overall.indeterminate = false;
//     } else {
//         overall.checked = false;
//         overall.indeterminate = true;
//     }
// }

// function selectAll() {
//         for(const checkbox of checkboxes){
//            if (overall.checked == true) {
//             checkbox.checked = true
//            } else if(overall.checked == false){
//             checkbox.checked = false
//            }
//         }
// }
// overall.addEventListener ("click", selectAll)
//     }

//ВИДАЛЕННЯ РЯДКІВ   ========================
const deleteButton = document.querySelector('#delete-button');

deleteButton.addEventListener('click', () => {
    // отримуємо всі рядки таблиці
    const tableRows = document.querySelectorAll('#myTable tbody tr');
    console.log(tableRows)
    const tableData = [];
  
    // пробігаємося по кожному рядку та перевіряємо, чи він відмічений
    tableRows.forEach(row => {
      const checkbox = row.querySelector('input[type="checkbox"]');
      console.log(checkbox)
      if (checkbox && checkbox.checked) {
        // якщо рядок відмічений, видаляємо його
        row.remove();
        console.log(checkbox)
      } else {
        // якщо рядок не відмічений, зберігаємо його дані у масиві
        const rowData = {
          name: row.cells[1].textContent,
          date: row.cells[2].textContent,
          age: row.cells[3].textContent,
          address: row.cells[4].textContent,
          isChecked: row.cells[0].querySelector('input[type="checkbox"]').unchecked
        };
        tableData.push(rowData);
      }
    });
  
    // зберігаємо нові дані в локальному сховищі
    localStorage.setItem('savedTableData', JSON.stringify(tableData));
  // оновлюємо сторінку, щоб зняти позначки з загального чекбоксу
  location.reload();
});

 // показати фільтр =========================== 
// function showFiltr() {
//     const menu = document.getElementById("filtrAria");
//   if (menu.style.display !== "block") {
//     menu.style.display = "block";
//   } else {
//     menu.style.display = "none";
//   }
// }

// function showFiltr1() {
//     const menu = document.getElementById("filtrAria1");
//   if (menu.style.display !== "block") {
//     menu.style.display = "block";
//   } else {
//     menu.style.display = "none";
//   }
// }
//розворот категорій, зміна напрямку стрілки ==========================
function rotateArrow() {
    const arrow = document.getElementById('subCatigory');
    const rotateArrow = document.getElementById('rotate');
    if (arrow.style.display!== "block") {
        arrow.style.display = "block";
        // Змінюємо стиль стрілки
        rotateArrow.style.transform = 'rotate(90deg)';
    } else {
        arrow.style.display = "none";
        // Змінюємо стиль стрілки
        rotateArrow.style.transform = 'rotate(0deg)';
    }
    }

//чекбокси фільтра  name ================================ 
// window.onload = function selectFiltrName() {
//     const maincategoryBox = document.querySelector('.check00');
//     const allCategoryBox = document.querySelector('.check11');
//     const boxes = document.querySelectorAll('.check1')
//     const subBoxes = document.querySelectorAll('.check2')
// for (const check of subBoxes){
//     check.addEventListener("click", selectSubboxes)
// }
// function selectSubboxes(){
//     let checkedCount = 0;
//     for(const check of subBoxes) {
//         if (check.checked) {
//             checkedCount++;
//         }
//     }

//     if (checkedCount === 0) {
//         allCategoryBox.checked = false;
//         allCategoryBox.indeterminate = false;
//         maincategoryBox.checked = false;
//         maincategoryBox.indeterminate = false;
//     } else if (checkedCount == subBoxes.length) {
//         allCategoryBox.checked = true;
//         allCategoryBox.indeterminate = false;
//         maincategoryBox.checked = false;
//         maincategoryBox.indeterminate = true;
//     } else {
//         allCategoryBox.checked = false;
//         allCategoryBox.indeterminate = true;
//         maincategoryBox.checked = false;
//         maincategoryBox.indeterminate = true;
//     }
// }

// for (const check of boxes){
//     check.addEventListener("click", selectBoxes)
// }
// function selectBoxes(){
//     let checkedCount = 0;
//     for(const check of boxes) {
//         if (check.checked) {
//             checkedCount++;
//         }
//     }

//     if (checkedCount === 0) {
//         maincategoryBox.checked = false;
//         maincategoryBox.indeterminate = false;
//     } else if ( checkedCount == boxes.length) {
//         maincategoryBox.checked = true;
//         maincategoryBox.indeterminate = false;
//     } else {
//         maincategoryBox.checked = false;
//         maincategoryBox.indeterminate = true;
//     }
// }

// function selectAllSubFiltr() {
//     for(const check of subBoxes){
//        if (allCategoryBox.checked == true) {
//         check.checked = true
//        } else if(allCategoryBox.checked == false){
//         check.checked = false
//        }
//     }
// }
// allCategoryBox.addEventListener ("click", selectAllSubFiltr)

// function selectAllFiltr() {
//     for(const check of boxes){
//        if (maincategoryBox.checked == true) {
//         check.checked = true
//        } else if(maincategoryBox.checked == false){
//         check.checked = false
//        }
//     }
// }
// maincategoryBox.addEventListener ("click", selectAllFiltr)
// }

//чекбокси фільтра address ================================ 
// window.onload = function sekectFiltrAddress() {
//     const maincategoryBox = document.querySelector('.check0');
//     const boxes = document.querySelectorAll('.check3')

// for (const check of boxes){
//     check.addEventListener("click", selectBoxes)
// }
// function selectBoxes(){
//     let checkedCount = 0;
//     for(const check of boxes) {
//         if (check.checked) {
//             checkedCount++;
//         }
//     }

//     if (checkedCount ===0) {
//         maincategoryBox.checked = false;
//         maincategoryBox.indeterminate = false;
//     } else if ( checkedCount == boxes.length) {
//         maincategoryBox.checked = true;
//         maincategoryBox.indeterminate = false;
//     } else {
//         maincategoryBox.checked = false;
//         maincategoryBox.indeterminate = true;
//     }
// }

// function selectAllFiltr() {
//     for(const check of boxes){
//        if (maincategoryBox.checked == true) {
//         check.checked = true
//        } else if(maincategoryBox.checked == false){
//         check.checked = false
//        }
//     }
// }
// maincategoryBox.addEventListener ("click", selectAllFiltr)
// }
//ЧЕКБОКСИ ===============================

function handleCheckboxes() {
  // код для першої функції Name
 //відмічання чекбоксів рядків таблиці     ============================
  const overall = document.querySelector('.checkCommon') //class - повертає инпут загального чекбоксу
  const tableData = document.querySelector('#tableData');
  const checkboxes = tableData.getElementsByClassName('checkbox');
  
  for (const checkbox of checkboxes) {
      checkbox.addEventListener("click", selectCheck)
  }
  function selectCheck() {
      let checkedCount = 0;
      for(const checkbox of checkboxes) {
          if (checkbox.checked) {
              checkedCount++;
          }
      }
  
      if (checkedCount ===0) {
          overall.checked = false;
          overall.indeterminate = false;
      } else if ( checkedCount == checkboxes.length) {
          overall.checked = true;
          overall.indeterminate = false;
      } else {
          overall.checked = false;
          overall.indeterminate = true;
      }
  }
  
  function selectAllRows() {
          for(const checkbox of checkboxes){
             if (overall.checked == true) {
              checkbox.checked = true
             } else if(overall.checked == false){
              checkbox.checked = false
             }
          }
  }
  overall.addEventListener ("click", selectAllRows)
      
  
  // код для другої функції Name ====

    const mainBoxName = document.querySelector('.check00');
    const allCategoryBox = document.querySelector('.check11');
    const boxes = document.querySelectorAll('.check1')
    const subBoxes = document.querySelectorAll('.check2')
  for (const check of subBoxes){
      check.addEventListener("click", selectSubboxes)
  }
  function selectSubboxes(){
    let checkedCount = 0;
    for(const check of subBoxes) {
        if (check.checked) {
            checkedCount++;
        }
    }

    if (checkedCount === 0) {
        allCategoryBox.checked = false;
        allCategoryBox.indeterminate = false;
        mainBoxName.checked = false;
        mainBoxName.indeterminate = false;
    } else if (checkedCount == subBoxes.length) {
        allCategoryBox.checked = true;
        allCategoryBox.indeterminate = false;
        mainBoxName.checked = false;
        mainBoxName.indeterminate = true;
    } else {
        allCategoryBox.checked = false;
        allCategoryBox.indeterminate = true;
        mainBoxName.checked = false;
        mainBoxName.indeterminate = true;
    }
  }

  for (const check of boxes){
      check.addEventListener("change", selectBoxes)
  }
  function selectBoxes(){
    let checkedCount = 0;
    for(const check of boxes) {
        if (check.checked) {
            checkedCount++;
        }
    }

    if (checkedCount === 0) {
      mainBoxName.checked = false;
      mainBoxName.indeterminate = false;
    } else if ( checkedCount == boxes.length) {
      mainBoxName.checked = true;
      mainBoxName.indeterminate = false;
    } else {
      mainBoxName.checked = false;
      mainBoxName.indeterminate = true;
    }
  }

  function selectAllSubFiltr() {
      for(const check of subBoxes){
        if (allCategoryBox.checked == true) {
          check.checked = true
        } else if(allCategoryBox.checked == false){
          check.checked = false
        }
      }
  }
  allCategoryBox.addEventListener ("click", selectAllSubFiltr)

  function selectAllFiltrName() {
      for(const check of boxes){
        if (mainBoxName.checked == true) {
          check.checked = true
        } else if(mainBoxName.checked == false){
          check.checked = false
        }
      }
  }
  mainBoxName.addEventListener ("click", selectAllFiltrName)


  // код для третьої функції Address
 
  const mainBoxAddress = document.querySelector('.check0');
  const boxesAddress = document.querySelectorAll('#townData div .check3')
  console.log(boxesAddress)

  for (const check of boxesAddress){
      check.addEventListener("click", selectBoxesAddress)
  }
  function selectBoxesAddress(){
      let checkedCount = 0;
      for(const check of boxesAddress) {
          if (check.checked) {
              checkedCount++;
          }
      }

    if (checkedCount ===0) {
      mainBoxAddress.checked = false;
      mainBoxAddress.indeterminate = false;
    } else if ( checkedCount == boxesAddress.length) {
      mainBoxAddress.checked = true;
      mainBoxAddress.indeterminate = false;
    } else {
      mainBoxAddress.checked = false;
      mainBoxAddress.indeterminate = true;
    }
  }

  function selectAllFiltrAddress() {
      for(const check of boxesAddress){
        if (mainBoxAddress.checked == true) {
          check.checked = true
        } else if(mainBoxAddress.checked == false){
          check.checked = false
        }
      }
  }
  mainBoxAddress.addEventListener ("click", selectAllFiltrAddress)
  //=====
  // зміна виду кнопки reset Name============

  const checkboxesname = document.querySelectorAll('.check1');
  const resetButton = document.querySelector('#resetName');
  const checkboxname = document.querySelector('.check00');
  const searchFieldName = document.querySelector('#inpName');

  // додано обробник події input до поля вводу
  searchFieldName.addEventListener('input', changeCursorNameAll);

  // функція для перевірки чекбоксів
  function changeCursorName() {
    let checkedCount = 0;
    for (const check of checkboxesname) {
      if (check.checked) {
        checkedCount++;
        console.log(checkedCount)
      }
    }
    if (checkedCount > 0) { // додано перевірку поля вводу на не порожність
      resetButton.style.cursor = 'pointer';
      resetButton.style.color = 'blue'; // Якщо є відмічені чекбокси або не порожнє поле, міняємо стиль кнопки reset
    } else {
      resetButton.style.cursor = 'not-allowed';
      resetButton.style.color = 'grey'; // Якщо немає відмічених чекбоксів і порожнє поле, змінюємо стиль кнопки reset на неактивний
    }
  }

  // функція для перевірки поля вводу
  function changeCursorNameAll() {
    if (checkboxname.checked || checkboxname.indeterminate || searchFieldName.value.trim() !== '') { // додано перевірку поля вводу на не порожність
      resetButton.style.cursor = 'pointer';
      resetButton.style.color = 'blue';
    } else {
      resetButton.style.cursor = 'not-allowed';
      resetButton.style.color = 'grey';
    }
  }

  checkboxname.addEventListener('change', changeCursorNameAll)
  // відслідковування зміни чекбоксів
  for (const check of checkboxesname) {
    check.addEventListener('change', changeCursorName);
  }


  // Обробник події для кнопки "reset", який очищує відмічені чекбокси та значення поля вводу
  resetButton.addEventListener('click', function() {
    for (const check of checkboxesname) {
      check.checked = false;
    }
    searchFieldName.value = '';
    checkboxname.checked = false;
    checkboxname.indeterminate = false;
    resetButton.style.cursor = 'not-allowed';
    resetButton.style.color = 'grey';
  });

  // зміна кнопки reset Address =========================

  const searchFieldAddress = document.querySelector('#inpAddress') 
  const checkboxAddressAll = document.querySelector('.check0')
  const resetAddress = document.querySelector('#resetAddress')
  console.log(resetAddress)
  const checkboxAddress = document.querySelectorAll('#townData div .check3')
  console.log(checkboxAddress)
  
  for (const check of checkboxAddress) {
    console.log(check)
    check.addEventListener('change', changeResetAddress) //відслідковуємо кожний чекбокс
   
  function changeResetAddress() {  //змінюємо вид кнопки ресет в залежності від стану чекбоксів
    let checkedcount = 0
    for (const check of checkboxAddress) {
      if(check.checked) {
      checkedcount++;
      console.log(checkedcount)
      }
    }

    if(checkedcount>0 && check.checked) {
      resetAddress.style.cursor = 'pointer';
      resetAddress.style.color = 'blue';
      } else if (checkboxAddressAll.checked || checkboxAddressAll.indeterminate) {
      resetAddress.style.cursor = 'pointer';
      resetAddress.style.color = 'blue';
      } else {
      resetAddress.style.cursor = 'not-allowed';
      resetAddress.style.color = 'grey';
    }
  }
  
  if ( searchFieldAddress.value !== ''){
    resetAddress.style.cursor = 'pointer';
    resetAddress.style.color = 'blue';
  } else {
    resetAddress.style.cursor = 'not-allowed';
    resetAddress.style.color = 'grey';
  }

  resetAddress.addEventListener('click', function(){ //очищаємо фільтр
    const checkboxAddress = document.querySelectorAll('#townData div .check3')
    for (const check of checkboxAddress) {
      check.checked = false;
    }
    checkboxAddressAll.checked = false;
    checkboxAddressAll.indeterminate = false;
    resetAddress.style.cursor = 'not-allowed';
    resetAddress.style.color = 'grey'
    searchFieldAddress.value = '';
    })
  }
  checkboxAddressAll.addEventListener('change', changeResetAddress) //відслідковуємо загальний чекбокс
  searchFieldAddress.addEventListener('input', changeResetAddress)// відслідковуємо поле вводу
}
// виклик функції
window.onload = function() {
  handleCheckboxes();
}

//=====================================================================================================
//показати і сховати фільтр (по кліку на значок та поза зоною) ==========
//name
function showFiltr() {
  const menu = document.getElementById("filtrAria");
  if (menu.style.display !== "block") {
  menu.style.display = "block";
  document.addEventListener("click", hideFiltr);
  } else {
  menu.style.display = "none";
  document.removeEventListener("click", hideFiltr);
  }
  }
  
  function hideFiltr(event) {
  const menu = document.getElementById("filtrAria");
  const icon = document.getElementById("filtrIcon");
  if (!menu.contains(event.target) && !icon.contains(event.target)) {
  menu.style.display = "none";
  document.removeEventListener("click", hideFiltr);
  }
  }
  //address
  function showFiltr1() {
    const menu = document.getElementById("filtrAria1");
    if (menu.style.display !== "block") {
    menu.style.display = "block";
    document.addEventListener("click", hideFiltr1);
    } else {
    menu.style.display = "none";
    document.removeEventListener("click", hideFiltr1);
    }
    }
    
    function hideFiltr1(event) {
    const menu = document.getElementById("filtrAria1");
    const icon = document.getElementById("filtrIcon1");
    if (!menu.contains(event.target) && !icon.contains(event.target)) {
    menu.style.display = "none";
    document.removeEventListener("click", hideFiltr1);
    }
}

