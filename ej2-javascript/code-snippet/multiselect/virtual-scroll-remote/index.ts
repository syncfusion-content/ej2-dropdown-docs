


import { DropDownList, VirtualScroll } from '@syncfusion/ej2-dropdowns';
import { DataManager, WebApiAdaptor  } from '@syncfusion/ej2-data';

DropDownList.Inject(VirtualScroll);

//initiates the component
let MultiSelectObject: DropDownList = new DropDownList({
    //bind the dataSorce property
    dataSource: new DataManager({
        url: 'https://ej2services.syncfusion.com/js/development/api/orders',
        adaptor: new WebApiAdaptor ,
        crossDomain: true
    }),
    //map the appropriate columns to fields property
    fields: { text: 'OrderID', value: 'OrderID' },
    //set the placeholder to DropDownList input
    placeholder:"Select an Item ",
    //set enableVirtualization property to true
    enableVirtualization: true,
    mode: 'Default',
    //set the height of the popup element
    popupHeight: '200px'
});

//render the component
MultiSelectObject.appendTo('#multielement');


