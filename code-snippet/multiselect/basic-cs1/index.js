    var sportsData = [
    { id: 'game1', sports: 'Badminton' },
    { id: 'game2', sports: 'Football' },
    { id: 'game3', sports: 'Tennis' },
    { id: 'game4', sports: 'Golf' },
    { id: 'game5', sports: 'Cricket' },
    { id: 'game6', sports: 'Handball' },
    { id: 'game7', sports: 'Karate' },
    { id: 'game8', sports: 'Fencing' },
    { id: 'game9', sports: 'Boxing' }
    ];
   // initialize MultiSelect component
    var listObj = new ej.dropdowns.MultiSelect({
        dataSource: sportsData,
        // maps the appropriate column to fields property
        fields: { text: 'sports', value: 'id' },
        // set placeholder to MultiSelect input element
        placeholder: "Select games",
        // set the type of mode for checkbox to visualized the checkbox added in li element.
        mode: 'CheckBox'});
    listObj.appendTo('#select');

