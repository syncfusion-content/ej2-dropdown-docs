


import { Mention } from '@syncfusion/ej2-dropdowns';

//initiates the control
let mentionObject: Mention = new Mention({
    //bind the data manager instance to dataSource property
    dataSource: [],
    //set the value to noRecords template
    noRecordsTemplate:"<span class='norecord'> NO DATA AVAILABLE</span>"
});

//render the control
mentionObject.appendTo('#mentionElement');



