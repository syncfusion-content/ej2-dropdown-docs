---
layout: post
title: Show tooltip in ##Platform_Name## List box control | Syncfusion
description: Learn here all about Show tooltip in Syncfusion ##Platform_Name## List box control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Show tooltip 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Show tooltip in ##Platform_Name## List box control

Tooltip can be shown for each list box items by customizing it in [`beforeItemRender`](../api/list-box/#beforeitemrender) event.

In the following example, the tooltip can be shown by setting `title` attribute for each `li` element in `beforeItemRender` event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/list-box/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/getting-started-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/list-box/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/list-box/getting-started-cs2" %}
{% endif %}