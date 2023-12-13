---
layout: post
title: Virtualization in ##Platform_Name## Drop down list control | Syncfusion
description: Learn here all about Virtualization in Syncfusion ##Platform_Name## Drop down list control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Virtualization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in ComboBox Component

ComboBox virtualization is a technique used to efficiently render extensive lists of items while minimizing the impact on performance. This method is particularly advantageous when dealing with large datasets because it ensures that only a fixed number of DOM (Document Object Model) elements are created. When scrolling through the list, existing DOM elements are reused to display relevant data instead of generating new elements for each item. This recycling process is managed internally.
 
During virtual scrolling, the data retrieved from the data source depends on the popup height and the calculation of the list item height. Enabling the [enableVirtualization](../api/combo-box/#enableVirtualization) option in a ComboBox activates this virtualization technique.
 
When fetching data from the data source, the [actionBegin](../api/combo-box/#actionbegin) event is triggered before data retrieval begins. Then, the [actionComplete](../api/combo-box/#actioncomplete) event is triggered once the data is successfully fetched.

Furthermore, IncrementalSearch is supported with virtualization in the Combobox component. When a key is typed, the focus is moved to the respective element in the open popup state. In the closed popup state, the focus shifts to the corresponding item based on the typed key.

Please note that when the enableVirtualization property is enabled, the 'take' property of the Query parameter may not function as expected, as it is internally managed within our source code.


## Binding local data

The Combobox can generate its list items through an array of complex data. For this, the appropriate columns should be mapped to the [fields](../api/drop-down-list/#fields) property.

In the following example, `id` column and `text` column from complex data have been mapped to the `value` field and `text` field, respectively.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/combobox/virtual-scroll/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/virtual-scroll/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/virtual-scroll" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/combobox/virtual-scroll/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/virtual-scroll/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/combobox/virtual-scroll" %}
{% endif %}


## Binding Remote data

The Combobox supports retrieval of data from remote data services with the help of `DataManager` component. When using remote data, it initially fetches all the data from the server, triggering the `actionBegin` and `actionComplete` events, and then stores the data locally. During virtual scrolling, additional data is retrieved from the locally stored data, triggering the `actionBegin` and `actionComplete` events at that time as well.

The following sample displays the OrderId from the `Orders` Data Service.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/combobox/virtual-scroll-remote/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/virtual-scroll-remote/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/virtual-scroll-remote" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/combobox/virtual-scroll-remote/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/virtual-scroll-remote/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/combobox/virtual-scroll-remote" %}
{% endif %}

## Grouping with Virtualization

The Combobox enables the organization of nested elements into grouped clusters according to various categories. The classification for each item in the list can be assigned using the 'groupBy' field in the data table. also, the DropDownList component supports grouping with virtualization.

The following sample shows the example for Grouping with Virtualization

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/combobox/virtual-scroll-group/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/virtual-scroll-group/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/virtual-scroll-group" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/combobox/virtual-scroll-group/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/virtual-scroll-group/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/combobox/virtual-scroll-group" %}
{% endif %}
