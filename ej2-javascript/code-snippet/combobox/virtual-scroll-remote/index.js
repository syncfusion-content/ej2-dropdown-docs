
//initiates the component
var comboBoxObject = new ej.dropdowns.ComboBox({
    //bind the dataSorce property
    dataSource:  new ej.data.DataManager({
        url: 'https://ej2services.syncfusion.com/js/development/api/orders',
        adaptor: new ej.data.WebApiAdaptor(),
        crossDomain: true
    }),
    //map the appropriate columns to fields property
    fields: { text: 'OrderID', value: 'OrderID' },
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
comboBoxObject.appendTo('#comboelement');