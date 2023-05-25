let countriesData = [
        { Country: { Name: 'Australia' }, Code: { Id: 'AU' }},
        { Country: { Name: 'Bermuda' },Code: { Id: 'BM' }},
        { Country:{ Name: 'Canada'}, Code:{ Id: 'CA'} },
        { Country:{Name: 'Cameroon'}, Code:{ Id: 'CM'} },
        { Country:{Name: 'Denmark'}, Code:{ Id: 'DK' }},
        { Country:{Name: 'France'}, Code: { Id:'FR'} },
        { Country:{Name: 'Finland'}, Code:  { Id:'FI'} },
        { Country:{Name: 'Germany'}, Code: { Id:'DE'} },
        { Country:{Name: 'Greenland'}, Code:{ Id: 'GL' }},
        { Country:{Name: 'Hong Kong'}, Code: { Id:'HK'} },
        { Country:{Name: 'India'}, Code:{ Id: 'IN'} },
        { Country:{ Name: 'Italy'}, Code: { Id:'IT'} },
        { Country:{ Name: 'Japan'}, Code: { Id: 'JP'} },
        { Country:{Name: 'Mexico'}, Code: { Id: 'MX' }},
        { Country:{Name: 'Norway'}, Code: { Id: 'NO'} },
        { Country:{Name: 'Poland'}, Code: { Id: 'PL' }},
        { Country:{Name: 'Switzerland'}, Code: { Id: 'CH'} },
        { Country:{Name: 'United Kingdom'},Code: { Id: 'GB'} },
        { Country:{Name: 'United States'}, Code: { Id: 'US'} }
];
   // initialize AutoComplete component
    var listObj = new ej.dropdowns.AutoComplete({
      //set the data to dataSource property
        dataSource: countriesData, 
        // maps the appropriate column to fields property
        fields: { value: 'Country.Name' },
        // set placeholder to AutoComplete input element
        placeholder: "Find a country"});
    listObj.appendTo('#atcelement');

