


import { Mention } from '@syncfusion/ej2-dropdowns';

// defined the array of complex data
let employeeData: { [key: string]: Object }[] = [
    { Name: 'Andrew Fuller', ID: '1' },
    { Name: 'Janet Leverling', ID: '2' },
    { Name: 'Laura Callahan', ID: '3' },
    { Name: 'Margaret Peacock', ID: '4' },
    { Name: 'Anne Dodsworth', ID: '5' }
];

// initialize Mention control
let mentionObject: Mention = new Mention({
    //set the data to dataSource property
    dataSource: employeeData,
    // maps the appropriate column to fields property
    fields: { text: 'Name', value: 'ID' }
});

// render initialized Mention
mentionObject.appendTo('#mentionElement');



