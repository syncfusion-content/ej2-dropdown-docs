


import { ComboBox } from '@syncfusion/ej2-dropdowns';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';



 let data: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
        adaptor: new ODataV4Adaptor,
        crossDomain: true
});
    // initialize ComboBox component
    let comboObj: ComboBox = new ComboBox({
        // bind the DataManager instance to dataSource property
        dataSource: data,
        // bind the Query instance to query property
        query: new Query().select(['ContactName', 'CustomerID']),
        // map the appropriate columns to fields property
        fields: { text: 'ContactName', value: 'ContactName' },
         // set the placeholder to ComboBox input element
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
                    comboObj.addItem(event.result as { [key: string]: Object }[]);
                }).catch((e: Object) => {
                });
            }
        });
    }
    });
    comboObj.appendTo('#atcelement');



