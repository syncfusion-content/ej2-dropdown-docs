


import { AutoComplete} from '@syncfusion/ej2-dropdowns';
import { Query, Predicate} from '@syncfusion/ej2-data';

//define the array of complex data
let searchData: { [key: string]: Object; }[] = [
    { Name: 'Australia', Code: 'AU' },
    { Name: 'Bermuda', Code: 'BM' },
    { Name: 'Canada', Code: 'CA' },
    { Name: 'Cameroon', Code: 'CM' },
    { Name: 'Denmark', Code: 'DK' },
    { Name: 'France', Code: 'FR' },
    { Name: 'Finland', Code: 'FI' },
    { Name: 'Germany', Code: 'DE' },
    { Name: 'Greenland', Code: 'GL' },
    { Name: 'Hong Kong', Code: 'HK' },
    { Name: 'India', Code: 'IN' },
    { Name: 'Italy', Code: 'IT' },
    { Name: 'Japan', Code: 'JP' },
    { Name: 'Mexico', Code: 'MX' },
    { Name: 'Norway', Code: 'NO' },
    { Name: 'Poland', Code: 'PL' },
    { Name: 'Switzerland', Code: 'CH' },
    { Name: 'United Kingdom', Code: 'GB' },
    { Name: 'United States', Code: 'US' }];

//initiates the component
let atcObject: AutoComplete = new AutoComplete({
    // bind the country data to dataSource property
    dataSource: searchData,
    // maps the appropriate column to fields property
    fields: { value: "Code", text:"Name" },
    //set the placeholder to AutoComplete input
    placeholder: "Find a country",
    //set item template
    itemTemplate:"<span><span class='name'>${Name}</span>-<span class ='code'>${Code}</span></span>",
    filtering: function(e)
    {
        e.preventDefaultAction=true;
        let predicate = new Predicate('Name', 'contains', e.text);  
        predicate = predicate.or('Code', 'contains', e.text);
        let query = new Query();
        //frame the query based on search string with filter type.
        query = (e.text != "") ? query.where(predicate) : query;
        //pass the filter data source, filter query to updateData method.
        e.updateData(this.dataSource, query);
    }
});
atcObject.appendTo('#atcelement');



