// for (let n = 1; n <= 10; n++) {
//   for (let en = 1; en <= 10; en++) {
//     let h3 = document.createElement("strong");
//     let body = document.body.appendChild(h3);
//     h3.innerHTML = n + "-" + en + "=" + n * en;
//     if (en === 10) {
//       continue;
//     } else {
//       document.body.appendChild(document.createElement("br"));
//     }
//   }
// }

// Create a container for tables
let tablesContainer = document.getElementById("tables-container");

// Loop through each table
for (let n = 1; n <= 10; n++) {
  // Create a table element
  let table = document.createElement("table");

  // Create table body
  let tableBody = table.createTBody();

  // Loop through each row of the table
  for (let en = 1; en <= 10; en++) {
    // Create a row
    let row = tableBody.insertRow();
    // Create cells for multiplicand, multiplier, and result
    let multiplicandCell = row.insertCell();
    multiplicandCell.textContent = n;

    let multiplierCell = row.insertCell();
    multiplierCell.textContent = en;

    let resultCell = row.insertCell();
    resultCell.textContent = n * en;
  }
  let row = tableBody.insertRow();
  // Append the table to the container
  tablesContainer.appendChild(table);
}
