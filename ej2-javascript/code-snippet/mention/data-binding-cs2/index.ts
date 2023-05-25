


import { Mention } from '@syncfusion/ej2-dropdowns';

//define the array of complex data
let CountryGroup: { [key: string]: Object }[] = [
    { Country: { Name: 'Australia' }, Code: { ID: 'AU' }},
    { Country: { Name: 'Bermuda' }, Code: { ID: 'BM' }},
    { Country: { Name: 'Canada'}, Code:{ ID: 'CA'} },
    { Country: { Name: 'Cameroon'}, Code:{ ID: 'CM'} },
    { Country: { Name: 'Denmark'}, Code:{ ID: 'DK' }},
    { Country: { Name: 'France'}, Code: { ID:'FR'} }
];

//initiate the Mention
let mentionObject: Mention = new Mention({
    // bind the sports Data to datasource property
    dataSource: CountryGroup,
    // maps the appropriate column to fields property
    fields: { text: 'Country.Name', value: 'Code.ID' }
});
//render the control
mentionObject.appendTo('#mentionElement');



