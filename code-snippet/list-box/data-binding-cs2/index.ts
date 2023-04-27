


        import { ListBox } from '@syncfusion/ej2-dropdowns';

        let sportsData: { [key: string]: Object }[] = [
            { id: 'game1', sports: 'Badminton' },
            { id: 'game2', sports: 'Cricket'},
            { id: 'game3', sports: 'Football'},
            { id: 'game4', sports: 'Golf'},
            { id: 'game5', sports: 'Tennis'},
            { id: 'game6', sports: 'Basket Ball'},
            { id: 'game7', sports: 'Base Ball'},
            { id: 'game8', sports: 'Hockey'},
            { id: 'game9', sports: 'Volley Ball'}];

        // initialize ListBox component
        let listObj: ListBox = new ListBox({
            //set the dataSource property
            dataSource: sportsData,
            // maps the appropriate column to fields property
            fields: { text: 'sports', value: 'id' }
        });

        listObj.appendTo('#listbox');



