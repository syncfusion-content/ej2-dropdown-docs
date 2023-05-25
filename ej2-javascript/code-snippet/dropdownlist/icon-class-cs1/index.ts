


import { DropDownList } from '@syncfusion/ej2-dropdowns';
let sortFormatData: { [key: string]: Object }[] = [
    { Class: 'asc-sort', Type: 'Sort A to Z', Id: '1' },
    { Class: 'dsc-sort', Type: 'Sort Z to A ', Id: '2' },
    { Class: 'filter', Type: 'Filter', Id: '3' },
    { Class: 'clear', Type: 'Clear', Id: '4' }
];

let sortFormat: DropDownList = new DropDownList({
    dataSource: sortFormatData,
    // map the icon column to iconCSS field.
    fields: { text: 'Type', iconCss: 'Class', value: 'Id' },
    placeholder: 'Select a format'
});
sortFormat.appendTo('#ddlelement');



