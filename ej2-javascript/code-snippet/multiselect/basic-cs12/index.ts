

import { MultiSelect, FilteringEventArgs } from '@syncfusion/ej2-dropdowns';

let sportsData: { [key: string]: Object }[] = [
    { id: 'game1', sports: 'Badminton' },
    { id: 'game2', sports: 'Football' },
    { id: 'game3', sports: 'Tennis' },
    { id: 'game4', sports: 'Golf' },
    { id: 'game5', sports: 'Hockey' }
];
let filter: MultiSelect = new MultiSelect({
    dataSource: sportsData,
    // map the appropriate column
    fields: { text: 'sports', value: 'id' },
    // set placeholder to MultiSelect input element
    placeholder:"Select names",
    // set true to allowFiltering for enable filtering supports
    allowFiltering: true,
    //set the height of the popup element
    popupHeight: "250px",
    //sort the resulted items
    sortOrder: 'Ascending',
    //bind the filtering event handler
    filtering: (e: FilteringEventArgs) => {
        // load overall data when search key empty.
        if(e.text == '') e.updateData(sportsData);
        else{
          let query: Query = new Query().select(['sports', 'id']);
           //enable the case sensitive filtering by passing false to 4th parameter.
          query = (e.text !== '') ? query.where('sports', 'startswith', e.text, false) : query;
          e.updateData(sportsData, query);
        }
    }
});
filter.appendTo('#select');


