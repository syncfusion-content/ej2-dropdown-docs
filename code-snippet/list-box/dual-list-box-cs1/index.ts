


import { ListBox } from '@syncfusion/ej2-dropdowns';

let groupA: { [key: string]: Object }[] = [
    { "Name": "Australia", "Code": "AU" },
    { "Name": "Bermuda", "Code": "BM" },
    { "Name": "Canada", "Code": "CA" },
    { "Name": "Cameroon", "Code": "CM" },
    { "Name": "Denmark", "Code": "DK" },
    { "Name": "France", "Code": "FR" },
    { "Name": "Finland", "Code": "FI" },
    { "Name": "Germany", "Code": "DE" },
    { "Name": "Hong Kong", "Code": "HK" }
];

let groupB: { [key: string]: Object }[] = [
    { "Name": "India", "Code": "IN" },
    { "Name": "Italy", "Code": "IT" },
    { "Name": "Japan", "Code": "JP" },
    { "Name": "Mexico", "Code": "MX" },
    { "Name": "Norway", "Code": "NO" },
    { "Name": "Poland", "Code": "PL" },
    { "Name": "Switzerland", "Code": "CH" },
    { "Name": "United Kingdom", "Code": "GB" },
    { "Name": "United States", "Code": "US" }
];

let listObj: ListBox = new ListBox({

    // Set the groupA data to the data source.
    dataSource: groupA,

    // Map the appropriate columns to fields property.
    fields: { text: 'Name'},

    // Set the scope of the ListBox.
    scope: '#listbox2',

    // Set the tool settings with set of items.
    toolbarSettings: { items: ['moveUp', 'moveDown', 'moveTo', 'moveFrom', 'moveAllTo', 'moveAllFrom']},

    height: '330px'

});

listObj.appendTo('#listbox1');

listObj = new ListBox({

    // Set the groupB data to the data source.
    dataSource: groupB,

    // Map the appropriate columns to fields property.
    fields: { text: 'Name' },

    height: '330px'

});

listObj.appendTo('#listbox2');



