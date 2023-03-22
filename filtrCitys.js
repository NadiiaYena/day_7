const tableForFiltr = JSON.parse(localStorage.getItem('savedTableData'));
console.log(tableForFiltr)

const filteredDataAddress = tableForFiltr.map(item => {
    return {
      address: item.address
    };
  });
  console.log(filteredDataAddress)
  arrTowns = []
  console.log(arrTowns)

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
        div.click = "name1"
        selectTown.appendChild(div)
        const check = document.createElement('input');
        check.type = "checkbox";
        check.className = "check3"
        div.appendChild(check);
        const lable = document.createElement('lable');
        lable.htmlFor = "checkbox";
        lable.innerHTML = town;
        div.appendChild(lable);
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
  

  //ФІЛЬТРУВАННЯ ==========
  
