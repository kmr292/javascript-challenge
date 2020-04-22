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

// FILTER BUTTON
var button = d3.select("#filter-btn");
button.on("click", function () {
    var filteredData = data;
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    if(inputValue) {
        filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    };

    tbody.html('');
    renderTable(filteredData);

    inputElement.property('value','');
});




