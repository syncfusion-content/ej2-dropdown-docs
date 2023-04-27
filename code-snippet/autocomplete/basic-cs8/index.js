  // create local data
    var data = [
        'Aeróbics',
        'Aeróbics en Agua',
        'Aerografía',
        'Aeromodelaje',
        'Águilas',
        'Ajedrez',
        'Ala Delta',
        'Álbumes de Música',
        'Alusivos',
        'Análisis de Escritura a Mano'];
    // initialize AutoComplete component
    var atcObj = new ej.dropdowns.AutoComplete({
        //set the local data to dataSource property
        dataSource: data,
        // set the placeholder to AutoComplete input element
        placeholder: 'e.g: aero',
        // enabled the ignoreAccent property for ignore the diacritics
        ignoreAccent: true
    });
    atcObj.appendTo('#atcelement');

