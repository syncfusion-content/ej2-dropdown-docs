


import { Mention } from '@syncfusion/ej2-dropdowns';
// import L10n class for load function
import { L10n, setCulture} from '@syncfusion/ej2-base';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

// bind remotedata to showcase actionFailureTemplate in offline.
let customerData: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
});

let mentionObject: Mention = new Mention({
    dataSource: customerData,
    // set locale culture to Mention
    locale: 'fr-BE',
    // map appropriate column
    fields: { text: 'ContactName', value: 'CustomerID' },
    // take 0 item to showcase noRecordsTemplate property.
    query: new Query().select(['ContactName', 'CustomerID']).take(0)
});
mentionObject.appendTo('#mentionElement');

L10n.load({
    'fr-BE': {
       'mention': {
            'noRecordsTemplate': "Aucun enregistrement trouvé"
        }
     }
});



