


import { AutoComplete } from '@syncfusion/ej2-dropdowns';

//define the array of complex data
let sportsData: { [key: string]: Object }[] = [
    { Id: 'Game1', Game: 'Badminton' },
    { Id: 'Game2', Game: 'Basketball' },
    { Id: 'Game3', Game: 'Cricket' },
    { Id: 'Game4', Game: 'Football' },
    { Id: 'Game5', Game: 'Golf' },
    { Id: 'Game6', Game: 'Hockey' },
    { Id: 'Game7', Game: 'Rugby' },
    { Id: 'Game8', Game: 'Snooker' }
];

//initiate the AutoComplete
let atcObject: AutoComplete = new AutoComplete({
    // bind the sports Data to datasource property
    dataSource: sportsData,
    // maps the appropriate column to fields property
    fields: { value: 'Game' },
    //set the placeholder to AutoComplete input
    placeholder: "Find a game"
});
//render the component
atcObject.appendTo('#atcelement');



