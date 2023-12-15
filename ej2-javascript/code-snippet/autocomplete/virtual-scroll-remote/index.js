
//initiates the component
var acObject = new ej.dropdowns.AutoComplete({
    //bind the dataSorce property
    dataSource:  new ej.data.DataManager({
        url: 'https://ej2services.syncfusion.com/js/development/api/orders',
        adaptor: new ej.data.WebApiAdaptor(),
        crossDomain: true
    }),
    //map the appropriate columns to fields property
    fields: { value: 'OrderID' },
    //set the placeholder to DropDownList input
    placeholder:"Select an ID ",
    //set enableVirtualization property to true
    enableVirtualization: true,
    //set the height of the popup element
    popupHeight: '200px'
});

//render the component
acObject.appendTo('#atcelement');

