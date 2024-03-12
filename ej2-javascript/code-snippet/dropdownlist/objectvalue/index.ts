import { DropDownList } from '@syncfusion/ej2-dropdowns';

let records: { [key: string]: Object }[] = [];
for (let i: number = 1; i <= 150; i++) {
    let item = {
        id: 'id' + i,
        text: "Item " + i,
    };
    records.push(item);
}

//initiates the component
let dropObject: DropDownList = new DropDownList({
    //bind the dataSorce property
    dataSource: records,
    //map the appropriate columns to fields property
    fields: { value: 'id', text: 'text' },
    allowObjectBinding: true,
    //set the placeholder to MultiSelect input
    placeholder:"Select an Item ",
    value: { id: 'id5', text: 'Item 5' },
    //set the height of the popup element
    popupHeight: '200px'
});

//render the component
dropObject.appendTo('#ddlelement');



