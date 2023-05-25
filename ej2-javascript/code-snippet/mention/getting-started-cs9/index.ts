

import { Mention } from '@syncfusion/ej2-dropdowns';

// defined the array of data
let userData: string[] = ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph'];

// initialize Mention control
let mentionObject: Mention = new Mention({
    //set the data to dataSource property
    dataSource: userData
});

// render initialized Mention
mentionObject.appendTo('#mentionElement');


