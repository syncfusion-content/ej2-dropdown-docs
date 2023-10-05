//initiates the component
var ddlObject = new ej.dropdowns.DropDownList({
    //bind the data manager instance to dataSource property
    dataSource: [],
    //set the placeholder to DropDownList input
    placeholder:"Select an item",
    //set the value to noRecords template
    noRecordsTemplate:"<span class='norecord'> NO DATA AVAILABLE</span>"
}); 
//render the component
ddlObject.appendTo('#ddlelement');

