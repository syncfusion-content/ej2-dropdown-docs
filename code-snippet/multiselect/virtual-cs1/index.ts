


import { MultiSelect } from '@syncfusion/ej2-dropdowns';
import { Query, DataManager, ODataAdaptor } from '@syncfusion/ej2-data';



 let data: DataManager = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/',
    crossDomain: true
});
    // initialize MultiSelect component
    let mulObj: MultiSelect = new MultiSelect({
        // bind the DataManager instance to dataSource property
        dataSource: data,
        // bind the Query instance to query property
        query: new Query().from('Customers').select('ContactName').take(7),
        // map the appropriate columns to fields property
        fields: { text: 'ContactName', value: 'ContactName' },
         // set the placeholder to MultiSelect input element
        placeholder: 'Select a customer',
        // sort the resulted items
        sortOrder: 'Ascending',
        // set the height of the popup element
        popupHeight: '200px',
        actionComplete: function (e: any) {
          let operator: Query =  new Query().from('Customers').select('ContactName');
          let start: number = 7;
          let end: number = 12;
          let listElement: HTMLElement = this.list;
          listElement.addEventListener('scroll', () => {
            if ((listElement.scrollTop + listElement.offsetHeight >= listElement.scrollHeight)) {
                let filterQuery = operator.clone();
                data.executeQuery(filterQuery.range(start, end)).then((event: any) => {
                    start = end;
                    end += 5;
                    mulObj.addItem(event.result as { [key: string]: Object }[]);
                }).catch((e: Object) => {
                });
            }
        });
    }
    });
    mulObj.appendTo('#atcelement');



