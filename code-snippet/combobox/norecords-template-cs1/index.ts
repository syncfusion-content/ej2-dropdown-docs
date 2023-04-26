


import { ComboBox } from '@syncfusion/ej2-dropdowns';

//initiates the component
let ComboBoxObject: ComboBox = new ComboBox({
    //bind the data manager instance to dataSource property
    dataSource: [],
    //set the placeholder to ComboBox input
    placeholder:"Select an item",
    //set the value to noRecords template
    noRecordsTemplate:"<span class='norecord'> NO DATA AVAILABLE</span>"
});

//render the component
ComboBoxObject.appendTo('#comboelement');



