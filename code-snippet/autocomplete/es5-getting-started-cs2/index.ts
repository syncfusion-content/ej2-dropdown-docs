

<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
            <title>Essential JS 2</title>
             <!-- Essential JS 2 autoComplete's dependent material theme -->
            <link href="//cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="//cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="//cdn.syncfusion.com/ej2/ej2-dropdowns/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 all script -->
            <!-- <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script> -->

            <!-- Essential JS 2 autoComplete's dependent scripts -->
            <script src="//cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <input> element  -->
             <input type="text" id='atcelement' />
            <script>
                let sportsData = [
                { Id: 'Game1', Game: 'Badminton' },
                { Id: 'Game2', Game: 'Basketball' },
                { Id: 'Game3', Game: 'Cricket' },
                { Id: 'Game4', Game: 'Football' },
                { Id: 'Game5', Game: 'Golf' },
                { Id: 'Game6', Game: 'Hockey' },
                { Id: 'Game7', Game: 'Rugby' },
                { Id: 'Game8', Game: 'Snooker' }
                ];
                // initialize AutoComplete component
                var listObj = new ej.dropdowns.AutoComplete({
                    //set the data to dataSource property
                    dataSource: sportsData,
                    // By default, its enabled. For your better understanding, showcase this property.
                    allowCustom: true,
                    // maps the appropriate column to fields property
                    fields: { value: 'Game' },
                    // set placeholder to AutoComplete input element
                    placeholder: "Find a game"});
                listObj.appendTo('#atcelement');
            </script>
       </body>
  </html>



