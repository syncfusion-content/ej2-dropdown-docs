


import { MultiSelect } from '@syncfusion/ej2-dropdowns';


let records: string[] = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10", "Item 11", "Item 12", "Item 13", "Item 14", "Item 15"];

//initiates the component
let MultiSelectObject: MultiSelect = new MultiSelect({
    //bind the dataSorce property
    dataSource: records,
    //set the placeholder to MultiSelect input
    placeholder:"Select an Item ",
    value: ["Item 5", "Item 7", "Item 12"],
    mode: 'Default',
    //set the height of the popup element
    popupHeight: '200px'
});

//render the component
MultiSelectObject.appendTo('#multielement');



