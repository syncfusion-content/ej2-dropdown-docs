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

# Virtualization in AutoComplete Component

AutoComplete virtualization is a technique used to efficiently render long lists of items in a user interface while minimizing the impact on performance. It's particularly useful when dealing with large datasets, as it ensures that only a fixed number of DOM (Document Object Model) elements are created and displayed in the AutoComplete Component. As the user scrolls through the list, the existing DOM elements are reused to display the relevant data, rather than creating new elements for each item. Enabling the [`enableVirtualization`](../api/auto-complete/#enableVirtualization) option in a dropdown list activates this virtualization technique, significantly enhancing the list's performance and user experience, especially when handling large datasets.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/autocomplete/virtual-scroll/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/virtual-scroll/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/autocomplete/virtual-scroll" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/autocomplete/virtual-scroll/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/virtual-scroll/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/autocomplete/virtual-scroll" %}
{% endif %}

## Keyboard interaction

Users can navigate through the scrollable content using keyboard actions. This feature loads the next or next set of items based on the key inputs in the popup.

| Key | Action |
|-----|-----|
| `ArrowDown` | Loads the next virtual list item if the focus is present in last item of the current page. Additionally, when holding the key, further virtual list items are loaded in the popup.  |
| `ArrowUp` | Loads the previous virtual list item if the focus is present in first item of the current page. Additionally, when holding the key, further virtual list items are loaded in the popup. |
| `PageDown` | Loads the next page and focus the last item in it. Additionally, when holding the key, further virtual list items are loaded in the popup. |
| `PageUp` | Loads the previous page and focus the first item in it. Additionally, when holding the key, further virtual list items are loaded in the popup.|

## Limitation of virtualization

* Virtualization is not supported in the grouping feature.
* Selected Value may or may not be present in the current view port.
* Once filtered, close the popup. Then open the popup with the initially loaded items.
* Virtualization does not work when the popup is closed, and a keyboard action is performed.
