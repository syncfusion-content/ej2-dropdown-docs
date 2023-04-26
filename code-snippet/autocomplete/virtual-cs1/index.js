 var data = new ej.data.DataManager({
    url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/',
    crossDomain: true
});
//initiates the component
let atcObject = new ej.dropdowns.AutoComplete({
    // bind the DataManager instance to dataSource property
        dataSource: data,
        // bind the Query instance to query property
        query: new ej.data.Query().from('Customers').select('ContactName').take(7),
        // map the appropriate columns to fields property
        fields: { text: 'ContactName', value: 'ContactName' },
         // set the placeholder to DropDownList input element
        placeholder: 'Select a customer',
        // sort the resulted items
        sortOrder: 'Ascending',
        // set the height of the popup element
        popupHeight: '200px',
        
     actionComplete: function (e) {
        let operator = new ej.data.Query().from('Customers').select('ContactName');
        let star = 7;
        let end = 12;
        let listElement = this.list;
        listElement.addEventListener('scroll', () => {
            if ((listElement.scrollTop + listElement.offsetHeight >= listElement.scrollHeight)) {
                let filterQuery = operator.clone();
                data.executeQuery(filterQuery.range(start, end)).then((event) => {
                    start = end;
                    end += 5;
                    atcObject.addItem(event.result);
                }).catch((e) => {
                });
            }
        })
    }
});
atcObject.appendTo('#atcelement');

