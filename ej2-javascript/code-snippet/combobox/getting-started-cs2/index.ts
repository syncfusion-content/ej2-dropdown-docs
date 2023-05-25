

import { ComboBox } from '@syncfusion/ej2-dropdowns';

// defined the array of data
let sportsData: string[] = ['Badminton', 'Cricket', 'Football', 'Golf'];

// initialize ComboBox component
let comboBoxObject: ComboBox = new ComboBox({
    //set the data to dataSource property
    dataSource: sportsData,
    // set placeholder to ComboBox input element
    placeholder: "Select a game"
});

// render initialized ComboBox
comboBoxObject.appendTo('#comboelement');


