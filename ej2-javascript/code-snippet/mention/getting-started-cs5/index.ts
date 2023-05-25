


import { Mention } from '@syncfusion/ej2-dropdowns';

// defined the array of complex data
let employeeData: { [key: string]: Object }[] = [
    { Name: 'Andrew Fuller', ID: '1' },
    { Name: 'Anne Dodsworth', ID: '2' },
    { Name: 'Janet Leverling', ID: '3' },
    { Name: 'Laura Callahan', ID: '4' },
    { Name: 'Margaret Peacock', ID: '5' }
];

let filter: Mention = new Mention({
    dataSource: employeeData,
    // maps the appropriate column to fields property
    fields: { text: 'Name', value: 'ID' },
    allowSpaces: true,  
});
filter.appendTo('#mentionElement');



