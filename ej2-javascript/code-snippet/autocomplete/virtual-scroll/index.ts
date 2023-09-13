


import { AutoComplete, VirtualScroll } from '@syncfusion/ej2-dropdowns';

AutoComplete.Inject(VirtualScroll);

let records: { [key: string]: Object }[] = [];
for (let i: number = 1; i <= 150; i++) {
    let item = {
        id: 'id' + i,
        text: "Item " + i,
    };
    records.push(item);
}

//initiates the component
let atcObject: AutoComplete = new AutoComplete({
    //bind the dataSorce property
    dataSource: records,
    //map the appropriate columns to fields property
    fields: { value: 'text', text: 'text' },
    //set the placeholder to DropDownList input
    placeholder:"Select an Item ",
    //set enableVirtualization property to true
    enableVirtualization: true,
    //set allowFiltering property to true
    allowFiltering: true,
    //set the height of the popup element
    popupHeight: '200px'
});

//render the component
atcObject.appendTo('#atcelement');




