//initiates the component
var acObject = new ej.dropdowns.AutoComplete({
    //bind the data manager instance to dataSource property
    dataSource: [],
    //set the placeholder to AutoComplete input
    placeholder:"Select an item",
    //set the value to noRecords template
    noRecordsTemplate:"<span class='norecord'> NO DATA AVAILABLE</span>"
}); 
//render the component
acObject.appendTo('#atcelement');

