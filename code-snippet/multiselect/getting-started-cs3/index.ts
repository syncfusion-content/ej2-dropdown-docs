

import { MultiSelect } from '@syncfusion/ej2-dropdowns';

// defined the array of data
let sportsData: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];

// initialize MultiSelect component
let msObject: MultiSelect = new MultiSelect({
    //set the data to dataSource property
    dataSource: sportsData,
    // set placeholder to MultiSelect input element
    placeholder: "Select games"
});

// render initialized MultiSelect
msObject.appendTo('#select');


