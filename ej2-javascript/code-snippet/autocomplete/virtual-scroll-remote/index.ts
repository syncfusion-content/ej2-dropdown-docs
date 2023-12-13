


import { AutoComplete, VirtualScroll } from '@syncfusion/ej2-dropdowns';
import { DataManager, WebApiAdaptor  } from '@syncfusion/ej2-data';

AutoComplete.Inject(VirtualScroll);

//initiates the component
let atcObject: AutoComplete = new AutoComplete({
    //bind the dataSorce property
    dataSource: new DataManager({
        url: 'https://ej2services.syncfusion.com/js/development/api/orders',
        adaptor: new WebApiAdaptor ,
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
atcObject.appendTo('#atcelement');




