// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}


// 3. Use this function to update the filters. 
function updateFilters() {
  d3.select(this);
  // console.log(this);
  // console.log(this.id);
  let filters = {};
// Grab the datetime value from the filter
  filters[this.id] = this.value;
  // console.log(filters);
  filterTable(filters);
}
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable(filters) {
    
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
    Object.keys(filters).forEach((prop) => {
      if(filters[prop]) {
        //console.log(filters[prop]);
        filteredData = filteredData.filter(row => row[prop] === filters[prop]);
      }
    });
    
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.select("#datetime").on("change", updateFilters);
  d3.select("#city").on("change", updateFilters);
  d3.select("#state").on("change", updateFilters);
  d3.select("#country").on("change", updateFilters);
  d3.select("#shape").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
