// bind remotedata to showcase actionFailureTemplate in offline.
var customerData = new ej.data.DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
    adaptor: new ej.data.ODataV4Adaptor,
    crossDomain: true
});

var msObj =  new ej.dropdowns.MultiSelect({
    dataSource: customerData,
    // set locale culture to MultiSelect
    locale: 'fr-BE',
    // map appropriate column
    fields: { text: 'ContactName', value: 'CustomerID' },
    // take 0 item to showcase noRecordsTemplate property.
    query: new ej.data.Query().select(['ContactName', 'CustomerID']).take(0),
    // set placeholder to MultiSelect input element
    placeholder: 'Sélectionnez un éléments'
});
msObj.appendTo('#select');

ej.base.L10n.load({
    'fr-BE': {
       'multi-select': {
             'noRecordsTemplate': "Aucun enregistrement trouvé",
             'actionFailureTemplate': "Modèle d'échec d'action"
         }
     }
});

