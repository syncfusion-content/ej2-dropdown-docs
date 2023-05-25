//bind the data manager instance to dataSource property
var customerData = new ej.data.DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
    adaptor: new ej.data.ODataV4Adaptor(),
    crossDomain: true
});

var ddlObj =  new ej.dropdowns.DropDownList({
    dataSource: customerData,
    // set locale culture to DropDownList
    locale: 'fr-BE',
    // map appropriate column
    fields: { text: 'ContactName', value: 'CustomerID' },
    // take 0 item to showcase noRecordsTemplate property.
    query: new ej.data.Query().select(['ContactName', 'CustomerID']).take(0),
    // set placeholder to DropDownList input element
    placeholder: 'Sélectionnez un éléments'
});
ddlObj.appendTo('#ddlelement');

ej.base.L10n.load({
    'fr-BE': {
       'dropdowns': {
             'noRecordsTemplate': "Aucun enregistrement trouvé",
             'actionFailureTemplate': "Modèle d'échec d'action"
         }
     }
});

