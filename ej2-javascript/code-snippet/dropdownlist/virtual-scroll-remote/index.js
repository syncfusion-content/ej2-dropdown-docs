
//initiates the component
var ddlObject = new ej.dropdowns.DropDownList({
    //bind the dataSorce property
    dataSource: new ej.data.DataManager({
        url: 'https://services.syncfusion.com/js/production/api/Orders',
        adaptor: new ej.data.ODataV4Adaptor(),
        crossDomain: true
    }),
    //map the appropriate columns to fields property
    fields: { text: 'OrderID', value: 'OrderID' },
    //set the placeholder to DropDownList input
    placeholder:"Select an ID ",
    //set enableVirtualization property to true
    enableVirtualization: true,
    //set allowFiltering property to true
    allowFiltering: true,
    //set the height of the popup element
    popupHeight: '200px'
});

//render the component
ddlObject.appendTo('#ddlelement');

