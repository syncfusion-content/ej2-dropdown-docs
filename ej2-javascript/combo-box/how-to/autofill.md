---
layout: post
title: Autofill in ##Platform_Name## Combo box control | Syncfusion
description: Learn here all about Autofill in Syncfusion ##Platform_Name## Combo box control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Autofill 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Autofill in ##Platform_Name## Combo box control

The ComboBox supports the `autofill` behaviour with the help of [autofill](../../api/combo-box/#autofill) property. Whenever you change the input value, the ComboBox will autocomplete your data by matching the typed character. Suppose, if no matches found then, comboBox doesn't suggest any item.

In the following sample, showcase that how to work autofill with ComboBox.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/combobox/getting-started-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/getting-started-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/combobox/getting-started-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/combobox/getting-started-cs3" %}
{% endif %}
