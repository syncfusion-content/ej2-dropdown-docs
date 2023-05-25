//initiates the component
var mentionObject = new ej.dropdowns.Mention({
   //bind the data manager instance to dataSource property
   dataSource: [],
   //set the value to noRecords template
   noRecordsTemplate:"<span class='norecord'> NO DATA AVAILABLE</span>"
});

//render the component
mentionObject.appendTo('#mentionElement');

