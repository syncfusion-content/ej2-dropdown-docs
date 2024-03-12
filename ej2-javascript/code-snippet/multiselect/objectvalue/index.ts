import { MultiSelect } from '@syncfusion/ej2-dropdowns';


let records: { [key: string]: Object }[] = [];
for (let i: number = 1; i <= 150; i++) {
    let item = {
        id: 'id' + i,
        text: "Item " + i,
    };
    records.push(item);
}

//initiates the component
let MultiSelectObject: MultiSelect = new MultiSelect({
    //bind the dataSorce property
    dataSource: records,
    //map the appropriate columns to fields property
    fields: { value: 'id', text: 'text' },
    //set the placeholder to MultiSelect input
    placeholder:"Select an Item ",
    allowObjectBinding: true,
    value: [{ id: 'id5', text: 'Item 5' }, { id: 'id7', text: 'Item 7' }, { id: 'id12', text: 'Item 12'}],
    mode: 'Default',
    //set the height of the popup element
    popupHeight: '200px'
});

//render the component
MultiSelectObject.appendTo('#multielement');



