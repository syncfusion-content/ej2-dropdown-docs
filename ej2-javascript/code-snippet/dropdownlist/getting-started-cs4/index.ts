

import { DropDownList } from '@syncfusion/ej2-dropdowns';

// define the array of data
let sportsData: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];

// initialize DropDownList component
let dropDownListObject: DropDownList = new DropDownList({
    //set the data to dataSource property
    dataSource: sportsData,
    //set height to popup list
    popupHeight: '200px',
    //set width to popup list
    popupWidth: '250px',
    // set placeholder to DropDownList input element
    placeholder: "Select a game"
});

// render initialized DropDownList
dropDownListObject.appendTo('#ddlelement');


