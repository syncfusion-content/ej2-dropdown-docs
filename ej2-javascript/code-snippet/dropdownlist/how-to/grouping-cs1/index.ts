


import { DropDownList } from '@syncfusion/ej2-dropdowns';
//define the data with category
let vegetableData: { [key: string]: Object }[] = [
        { Vegetable: 'Cabbage', Category: 'Leafy and Salad', Id: 'item1' },
        { Vegetable: 'Spinach', Category: 'Leafy and Salad', Id: 'item2' },
        { Vegetable: 'Wheat grass', Category: 'Leafy and Salad', Id: 'item3' },
        { Vegetable: 'Yarrow', Category: 'Leafy and Salad', Id: 'item4' },
        { Vegetable: 'Pumpkins', Category: 'Leafy and Salad', Id: 'item5' },
        { Vegetable: 'Chickpea', Category: 'Beans', Id: 'item6' },
        { Vegetable: 'Green bean', Category: 'Beans', Id: 'item7' },
        { Vegetable: 'Horse gram', Category: 'Beans', Id: 'item8' },
        { Vegetable: 'Garlic', Category: 'Bulb and Stem', Id: 'item9' },
        { Vegetable: 'Nopal', Category: 'Bulb and Stem', Id: 'item10' },
        { Vegetable: 'Onion', Category: 'Bulb and Stem', Id: 'item11' }
    ];
//initiate the DropDownList
let vegetables: DropDownList = new DropDownList({
    //set the grouped data to dataSource property
    dataSource: vegetableData,
    // map the groupBy field with Category column
    fields: { groupBy: 'Category', text: 'Vegetable', value: 'Id' },
    // set the placeholder to the DropDownList input
    placeholder: "Select a vegetable",
    // Set the popup list height
    popupHeight: '200px'
});
//render the DropDownList component
vegetables.appendTo('#ddlelement');



