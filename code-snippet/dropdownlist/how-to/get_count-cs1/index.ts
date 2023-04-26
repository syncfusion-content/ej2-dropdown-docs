


import { DropDownList } from '@syncfusion/ej2-dropdowns';
//import DataManager related classes
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

// initiates the component
let customers: DropDownList = new DropDownList({
    // bind the DataManager instance to dataSource property
    dataSource: new DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
            adaptor: new ODataV4Adaptor,
            crossDomain: true
        }),
    // bind the Query instance to query property
    query: new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6),
    // map the appropriate columns to fields property
    fields: { text: 'ContactName', value: 'CustomerID' },
    // set the placeholder to DropDownList input
    placeholder:"Select a customer",
    // sort the resulted items
    actionComplete: function (e: any) {
        // get total items count
        console.log("Total items count: " + e.result.length);
        let element: HTMLElement = document.createElement('p');
        element.innerText = "Total items count: " + e.result.length;
        document.getElementById('event').append(element);
    }
});

//render the component
customers.appendTo('#ddlelement');

document.getElementById('btn').onclick = () => {
    // get items count using getItems method
    console.log("Total items count: " + customers.getItems().length);
    let element: HTMLElement = document.createElement('p');
    element.innerText = "Total items count: " + customers.getItems().length;
    document.getElementById('event').append(element);
}



