


import { AutoComplete } from '@syncfusion/ej2-dropdowns';

//initiates the component
let atcObject: AutoComplete = new AutoComplete({
    //bind the data manager instance to dataSource property
    dataSource: [],
    //set the placeholder to AutoComplete input
    placeholder: "Find an item",
    //set the value to noRecords template
    noRecordsTemplate: "<span class='norecord'> NO DATA AVAILABLE</span>"
});

//render the component
atcObject.appendTo('#atcelement');



