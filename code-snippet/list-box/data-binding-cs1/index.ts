


import { ListBox } from '@syncfusion/ej2-dropdowns';

// define array of string
let sportsData: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis', 'Basket Ball', 'Base Ball', 'Hockey', 'Volley Ball'];

// initialize ListBox component
let listObj: ListBox = new ListBox({
    //set the data to dataSource property
    dataSource: sportsData
});

listObj.appendTo('#listbox');



