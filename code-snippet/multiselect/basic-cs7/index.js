   var countriesData = [
		{ Country: { Name: 'Australia' }, Code: { Id: 'AU' }},
        { Country: { Name: 'Bermuda' },Code: { Id: 'BM' }},
        { Country:{ Name: 'Canada'}, Code:{ Id: 'CA'} },
        { Country:{Name: 'Cameroon'}, Code:{ Id: 'CM'} },
        { Country:{Name: 'Denmark'}, Code:{ Id: 'DK' }},
        { Country:{Name: 'France'}, Code: { Id:'FR'} }
];
   // initialize MultiSelect component
    var listObj = new ej.dropdowns.MultiSelect({
        dataSource: countriesData,
        // maps the appropriate column to fields property
        fields: { text: 'Country.Name', value: 'Code.Id' },
        // set placeholder to MultiSelect input element
        placeholder: "Select a country"});
    listObj.appendTo('#select');

