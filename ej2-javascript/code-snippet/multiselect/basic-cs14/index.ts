


import { MultiSelect } from '@syncfusion/ej2-dropdowns';
//define the data with category
let vegetableData: { [key: string]: Object }[] = [
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
let vegetables: MultiSelect = new MultiSelect({
    //set the grouped data to dataSource property
    dataSource: vegetableData,
    // map the groupBy field with category column
    fields: { groupBy: 'category', text: 'vegetable', value: 'id' },
    // set the placeholder to the MultiSelect input
    placeholder: "Select vegetables",
    // Set the popup list height
    popupHeight: '200px'
});
//render the MultiSelect component
vegetables.appendTo('#select');



