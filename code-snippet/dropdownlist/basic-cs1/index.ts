


import { DropDownList } from '@syncfusion/ej2-dropdowns';

//define the array of complex data
let sportsData: { [key: string]: Object }[] = [
    { Id: 'game1', Game: 'Badminton' },
    { Id: 'game2', Game: 'Football' },
    { Id: 'game3', Game: 'Tennis' }
];

//initiate the DropDownList
let dropDownListObject: DropDownList = new DropDownList({
    // bind the sports Data to datasource property
    dataSource: sportsData,
    // maps the appropriate column to fields property
    fields: { text: 'Game', value: 'Id' },
    //set the placeholder to DropDownList input
    placeholder:"Select a game"
});
//render the component
dropDownListObject.appendTo('#ddlelement');



