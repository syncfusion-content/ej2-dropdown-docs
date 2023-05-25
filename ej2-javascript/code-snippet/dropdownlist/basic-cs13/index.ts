


import { DropDownList } from '@syncfusion/ej2-dropdowns';
// import L10n class for load function
import { L10n, setCulture} from '@syncfusion/ej2-base';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

// bind remotedata to showcase actionFailureTemplate in offline.
let customerData: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
});

let dropDownObj: DropDownList = new DropDownList({
    dataSource: customerData,
    // set locale culture to DropDownList
    locale: 'fr-BE',
    // map appropriate column
    fields: { text: 'ContactName', value: 'CustomerID' },
    // take 0 item to showcase noRecordsTemplate property.
    query: new Query().select(['ContactName', 'CustomerID']).take(0);
    // set placeholder to DropDownList input element
    placeholder: 'Sélectionnez un élément'
});
dropDownObj.appendTo('#ddlelement');

L10n.load({
    'fr-BE': {
       'dropdowns': {
             'noRecordsTemplate': "Aucun enregistrement trouvé",
             'actionFailureTemplate': "Modèle d'échec d'action"
         }
     }
});



