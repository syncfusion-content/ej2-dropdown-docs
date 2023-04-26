


import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Button } from '@syncfusion/ej2-buttons';

// define the array of data
let sportsData: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];

// initialize DropDownList component
let dropDownListObject: DropDownList = new DropDownList({
    //set the data to dataSource property
    dataSource: sportsData,
    // set placeholder to DropDownList input element
    placeholder: "Select a game",
    //enable the clear icon
    showClearButton: true
});
// render initialized DropDownList
dropDownListObject.appendTo('#ddlelement');

// Set null value to value property for clear the selected item
document.getElementById('btn').onclick = () => {
  dropDownListObject.value = null;
}



