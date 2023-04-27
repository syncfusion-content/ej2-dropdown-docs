


import { AutoComplete } from '@syncfusion/ej2-dropdowns';
let sortFormatData: { [key: string]: Object }[] = [
    { Class: 'asc-sort', Type: 'Sort A to Z', Id: '1' },
    { Class: 'dsc-sort', Type: 'Sort Z to A ', Id: '2' },
    { Class: 'filter', Type: 'Filter', Id: '3' },
    { Class: 'clear', Type: 'Clear', Id: '4' }
];

let sortFormat: AutoComplete = new AutoComplete({
    //set the data to dataSource property
    dataSource: sortFormatData,
    // map the icon column to iconCSS field.
    fields: { value: 'Type', iconCss: 'Class' },
    // set placeholder to AutoComplete input element
    placeholder: 'Find a format'
});
sortFormat.appendTo('#atcelement');



