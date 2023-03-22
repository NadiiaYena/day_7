//сортування стовбця Age ===========================
function sortTableByAge() {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    console.log(table)
    switching = true;

    // Задаємо напрямок сортування: по зростанню або спаданню
    dir = "asc"; //зростання
    /* Виконуємо цикл, поки не буде відсортована вся таблиця */
    while (switching) {
      switching = false;
      rows = table.rows;
      /* Проходимо по всіх рядках таблиці, крім заголовку */
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        /* Отримуємо значення двох елементів, які потрібно порівняти */
        x = rows[i].getElementsByTagName("td")[3];
        y = rows[i + 1].getElementsByTagName("td")[3];

        const arrowUp = document.querySelector('.arrow.up');
        console.log(arrowUp)
        const arrowDown = document.querySelector('.arrow.down');
        console.log(arrowDown)
        /* Порівнюємо значення */
        if (dir == "asc") {
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
            shouldSwitch = true;
            arrowDown.classList.remove('downActive');
            arrowUp.classList.add('upActive');
            break;
          }
        } else if (dir == "desc") {
          if (Number(x.innerHTML) < Number(y.innerHTML)) {
            shouldSwitch = true;
            arrowUp.classList.remove('upActive');
            arrowDown.classList.add('downActive')
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* Якщо знайдено елемент, який потрібно поміняти, встановлюємо прапорець switching на true */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;
        console.log(switchcount)
      } else {
        /* Якщо елементів, які потрібно поміняти, не знайдено, а напрям сортування - "desc", змінюємо його на "asc" і розпочинаємо сортування з початку */
        if (switchcount == 0 && dir == "desc") {
          dir = "asc";
          switching = true;
        } else if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
        }
      }
     const arrowUp = document.querySelector('.arrow.up');
    const arrowDown = document.querySelector('.arrow.down');
    console.log(arrowUp)
    console.log(arrowDown)
    if (arrowUp.classList.contains('active')) {
      arrowUp.style.color = 'blue';
    } else {
      arrowUp.style.color = '';
    }
    arrowDown.style.color = '';
  }
}
    

