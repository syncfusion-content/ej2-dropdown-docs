


import { Mention } from '@syncfusion/ej2-dropdowns';

// defined the array of complex data
let emailData: { [key: string]: Object }[] = [
    { Name: 'Selma Rose', EmailId : 'selma@gmail.com' },
    { Name: 'Maria', EmailId : 'maria@gmail.com' },
    { Name: 'Russo kay', EmailId : 'russo@gmail.com' },
    { Name: 'Robert', EmailId : 'robert@gmail.com' },
    { Name: 'Garth', EmailId : 'garth@gmail.com' }
];

// initialize Mention control
let mentionObject: Mention = new Mention({
    //set the data to dataSource property
    dataSource: emailData,
    // maps the appropriate column to fields property
    fields: { text: 'Name', value: 'EmailId' },
    mentionChar: '#',
    showMentionChar: true
});

// render initialized Mention
mentionObject.appendTo('#mentionElement');



