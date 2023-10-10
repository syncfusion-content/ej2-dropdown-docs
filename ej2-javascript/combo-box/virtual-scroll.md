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

ComboBox virtualization is a technique used to efficiently render long lists of items in a user interface while minimizing the impact on performance. It's particularly useful when dealing with large datasets because it ensures that only a fixed number of DOM (Document Object Model) elements are created and displayed in the ComboBox component. We initiate a request to fetch data from the data source and then update it in the popup list. During virtual scrolling, data is fetched from the data source using "take" (based on popup height) and "skip" actions. The existing DOM elements are reused to display the relevant data, rather than creating new elements for each item, which we handle internally. Enabling the [`enableVirtualization`](../api/combo-box/#enableVirtualization) option in a dropdown list activates this virtualization technique, significantly enhancing the list's performance and user experience, especially when handling large datasets.

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

## Limitation of virtualization

* Virtualization is not supported in the grouping feature.
* Virtualization does not work when the popup is closed, and a keyboard action is performed.
