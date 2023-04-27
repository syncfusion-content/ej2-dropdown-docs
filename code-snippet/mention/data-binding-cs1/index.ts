


import { Mention } from '@syncfusion/ej2-dropdowns';

//define the array of complex data
let sportsData: { [key: string]: Object }[] = [
    { ID: 'game1', Game: 'Badminton' },
    { ID: 'game2', Game: 'Football' },
    { ID: 'game3', Game: 'Tennis' },
    { ID: 'game4', Game: 'Hockey' },
    { ID: 'game5', Game: 'Basketball' }
];

//initiate the Mention
let mentionObject: Mention = new Mention({
    // bind the sports Data to datasource property
    dataSource: sportsData,
    // maps the appropriate column to fields property
    fields: { text: 'Game', value: 'ID' }
});
//render the control
mentionObject.appendTo('#mentionElement');



