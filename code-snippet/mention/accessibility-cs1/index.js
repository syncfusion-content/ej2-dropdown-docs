var employeeData = [
    { Name: 'Andrew Fuller', Id: '1' },
    { Name: 'Janet Leverling', Id: '2' },
    { Name: 'Laura Callahan', Id: '3' },
    { Name: 'Margaret Peacock', Id: '4' },
    { Name: 'Anne Dodsworth', Id: '5' }
];
// initialize Mention component
var mentionObj = new ej.dropdowns.Mention({
    dataSource: employeeData,
    fields: { text: 'Name', value: 'Id' }
});
mentionObj.appendTo('#mentionElement');