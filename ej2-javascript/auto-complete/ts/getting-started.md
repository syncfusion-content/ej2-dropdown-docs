---
layout: post
title: Getting started with ##Platform_Name## Auto complete control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Auto complete control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Auto complete control

This section explains how to create a simple **AutoComplete** component and configure its available functionalities in TypeScript, using Essential JS 2 [quickstart](https://github.com/syncfusion/ej2-quickstart) seed repository.

## Dependencies

The following list of dependencies are required to use the AutoComplete component in your application.

```javascript
|-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
```

## Set up of the development environment

To get started with the AutoComplete component, you have to clone the Essential JS 2
[`quickstart`](https://github.com/syncfusion/ej2-quickstart) project and install the npm packages by using the following commands.

```

git clone https://github.com/syncfusion/ej2-quickstart quickstart

cd quickstart

npm install

```

>The [project](https://github.com/syncfusion/ej2-quickstart) is preconfigured with common settings (`src/styles/styles.css`, `system.config.js`) to start all the Essential JS 2 components.

## Initialize the AutoComplete

The AutoComplete can be initialized through input tags.

Add the HTML input element which needs to be initialized as AutoComplete in `index.html`.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 AutoComplete component</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />

    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <div id='container' style="margin:0 auto; width:300px;">
        <!--element which is going to render the AutoComplete-->
        <input type="text" tabindex="1" id='atcelement' />
    </div>

</body>

</html>
```

Now import the AutoComplete component to your `app.ts` and initialize it to the element `#atcelement` as
shown below.

`[src/app/app.ts]`

```ts

import { AutoComplete } from '@syncfusion/ej2-dropdowns';

// initialize AutoComplete component
let atcObject: AutoComplete = new AutoComplete();

// render initialized AutoComplete
atcObject.appendTo('#atcelement');

```

## Binding data source

After initialization, populate the AutoComplete with data using the [`dataSource`](https://helpej2.syncfusion.com/documentation/api/auto-complete/#datasource) property. Here, an array of string values is passed to the AutoComplete component.

```ts

import { AutoComplete } from '@syncfusion/ej2-dropdowns';

// define the array of data
let sportsData: string[] = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];

// initialize AutoComplete component
let atcObject: AutoComplete = new AutoComplete({
    //set the data to dataSource property
    dataSource: sportsData
});

// render initialized AutoComplete
atcObject.appendTo('#atcelement');

```

## Run the application

After completing the configuration required to render a basic AutoComplete, run the following command to display the output in your default browser.

```

 npm run start

```

The following example illustrates the output in your browser.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/autocomplete/getting-started-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/autocomplete/getting-started-cs4" %}

## Custom values

The AutoComplete allows the user to give input as custom value which is not required to present in predefined set of values. By default, this support is enabled by [`allowCustom`](https://helpej2.syncfusion.com/documentation/api/auto-complete/#allowcustom) property. The custom value will be sent to post back handler when a form
is about to be submitted.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/autocomplete/getting-started-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/autocomplete/getting-started-cs5" %}

## Configure the suggestion list

By default, suggestion list width automatically adjusts according to the AutoComplete input element's width, and the height of the suggestion list has '300px'.

The height and width of the popup list can also be customized using the [`popupHeight`](https://helpej2.syncfusion.com/documentation/api/auto-complete/#popupheight) and [`popupWidth`](https://helpej2.syncfusion.com/documentation/api/auto-complete/#popupwidthh) property respectively.

In the following sample, suggestion list's width and height are configured.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/autocomplete/getting-started-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/autocomplete/getting-started-cs6" %}

## See Also

* [How to bind the data](https://helpej2.syncfusion.com/documentation/auto-complete/data-binding)