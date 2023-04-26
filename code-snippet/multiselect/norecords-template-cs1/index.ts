


import { MultiSelect } from '@syncfusion/ej2-dropdowns';

//initiates the component
let msObject: MultiSelect = new MultiSelect({
    //bind the data manager instance to dataSource property
    dataSource: [],
    //set the placeholder to MultiSelect input
    placeholder:"Select an item",
    //set the value to noRecords template
    noRecordsTemplate:"<span class='norecord'> NO DATA AVAILABLE</span>"
});

//render the component
msObject.appendTo('#select');



