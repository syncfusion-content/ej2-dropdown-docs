---
layout: post
title: Templates in ##Platform_Name## Drop down list control | Syncfusion
description: Learn here all about Templates in Syncfusion ##Platform_Name## Drop down list control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Templates 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Templates in ##Platform_Name## Drop down list control

The DropDownList has been provided with several options to customize each list item, group title, selected value, header, and footer elements. It uses the Essential JS 2 [Template engine](../documentation/common/template-engine) to compile and render the elements properly.

## Item template

The content of each list item within the DropDownList can be customized with the help of [itemTemplate](../api/drop-down-list/#itemtemplate)
property.

In the following sample, each list item is split into two columns to display relevant data's.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/item-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/item-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/item-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/item-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/item-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/item-template-cs1" %}
{% endif %}

## Value template

The currently selected value that is displayed by default on the DropDownList input element can be customized using the [valueTemplate](../api/drop-down-list/#valuetemplate) property.

In the following sample, the selected value is displayed as a combined text of both `FirstName` and `City` in the DropDownList input, which is separated by a hyphen.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/item-template-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/item-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/item-template-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/item-template-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/item-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/item-template-cs2" %}
{% endif %}

## Group template

The group header title under which appropriate sub-items are categorized can also be customize with the help of [groupTemplate](../api/drop-down-list/#grouptemplate) property. This template is common for both inline and floating group header template.

In the following sample, employees are grouped according to their city.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/item-template-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/item-template-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/item-template-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/item-template-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/item-template-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/item-template-cs3" %}
{% endif %}

## Header template

The header element is shown statically at the top of the popup list items within the DropDownList, and any custom element can be placed as a header element using the [headerTemplate](../api/drop-down-list/#headertemplate) property.

In the following sample, the list items and its headers are designed and displayed as two columns
similar to multiple columns of the grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/header-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/header-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/header-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/header-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/header-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/header-template-cs1" %}
{% endif %}

## Footer template

The DropDownList has options to show a footer element at the bottom of the list items in the popup list. Here, you can place any custom element as a footer element using the [footerTemplate](../api/drop-down-list/#footertemplate) property.

In the following sample, footer element displays the total number of list items present in the DropDownList.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/footer-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/footer-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/footer-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/footer-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/footer-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/footer-template-cs1" %}
{% endif %}

## No records template

The DropDownList is provided with support to custom design the popup list content when no data is found and no matches found on search with the help of [noRecordsTemplate](../api/drop-down-list/#norecordstemplate) property.

In the following sample, popup list content displays the notification of no data available.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/norecords-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/norecords-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/norecords-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/norecords-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/norecords-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/norecords-template-cs1" %}
{% endif %}

## Action failure template

There is also an option to custom design the popup list content when the data fetch request fails at the remote server. This can be achieved using the [actionFailureTemplate](../api/drop-down-list/#actionfailuretemplate) property.

In the following sample, when the data fetch request fails, the DropDownList displays the notification.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/norecords-template-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/norecords-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/norecords-template-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/norecords-template-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/norecords-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/norecords-template-cs2" %}
{% endif %}

## See Also

* [How to acheive filtering](./filtering)
* [How to group the data using header](./grouping)
* [How to show the list items with icon](./how-to/icons-support/)
* [How to render tooltip for the options](./how-to/tooltip/)