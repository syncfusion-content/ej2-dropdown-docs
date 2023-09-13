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

# Virtualization in DropDown List

The DropDownList component features a virtual scrolling feature, specifically designed to optimize UI performance when dealing with large datasets. By turning on the `enableVirtualization` option, the DropDownList intelligently controls data rendering by initially loading only a subset of items when the component is displayed. As you engage with the dropdown, more items are dynamically loaded while you scroll, ensuring a seamless and efficient user interaction.

This feature can be applied to both local and remote data scenarios, offering flexibility in its usage. For example, if the DropDownList is linked to a dataset with 150 items, only a handful of items are initially loaded when the dropdown is opened, depending on the popup's height. As you navigate through the list, more items are retrieved and loaded as needed, making it easy for you to navigate through the entire dataset.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/virtual-scroll/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/virtual-scroll/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/virtual-scroll" %} ----------

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/virtual-scroll/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/virtual-scroll/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/virtual-scroll" %} -----
{% endif %}

## Keyboard interaction

Users can navigate through the scrollable content using keyboard actions. This feature loads the next or next set of items based on the key inputs in the popup.

| Key | Action |
|-----|-----|
| `ArrowDown` | Loads the next virtual list item if the selection is present in last item of the current page. |
| `ArrowUp` | Loads the previous virtual list item if the selection is present in first item of the current page. |
| `PageDown` | Loads the next page and selects the last item in it. |
| `PageUp` | Loads the previous page and selects the first item in it. |
| `Home` | Loads the initial set of items and selects first item in it. |
| `End` | Loads the last set of items and selects last item in it. |

## Limitation of virtualization

* Virtualization is not supported in the grouping feature.
* Selected Value may or may not be present in the current view port.
* Once filtered, close the popup. Then open the popup with the initially loaded items.
