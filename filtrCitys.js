// додавання категорій в фільтр-ліст
const tableForFiltr = JSON.parse(localStorage.getItem('savedTableData'));
console.log(tableForFiltr)

const filteredDataAddress = tableForFiltr.map(item => {
    return {
      address: item.address
    };
});
  console.log(filteredDataAddress)
  arrTowns = []

for (let town of filteredDataAddress){
    console.log(town)
    console.log(town.address)
    arrTowns.push(town.address.toUpperCase())
}
console.log(arrTowns)
const uniqueTowns = new Set(Array.from(arrTowns))
console.log(uniqueTowns)

const selectTown = document.querySelector('#townData');
console.log(selectTown)
uniqueTowns.forEach(town => {
        console.log(town);
        const div = document.createElement('div')
        div.className = "name1"
        selectTown.appendChild(div)
        const check = document.createElement('input');
        check.type = "checkbox";
        check.className = "check3";
        check.id = town;
        div.appendChild(check);
        const label = document.createElement('label');
        label.setAttribute("for", "");
        label.htmlFor = check.id;
        label.innerHTML = town;
        div.appendChild(label);
})

document.addEventListener("DOMContentLoaded", function(event) {
    const optionsFiltr = document.querySelectorAll('#townData div');
    console.log(optionsFiltr)
    const saveFiltrData = [];
    optionsFiltr.forEach(option=>{
        const filtrData = {
            isChecked: option.querySelector('input[type="checkbox"]').checked,
            town: option.textContent
        }
        console.log(filtrData)
        saveFiltrData.push(filtrData)
    })
    localStorage.setItem('savedTableDataFiltr', JSON.stringify(saveFiltrData));
  });
  

  //ФІЛЬТРУВАННЯ колонки адреса ==========
//
const okButton = document.querySelector('#ok')
console.log(okButton)
okButton.addEventListener('click', filtrOfAddressColumn)


function filtrOfAddressColumn(){
    const label = document.querySelectorAll('#townData div label')
    console.log(label)
    const checkboxAddress = document.querySelectorAll('#townData div .check3')
    const tableRows = document.querySelectorAll('#myTable tbody tr');
    const checkBoxes = [];
        console.log(tableRows)

        for (let check of checkboxAddress){
            if (check.checked) {
                checkBoxes.push(check.id.toUpperCase())
            }
        }
        console.log(tableRows)
        tableRows.forEach(row => {
            const rowData = {
            name: row.cells[1].textContent,
            date: row.cells[2].textContent,
            age: row.cells[3].textContent,
            address: row.cells[4].textContent,
            isChecked: row.cells[0].querySelector('input[type="checkbox"]').checked 
                    };
            console.log(row)
            if (checkBoxes.length === 0 || checkBoxes.includes(rowData.address.toUpperCase())) {
                row.style.display = 'table-row';
                } else {
                row.style.display = 'none';
                }
            
        })
        
}

// searchfield - Filter
// <input type="text" placeholder="Search in filters" size="16" class="inpS" id="inpAddress" onkeyup="showTown()" value></input> 
// function showTown(){ 
    // const filtrAria1 = document.querySelector('#filtrAria1')
    // console.log(filtrAria1)
    // const searchfield = filtrAria1.querySelector('#inpAddress')
    // console.log(searchfield)
    // const townData = filtrAria1.querySelector('#townData')
    // console.log(townData)
    
    //     const input = searchfield.value;
    //     console.log(input)

    //     for ( let i = 0; i<townData.children.length; i++){
    //         const label = townData.children[i].querySelector('label');
    //         label.className = "";
    //     }
    //     if (label.innerHTML.indexOf(input) == -1) {
    //         label.className = "hide";
    //     }
    
// }

function showTown() {
    const filtrAria1 = document.querySelector('#filtrAria1');
    const searchfield = filtrAria1.querySelector('#inpAddress');
    const townData = filtrAria1.querySelector('#townData');
    const input = searchfield.value.toLowerCase();
  
    for (let i = 0; i < townData.children.length; i++) {
      const child = townData.children[i];
      const label = child.querySelector('label');
      const labelText = label.textContent.toLowerCase();
  
      if (labelText.includes(input)) {
        child.style.display = '';
      } else {
        child.style.display = 'none';
      }
    }
  }
  

