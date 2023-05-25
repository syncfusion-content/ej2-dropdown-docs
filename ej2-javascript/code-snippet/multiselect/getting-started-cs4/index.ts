

import { MultiSelect } from '@syncfusion/ej2-dropdowns';

// define the array of data
let sportsData: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];

// initialize MultiSelect component
let msObject: MultiSelect = new MultiSelect({
    //set the data to dataSource property
    dataSource: sportsData,
    //set height to popup list
    popupHeight: '200px',
    //set width to popup list
    popupWidth: '250px',
    // set placeholder to MultiSelect input element
    placeholder: "Select games"
});

// render initialized MultiSelect
msObject.appendTo('#select');



