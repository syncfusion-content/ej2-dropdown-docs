


import { DropDownTree } from '@syncfusion/ej2-dropdowns';
let data: { [key: string]: Object }[] = [
    { "id": 1, "name": "Steven Buchanan",  "job": "General Manager", "hasChild": true, "expanded": true },
    { "id": 2, "pid": 1, "name": "Laura Callahan",  "job": "Product Manager", "hasChild": true },
    { "id": 3, "pid": 2, "name": "Andrew Fuller",  "job": "Team Lead", "hasChild": true },
    { "id": 4, "pid": 3, "name": "Anne Dodsworth",  "job": "Developer" },
    { "id": 10, "pid": 3, "name": "Lilly",  "job": "Developer", "status":"online" },
    { "id": 5, "pid": 1, "name": "Nancy Davolio",  "job": "Product Manager", "hasChild": true},
    { "id": 6, "pid": 5, "name": "Michael Suyama",  "job": "Team Lead", "hasChild": true },
    { "id": 7, "pid": 6, "name": "Robert King",  "job": "Developer " },
    { "id": 11, "pid": 6, "name": "Mary", "job": "Developer " },
    { "id": 9, "pid": 1, "name": "Janet Leverling",  "job": "HR" }
];
let ddtreeObj: DropDownTree = new DropDownTree({  
    fields: { dataSource: data, text: 'name', value: 'id', parentValue: 'pid', hasChildren: 'hasChild' },
    footerTemplate:"<span class='foot'> Total number of employees: "+ data.length +"</span>",
    width: '100%',
    cssClass: 'custom',
    placeholder: 'Select an employee',
    popupHeight: '250px'
});
ddtreeObj.appendTo('#template');



