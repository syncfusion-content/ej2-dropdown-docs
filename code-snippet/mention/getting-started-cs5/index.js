var employeesData = [
    { Name: 'Andrew Fuller', Id: '1' },
    { Name: 'Anne Dodsworth', Id: '2' },
    { Name: 'Janet Leverling', Id: '3' },
    { Name: 'Laura Callahan', Id: '4' },
    { Name: 'Margaret Peacock', Id: '5' }
];
// initialize Mention component
var mentionObj = new ej.dropdowns.Mention({
  dataSource: employeesData,
  fields: { text: 'Name', value: 'Id' },
  allowSpaces: true,
});
mentionObj.appendTo('#mentionElement');
 

