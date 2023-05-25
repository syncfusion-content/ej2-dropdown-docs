

import { MultiSelect } from '@syncfusion/ej2-dropdowns';

// define the array of data
let sportsData: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];

// initialize MultiSelect component
let msObject: MultiSelect = new MultiSelect({
    //set the data to dataSource property
    dataSource: sportsData,
    // set placeholder to multiSelect input element
    placeholder: "Select games"
});

// render initialized multiSelect
msObject.appendTo('#select');


