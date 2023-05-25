---
layout: post
title: Custom search in ##Platform_Name## Auto complete control | Syncfusion
description: Learn here all about Custom search in Syncfusion ##Platform_Name## Auto complete control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Custom search 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Custom search in ##Platform_Name## Auto complete control

The AutoComplete has built-in support to highlight the searched characters on suggested list items when enabled the [`highlight`](../../api/auto-complete/#highlight) property.

In the below sample, to customize the matched character in suggestion list by `e-highlight` class.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/autocomplete/highlight-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/highlight-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/autocomplete/highlight-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/autocomplete/highlight-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/highlight-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/autocomplete/highlight-cs1" %}
{% endif %}