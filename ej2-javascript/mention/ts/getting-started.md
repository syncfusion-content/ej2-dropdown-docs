---
layout: post
title: Getting started with ##Platform_Name## Mention control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Mention control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Mention control

This section explains how to create a `Mention`, and configure its available functionalities in TypeScript using Essential JS 2 quickstart seed repository.

## Dependencies

The following list of dependencies are required to use the Mention control in your application.

```js

|-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons

```

## Setup your development environment

To get started with the Mention control, clone [Essential JS 2 quickstart](https://github.com/syncfusion/ej2-quickstart), and install the npm packages using the following commands.

```

git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install

```

> The project is preconfigured with common settings (`src/styles/styles.css`, `system.config.js`) to start all the Essential JS 2 controls.

* Refer to the [`Mention control dependencies`](./getting-started#dependencies) in `system.config.js` configuration file.

`[src/system.config.js]`

```js

System.config({
    paths: {
        'npm:': './node_modules/',
        'syncfusion:': 'npm:@syncfusion/'
    },
    map: {
        app: 'app',
        //Syncfusion packages mapping
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-data":"syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-inputs":"syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-lists":"syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-navigations":"syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
        "@syncfusion/ej2-dropdowns":"syncfusion:ej2-dropdowns/dist/ej2-dropdowns.umd.min.js",
        "@syncfusion/ej2-notifications":"syncfusion:ej2-notifications/dist/ej2-notifications.umd.min.js",
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app.ts').catch(console.error.bind(console)).then(function () {
    document.getElementById('loader').style.display = "none";
    document.getElementById('container').style.visibility = "visible";
});

```

## Adding the Style sheet to the application

To render Mention control, need to import dropdowns and its dependent controls styles as given below in `styles.css`.

```

@import "../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/bootstrap5.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/bootstrap5.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/bootstrap5.css";

```

> To know about individual control CSS, please refer to [Individual control theme files](../appearance/theme/#referring-individual-control-theme) section.

## Adding the Mention control to the application

Add the HTML div tag with the `id` attribute as `mentionElement` to your `index.html` file.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">


<head>
    <title>Essential JS 2 Mention control</title>
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
    <div id='container' style="width:200px;">
        <!--element which is the Mention target to list the suggestions-->
        <label style="font-size: 15px; font-weight: 600;">Comments</label>
        <div id="mentionElement" style="min-height: 100px; border: 1px solid #D7D7D7; border-radius: 4px; padding: 8px; font-size: 14px; width: 600px;"></div>
    </div>
</body>
</html>
```

Import the Mention control in your `app.ts` file and initialize it with the `#mentionElement`.

`[src/app/app.ts]`

```ts

import { Mention } from '@syncfusion/ej2-dropdowns';

// initialize Mention control
let mentionObject: Mention = new Mention({});

// render initialized Mention
mentionObject.appendTo('#mentionElement');

```

## Binding the data source

After initialization, populate the Mention with data using the [dataSource](../api/mention/#datasource) property. Here, an array of string values is passed to the Mention control.

```ts
import { Mention } from '@syncfusion/ej2-dropdowns';

// define the array of data
let userData: string[] = ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph'];

// initialize Mention control
let mentionObject: Mention = new Mention({
    //set the data to dataSource property
    dataSource: userData
});

// render initialized Mention
mentionObject.appendTo('#mentionElement');
```

## Run the application

Run the application in the browser using the following command:

```

npm run start

```

The following example, shows a basic Mention control.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/mention/getting-started-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/mention/getting-started-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/mention/getting-started-cs9" %}

## Display mention character

By using the [showMentionChar](../api/mention/#showmentionchar) property, the text content can be displayed along with the mention character. You can customize the mention character by using the [mentionChar](../api/mention/#mentionchar) property in the Mention control.

> By default, the [mentionChar](../api/mention/#mentionchar) is `@` and the [showMentionChar](../api/mention/#showmentionchar) property is disabled.

The following example, displays the text content along with the mention character configured as `#`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/mention/getting-started-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/mention/getting-started-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/mention/getting-started-cs10" %}
