


import { DropDownList } from '@syncfusion/ej2-dropdowns';

//initiates the component
let DropDownListObject: DropDownList = new DropDownList({
    //bind the data manager instance to dataSource property
    dataSource: [],
    //set the placeholder to DropDownList input
    placeholder:"Select an item",
    //set the value to noRecords template
    noRecordsTemplate:"<span class='norecord'> NO DATA AVAILABLE</span>"
});

//render the component
DropDownListObject.appendTo('#ddlelement');



