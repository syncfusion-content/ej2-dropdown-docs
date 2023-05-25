var customers = new ej.dropdowns.DropDownList({
    //bind the data manager instance to dataSource property
    dataSource: new ej.data.DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
            adaptor: new ej.data.ODataV4Adaptor(),
            crossDomain: true
    }),
    //bind the Query instance to query property
    query: new ej.data.Query().select(['ContactName']).take(6),
    //map the appropriate columns to fields property
    fields: { value: 'ContactName'},
    //set the placeholder to DropDownList input
    placeholder: "Find a customer",
     //sort the resulted items
    aactionComplete: function (e) {
        // get total items count
        console.log("Total items count: " + e.result.length);
        let element = document.createElement('p');
        element.innerText = "Total items count: " + e.result.length;
        document.getElementById('event').append(element);
    }
});

//render the component
customers.appendTo('#ddlelement');

document.getElementById('btn').onclick = () => {
    // get items count using getItems method
    console.log("Total items count: " + customers.getItems().length);
    let element = document.createElement('p');
    element.innerText = "Total items count: " + customers.getItems().length;
    document.getElementById('event').append(element);
};

