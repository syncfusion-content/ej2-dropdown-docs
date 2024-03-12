
//initiates the component
var multiObject = new ej.dropdowns.MultiSelect({
    //bind the dataSorce property
    dataSource: new ej.data.DataManager({
        url: 'https://ej2services.syncfusion.com/js/development/api/orders',
        adaptor: new ej.data.ODataV4Adaptor(),
        crossDomain: true
    }),
    //map the appropriate columns to fields property
    fields: { text: 'OrderID', value: 'OrderID' },
    //set the placeholder to DropDownList input
    placeholder:"Select an ID ",
    //set enableVirtualization property to true
    enableVirtualization: true,
    mode: 'Default',    
    //set the height of the popup element
    popupHeight: '200px'
});

//render the component
multiObject.appendTo('#multielement');

