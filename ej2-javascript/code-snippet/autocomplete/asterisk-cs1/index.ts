


import { AutoComplete } from '@syncfusion/ej2-dropdowns';

// defined the array of data
let sportsData: string[] = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Tennis'];

// initialize AutoComplete component
let atcObject: AutoComplete = new AutoComplete({
    //set the data to dataSource property
    dataSource: sportsData,
    // set placeholder to AutoComplete input element
    placeholder: "Find a game"

    floatLabelType: "auto"
});

// render initialized AutoComplete
atcObject.appendTo('#atcelement');


