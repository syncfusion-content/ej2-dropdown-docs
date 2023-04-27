


import { MultiSelect, CheckBoxSelection } from '@syncfusion/ej2-dropdowns';

MultiSelect.Inject(CheckBoxSelection);

//define the array of complex data
let sportsData: { [key: string]: Object }[] = [
    { vegetable: 'Cabbage', category: 'Leafy and Salad', id: 'item1' },
        { vegetable: 'Spinach', category: 'Leafy and Salad', id: 'item2' },
        { vegetable: 'Wheat grass', category: 'Leafy and Salad', id: 'item3' },
        { vegetable: 'Yarrow', category: 'Leafy and Salad', id: 'item4' },
        { vegetable: 'Pumpkins', category: 'Leafy and Salad', id: 'item5' },
        { vegetable: 'Chickpea', category: 'Beans', id: 'item6' },
        { vegetable: 'Green bean', category: 'Beans', id: 'item7' },
        { vegetable: 'Horse gram', category: 'Beans', id: 'item8' },
        { vegetable: 'Garlic', category: 'Bulb and Stem', id: 'item9' },
        { vegetable: 'Nopal', category: 'Bulb and Stem', id: 'item10' },
        { vegetable: 'Onion', category: 'Bulb and Stem', id: 'item11' }
];

//initiate the MultiSelect
let msObject: MultiSelect = new MultiSelect({
    // bind the sports Data to datasource property
    dataSource: sportsData,
    // maps the appropriate column to fields property
    fields: { groupBy: 'category', text: 'vegetable', value: 'id' },
    //set the placeholder to MultiSelect input
    placeholder:"Select vegetables",
    // set the type of mode for checkbox to visualized the checkbox added in li element.
    mode: 'CheckBox',
    // set true for enable the selectAll support.
    showSelectAll: true,
    // set value for allowFiltering as true
    allowFiltering: true,
    // set placeholder to filterbar
    filterBarPlaceholder: "Search Vegetables",
    // set true for enableGroupCheckBox property
    enableGroupCheckBox: true
});
//render the component
msObject.appendTo('#select');



