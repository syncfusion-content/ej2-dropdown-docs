


import { DropDownList } from '@syncfusion/ej2-dropdowns';

//define the array of complex data
let countriesData: { [key: string]: Object }[] = [
        { Country: { Name: 'Australia' }, Code: { Id: 'AU' }},
        { Country: { Name: 'Bermuda' },Code: { Id: 'BM' }},
        { Country:{ Name: 'Canada'}, Code:{ Id: 'CA'} },
        { Country:{Name: 'Cameroon'}, Code:{ Id: 'CM'} },
        { Country:{Name: 'Denmark'}, Code:{ Id: 'DK' }},
        { Country:{Name: 'France'}, Code: { Id:'FR'} }
    ];

//initiate the DropDownList
let dropDownListObject: DropDownList = new DropDownList({
    // bind the sports Data to datasource property
    dataSource: countriesData,
    // maps the appropriate column to fields property
    fields: { text: 'Country.Name', value: 'Code.Id' },
    //set the placeholder to DropDownList input
    placeholder:"Select a country"
});
//render the component
dropDownListObject.appendTo('#ddlelement');



