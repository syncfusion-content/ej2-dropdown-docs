var records = [];
for (var i = 1; i <= 150; i++) {
    var dropdownsItem = {};
    dropdownsItem.id = 'id' + i;
    dropdownsItem.text = "Item ".concat(i);
    var randomAutoGroup = Math.floor(Math.random() * 4) + 1;
    switch (randomAutoGroup) {
        case 1:
            dropdownsItem.group = 'Group D';
            break;
        case 2:
            dropdownsItem.group = 'Group C';
            break;
        case 3:
            dropdownsItem.group = 'Group B';
            break;
        case 4:
            dropdownsItem.group = 'Group A';
            break;
        default:
            break;
    }
    records.push(dropdownsItem);
}
//initiates the component
var ddlObject = new ej.dropdowns.DropDownList({
    //bind the dataSorce property
    dataSource: records,
    //map the appropriate columns to fields property
    fields: { groupBy: 'group', text: 'text', value: 'id' },
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
ddlObject.appendTo('#ddlelement');

