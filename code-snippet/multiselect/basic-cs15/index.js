   var vegetableData = [
    { id: 'vegetable1', vegetable: 'Cabbage', category: 'Leafy and Salad' },
    { id: 'vegetable2', vegetable: 'Spinach', category: 'Leafy and Salad' },
    { id: 'vegetable3', vegetable: 'Wheat grass', category: 'Leafy and Salad' },
    { id: 'vegetable4', vegetable: 'Yarrow', category: 'Leafy and Salad' },
    { id: 'vegetable5', vegetable: 'Pumpkin', category: 'Leafy and Salad' },
    { id: 'vegetable6', vegetable: 'Chickpea', category: 'Beans' },
    { id: 'vegetable7', vegetable: 'Green bean', category: 'Beans' },
    { id: 'vegetable8', vegetable: 'Horse gram', category: 'Beans' },
    { id: 'vegetable9', vegetable: 'Garlic', category: 'Bulb and Stem' },
    { id: 'vegetable10', vegetable: 'Nopal', category: 'Bulb and Stem' },
    { id: 'vegetable11', vegetable: 'Onion', category: 'Bulb and Stem' }
    ];
   // initialize MultiSelect component
    var listObj = new ej.dropdowns.MultiSelect({
        dataSource: vegetableData,
        // maps the appropriate column to fields property
        fields: { text: 'vegetable', value: 'id', groupBy: 'category' },
        // set placeholder to MultiSelect input element
        placeholder: "Select vegetables",
        // set placeholder to filterbar
        filterBarPlaceholder: "Search vegetables",
        // set the type of mode for checkbox to visualized the checkbox added in li element.
        mode: 'CheckBox',
        // set true for enable the selectAll support.
        showSelectAll: true,
       // set true for enableGroupCheckBox property
        enableGroupCheckBox: true});
    listObj.appendTo('#select');

