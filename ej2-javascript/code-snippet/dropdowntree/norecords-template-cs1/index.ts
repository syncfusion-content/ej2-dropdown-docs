


import { DropDownTree } from '@syncfusion/ej2-dropdowns';
let data: { [key: string]: Object }[] = [ ];
let ddtreeObj: DropDownTree = new DropDownTree({
    fields: { dataSource: data, text: 'name', value: 'id', parentValue: 'pid', hasChildren: 'hasChild' },
    noRecordsTemplate:"<span class='norecord'> NO DATA AVAILABLE</span>",
    width: '100%',
    placeholder: 'Select an employee',
    popupHeight: '250px'
});
ddtreeObj.appendTo('#template');



