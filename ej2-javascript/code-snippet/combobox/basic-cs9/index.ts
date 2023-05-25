


import { ComboBox } from '@syncfusion/ej2-dropdowns';
//define the data with category
let vegetableData: { [key: string]: Object }[] = [
        { Vegetable: 'Chickpea', Category: 'Beans', Id: '1' },
        { Vegetable: 'Green bean', Category: 'Beans', Id: '2' },
        { Vegetable: 'Spinach', Category: 'Leafy and Salad', Id: '3' },
        { Vegetable: 'Horse gram', Category: 'Beans', Id: '4' },
        { Vegetable: 'Cabbage', Category: 'Leafy and Salad', Id: '5' },
        { Vegetable: 'Wheat grass', Category: 'Leafy and Salad', Id: '6' },
        { Vegetable: 'Yarrow', Category: 'Leafy and Salad', Id: '7' }
    ];
//initiate the ComboBox
let vegetables: ComboBox = new ComboBox({
    //set the grouped data to dataSource property
    dataSource: vegetableData,
    // map the groupBy field with Category column
    fields: { groupBy: 'Category', text: 'Vegetable', value: 'Id' },
    // set the placeholder to the ComboBox input
    placeholder: "Select a vegetable",
    // Set the popup list height
    popupHeight: '200px'
});
//render the ComboBox component
vegetables.appendTo('#comboelement');



