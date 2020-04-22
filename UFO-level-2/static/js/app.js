// LOADING DATA INTO TABLE
var tbody = d3.select("tbody");
// from data.js
var tableData = data;

renderTable(tableData);

function renderTable(tableData) {
    tableData.forEach((UFO_report) => {
        var row = tbody.append('tr');
        Object.entries(UFO_report).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value)
        });
    });
};

// INPUT BOXES
var inputs = d3.selectAll('input');
inputs.on('change', filterTable);

function filterTable() {
    var key = d3.select(this).property('id');
    var value = d3.select(this).property('value');

    if (value) {
        tableData = tableData.filter(row => row[key] == value)
    };

    tbody.html('');
    renderTable(tableData);
}





