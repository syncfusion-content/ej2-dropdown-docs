---
layout: post
title: Es5 getting started with ##Platform_Name## Mention control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Mention control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Mention control

This section explains how to create a `Mention` control, and configure its available functionalities by using the ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Dependencies

The following list of dependencies are required to use the Mention control in your application.

```javascript
|-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
```

## Component Initialization

The Essential JS 2 JavaScript controls can be initialized by using either of the following ways.

* Using local script and style references in a HTML page.
* Using CDN link for script and style reference.

### Using local script and style references in a HTML page

**Step 1:** Create an app folder `quickstart` for Essential JS 2 JavaScript controls.

**Step 2:** You can get the global scripts and styles from the [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/styles/bootstrap5.css`

**Example:**

> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/20.3.47/Essential JS 2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js`
>
> Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/20.3.47/Essential JS 2/ej2-dropdowns/styles/bootstrap5.css`

**Step 3:** Create a folder `~/quickstart/resources` and copy/paste the global scripts and styles from the above installed location to `quickstart/resources/package` location.

**Step 4:** Create a HTML page (index.html) in `~/quickstart/index.html` location and add the Essentials JS 2 script and style references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 bootstrap5 theme -->
            <link href="resources/base/styles/bootstrap5.css" rel="stylesheet" type="text/css"/>
            <link href="resources/inputs/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/lists/styles/bootstrap5.css" rel="stylesheet" type="text/css"/>
            <link href="resources/popups/styles/bootstrap5.css" rel="stylesheet" type="text/css"/>
            <link href="resources/buttons/styles/bootstrap5.css" rel="stylesheet" type="text/css"/>
            <link href="resources/dropdowns/styles/bootstrap5.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Mention's dependent scripts -->
            <script src="resources/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="resources/ej2-data.min.js" type="text/javascript"></script>
            <script src="resources/ej2-lists.min.js" type="text/javascript"></script>
            <script src="resources/ej2-popups.min.js" type="text/javascript"></script>
            <script src="resources/ej2-buttons.min.js" type="text/javascript"></script>
            <!-- Essential JS 2 Mention's global script -->
            <script src="resources/ej2-dropdowns.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**Step 5:** Now, add the `div` element and initiate the `Essential JS 2 Mention` control in the `index.html` by using following code

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 bootstrap5 theme -->
            <link href="resources/base/styles/bootstrap5.css" rel="stylesheet" type="text/css"/>
            <link href="resources/inputs/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/lists/styles/bootstrap5.css" rel="stylesheet" type="text/css"/>
            <link href="resources/popups/styles/bootstrap5.css" rel="stylesheet" type="text/css"/>
            <link href="resources/buttons/styles/bootstrap5.css" rel="stylesheet" type="text/css"/>
            <link href="resources/dropdowns/styles/bootstrap5.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Mention's dependent scripts -->
            <script src="resources/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="resources/ej2-data.min.js" type="text/javascript"></script>
            <script src="resources/ej2-lists.min.js" type="text/javascript"></script>
            <script src="resources/ej2-popups.min.js" type="text/javascript"></script>
            <script src="resources/ej2-buttons.min.js" type="text/javascript"></script>
            <!-- Essential JS 2 Mention's global script -->
            <script src="resources/ej2-dropdowns.min.js" type="text/javascript"></script>
       </head>
      <body>
          <!-- Add the HTML <div> element  -->
          <div id="mentionElement" style="min-height: 100px; border: 1px solid #D7D7D7; border-radius: 4px; padding: 8px; font-size: 14px; width: 600px;"></div>
          <script>
               // initialize Mention control
               var mentionObj = new ej.dropdowns.Mention();
               // Render initialized Mention.
               mentionObj.appendTo('#mentionElement');
          </script>
       </body>
  </html>
```

**Step 6:** Now, run the `index.html` in web browser, it will render the **Essential JS 2 Mention** control.

### Using CDN link for script and style reference

**Step 1:** Create an app folder `quickstart` for the Essential JS 2 JavaScript controls.

**Step 2:** The Essential JS 2 control's global scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Script: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/bootstrap5.css`

**Example:**
> Script: [`http://cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js`](http://cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js)
>
> Styles: [`http://cdn.syncfusion.com/ej2/ej2-dropdowns/styles/bootstrap5.css`](http://cdn.syncfusion.com/ej2/ej2-dropdowns/styles/bootstrap5.css)

**Step 3:** Create a HTML page (index.html) in `quickstart` location and add the CDN link references. Now, add the `div` element and initiate the `Essential JS 2 Mention` control in the `index.html` by using following code.

## Adding the Mention control to the application

Add the HTML div tag with the `id` attribute as `mentionElement` to your `index.html` file.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
             <!-- Essential JS 2 Mention's dependent bootstrap5 theme -->
            <link href="//cdn.syncfusion.com/ej2/ej2-base/styles/bootstrap5.css" rel="stylesheet" type="text/css"/>
            <link href="//cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="//cdn.syncfusion.com/ej2/ej2-dropdowns/styles/bootstrap5.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 all script -->
            <!-- <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script> -->

            <!-- Essential JS 2 Mention's dependent scripts -->
            <script src="//cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
       </head>
       <body>
          <!-- Add the HTML <div> element  -->
          <div id="mentionElement" style="min-height: 100px; border: 1px solid #D7D7D7; border-radius: 4px; padding: 8px; font-size: 14px; width: 600px;"></div>
          <script>
               // initialize Mention control
               var mentionObj = new ej.dropdowns.Mention();
               // Render initialized Mention.
               mentionObj.appendTo('#mentionElement');
          </script>
       </body>
  </html>

```

## Binding data source

After initialization, populate the Mention with data using the [dataSource](https://ej2.syncfusion.com/javascript/documentation/api/mention/#datasource) property. Here, an array of string values is passed to the Mention control.

```

<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
             <!-- Essential JS 2 Mention's dependent bootstrap5 theme -->
            <link href="//cdn.syncfusion.com/ej2/ej2-base/styles/bootstrap5.css" rel="stylesheet" type="text/css"/>
            <link href="//cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="//cdn.syncfusion.com/ej2/ej2-dropdowns/styles/bootstrap5.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 all script -->
            <!-- <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script> -->

            <!-- Essential JS 2 Mention's dependent scripts -->
            <script src="//cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
       </head>
       <body>
          <!-- Add the HTML <div> element  -->
          <div id="mentionElement" style="min-height: 100px; border: 1px solid #D7D7D7; border-radius: 4px; padding: 8px; font-size: 14px; width: 600px;"></div>
          <script>
               var userData = ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph'];
               // initialize Mention control
               var mentionObj = new ej.dropdowns.Mention({
                    dataSource: userData
               });
               // Render initialized Mention.
               mentionObj.appendTo('#mentionElement');
          </script>
       </body>
  </html>

```

**Step 4:** Now, run the `index.html` in web browser, it will render the `Essential JS 2 Mention` control.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/mention/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/es5-getting-started-cs1" %}

## Display mention character

By using the [showMentionChar](https://ej2.syncfusion.com/javascript/documentation/api/mention/#showmentionchar) property, the text content can be displayed along with the mention character. You can customize the mention character by using the [mentionChar](https://ej2.syncfusion.com/javascript/documentation/api/mention/#mentionchar) property in the Mention control.

> By default, the [mentionChar](https://ej2.syncfusion.com/javascript/documentation/api/mention/#mentionchar) is `@` and the [showMentionChar](https://ej2.syncfusion.com/javascript/documentation/api/mention/#showmentionchar) property is disabled.

The following example, displays the text content along with the mention character configured as `#`.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/mention/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/es5-getting-started-cs2" %}