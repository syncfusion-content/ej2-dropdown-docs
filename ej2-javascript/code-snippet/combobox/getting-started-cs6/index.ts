

import { ComboBox } from '@syncfusion/ej2-dropdowns';

// define the array of data
let sportsData: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];

// initialize ComboBox component
let comboBoxObject: ComboBox = new ComboBox({
    //set the data to dataSource property
    dataSource: sportsData,
    //set height to popup list
    popupHeight: '200px',
    //set width to popup list
    popupWidth: '250px',
    // set placeholder to ComboBox input element
    placeholder: "Select a game"
});

// render initialized ComboBox
comboBoxObject.appendTo('#comboelement');


