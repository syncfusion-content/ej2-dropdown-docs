var records = [];
for (var i = 1; i <= 150; i++) {
    var item = {
        id: 'id' + i,
        text: "Item " + i,
    };
    records.push(item);
}


//initiates the component
var acObject = new ej.dropdowns.AutoComplete({
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
acObject.appendTo('#atcelement');

