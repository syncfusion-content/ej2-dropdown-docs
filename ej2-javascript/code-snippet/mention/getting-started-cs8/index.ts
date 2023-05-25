


import { Mention } from '@syncfusion/ej2-dropdowns';

// defined the array of complex data
let sportsData: { [key: string]: Object }[] = [
    { ID: 'game1', Game: 'Badminton' },
    { ID: 'game2', Game: 'Football' },
    { ID: 'game3', Game: 'Tennis' },
    { ID: 'game4', Game: 'Hockey' },
    { ID: 'game5', Game: 'Basketball' }
];

//initiates the control
let mentionObject: Mention = new Mention({
    //set the data to dataSource property
    dataSource: sportsData,
    // maps the appropriate column to fields property
    fields: { text: 'Game', value: 'ID' },
    //sort the resulted items
    sortOrder: 'Descending'
});

//render the control
mentionObject.appendTo('#mentionElement');



