


import { AutoComplete } from '@syncfusion/ej2-dropdowns';
// import L10n class for load function
import { L10n, setCulture } from '@syncfusion/ej2-base';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

let atcObj: AutoComplete = new AutoComplete({
    // bind remote data to showcase actionFailureTemplate in offline.
    dataSource: new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
        adaptor: new ODataV4Adaptor,
        crossDomain: true
    }),
    //bind the Query instance to query property
    query: new Query().select(['ContactName', 'CustomerID']).take(0),
    //map the appropriate columns to fields property
    fields: { value: 'ContactName' },
    // set locale culture to AutoComplete
    locale: 'fr-BE',
    // set placeholder to AutoComplete input element
    placeholder: 'Trouver un client'
});
atcObj.appendTo('#atcelement');

L10n.load({
    'fr-BE': {
        'dropdowns': {
            'noRecordsTemplate': "Aucun enregistrement trouvé",
            'actionFailureTemplate': "Modèle d'échec d'action"
        }
    }
});



