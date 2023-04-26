

import { ComboBox } from '@syncfusion/ej2-dropdowns';

// defined the array of data
let sportsData: { [key: string]: Object }[] = [
    { Id: 'game1', Game: 'Badminton' },
    { Id: 'game2', Game: 'Football' },
    { Id: 'game3', Game: 'Tennis' }
];

// initialize ComboBox component
let comboBoxObject: ComboBox = new ComboBox({
    //set the data to dataSource property
    dataSource: sportsData,
    // By default, its enabled. For your better understanding, showcase this property here.
    allowCustom: true,
    // maps the appropriate column to fields property
    fields: { text: 'Game', value: 'Id' },
    // set placeholder to ComboBox input element
    placeholder: "Select a game"
});

// render initialized ComboBox
comboBoxObject.appendTo('#comboelement');


