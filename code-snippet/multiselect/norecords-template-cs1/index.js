//initiates the component
var msObject = new ej.dropdowns.MultiSelect({
    //bind the data manager instance to dataSource property
    dataSource: [],
    //set the placeholder to MultiSelect input
    placeholder:"Select an item",
    //set the value to noRecords template
    noRecordsTemplate:"<span class='norecord'> NO DATA AVAILABLE</span>"
});

//render the component
msObject.appendTo('#select');

