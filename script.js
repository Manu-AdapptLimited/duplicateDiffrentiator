const names = [
	'John',
	'Jane',
	'Emily',
	'Emily',
	'Emily',
	'Michael',
	'John',
	'Jane',
	'Michael',
	'Emily',
	'Jane',
	'Jane',
	'Michael'
];

// Step 2: Get distinct names
const distinctNames = [ ...new Set(names) ];

// Step 3-6: Create table with duplicate counts and color coding
const table = document.createElement('table');
const headerRow = table.insertRow(0);
headerRow.innerHTML = '<th>Name</th><th>Duplicates</th>';

distinctNames.forEach((name) => {
	const count = names.filter((n) => n === name).length;
	const row = table.insertRow();
	const nameCell = row.insertCell();
	const countCell = row.insertCell();

	nameCell.textContent = name;
	countCell.textContent = count;

	// Step 4-6: Apply color coding based on duplicate count
	if (count > 0 && count < 3) {
		row.style.backgroundColor = 'red';
	} else if (count >= 3 && count < 10) {
		row.style.backgroundColor = 'yellow';
	} else if (count >= 10) {
		row.style.backgroundColor = 'green';
	}
});

// Append table to the document body
document.body.appendChild(table);
