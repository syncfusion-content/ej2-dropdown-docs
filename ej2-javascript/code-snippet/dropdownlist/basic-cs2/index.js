let countriesData = [
		{ Country: { Name: 'Australia' }, Code: { Id: 'AU' }},
        { Country: { Name: 'Bermuda' },Code: { Id: 'BM' }},
        { Country:{ Name: 'Canada'}, Code:{ Id: 'CA'} },
        { Country:{Name: 'Cameroon'}, Code:{ Id: 'CM'} },
        { Country:{Name: 'Denmark'}, Code:{ Id: 'DK' }},
        { Country:{Name: 'France'}, Code: { Id:'FR'} }
];
   // initialize DropDownList component
    var listObj = new ej.dropdowns.DropDownList({
      //set the data to dataSource property
        dataSource: countriesData, 
        // maps the appropriate column to fields property
        fields: { value: 'Country.Name' },
        // set placeholder to DropDownList input element
        placeholder: "Find a country"});
    listObj.appendTo('#ddlelement');

