   var sportsData = [
    { id: 'game1', sports: 'Badminton' },
    { id: 'game2', sports: 'Football' },
    { id: 'game3', sports: 'Tennis' }
];
   // initialize MultiSelect component
    var listObj = new ej.dropdowns.MultiSelect({
        dataSource: sportsData,
        // maps the appropriate column to fields property
        fields: { text: 'sports', value: 'id' },
        // set placeholder to MultiSelect input element
        placeholder: "Select games"});
    listObj.appendTo('#select');

