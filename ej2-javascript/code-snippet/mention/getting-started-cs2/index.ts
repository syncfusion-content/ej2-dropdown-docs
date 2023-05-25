


import { Mention } from '@syncfusion/ej2-dropdowns';

// define the array of complex data
let countriesData: { [key: string]: Object }[] = [
    { Country : 'Australia', Code : 'AU'},
    { Country : 'Bermuda', Code : 'BM' },
    { Country : 'Canada', Code : 'CA' },
    { Country : 'Cameroon', Code : 'CM' },
    { Country : 'Denmark', Code : 'DK' }
];

// initialize Mention control
let mentionObject: Mention = new Mention({
    //set the data to dataSource property
    dataSource: countriesData,
    // maps the appropriate column to fields property
    fields: { text: 'Country', value: 'Code' },
    //set height to popup list
    popupHeight: '200px',
    //set width to popup list
    popupWidth: '250px'
});

// render initialized Mention
mentionObject.appendTo('#mentionElement');



