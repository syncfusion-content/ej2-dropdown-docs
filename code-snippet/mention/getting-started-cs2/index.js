var countriesData = [
    { Country : 'Australia', Code : 'AU'},
    { Country : 'Bermuda', Code : 'BM' },
    { Country : 'Canada', Code : 'CA' },
    { Country : 'Cameroon', Code : 'CM' },
    { Country : 'Denmark', Code : 'DK' }
];
// initialize Mention component
var mentionObj = new ej.dropdowns.Mention({
  dataSource: countriesData,
  fields: { text: 'Country', value: 'Code' },
  popupHeight: '200px',
  popupWidth: '250px'
});
mentionObj.appendTo('#mentionElement');
 

