---
layout: post
title: Icons support in ##Platform_Name## Combo box control | Syncfusion
description: Learn here all about Icons support in Syncfusion ##Platform_Name## Combo box control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Icons support 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Icons support in ##Platform_Name## Combo box control

You can render **icons** to the list items by mapping the [iconCss](../../api/combo-box/#fields) &nbsp;field. This `iconCss` field create a span in the list item with mapped class name to allow styling as per your need.

In the following sample, icon classes are mapped with `iconCss` field.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/combobox/icon-class-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/icon-class-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/icon-class-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/combobox/icon-class-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/icon-class-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/combobox/icon-class-cs1" %}
{% endif %}