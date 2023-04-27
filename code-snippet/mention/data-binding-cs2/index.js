var countriesData = [
    { Country: { Name: 'Australia' }, Code: { Id: 'AU' }},
    { Country: { Name: 'Bermuda' }, Code: { Id: 'BM' }},
    { Country: { Name: 'Canada'}, Code:{ Id: 'CA'} },
    { Country: { Name: 'Cameroon'}, Code:{ Id: 'CM'} },
    { Country: { Name: 'Denmark'}, Code:{ Id: 'DK' }},
    { Country: { Name: 'France'}, Code: { Id:'FR'} }
];
// initialize Mention component
var mentionObj = new ej.dropdowns.Mention({
    dataSource: countriesData,
    fields: { text: 'Country.Name', value: 'Code.Id' }
});
mentionObj.appendTo('#mentionElement');
 

