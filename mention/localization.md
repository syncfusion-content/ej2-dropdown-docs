---
layout: post
title: Localization in ##Platform_Name## Mention control | Syncfusion
description: Learn here all about Localization in Syncfusion ##Platform_Name## Mention control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Localization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Localization in ##Platform_Name## Mention control

The Localization library allows you to localize static text content of the [noRecordsTemplate](../api/mention/#norecordstemplate) &nbsp;properties according to the culture currently assigned to the Mention.

| Locale key | en-US (default)  |
|------|------|
| noRecordsTemplate |  No records found |

## Loading translations

To load the translation object to your application, use the load function of the **L10n** class.

In the following sample, French culture is set to the mention control and no data is loaded. Hence, the [noRecordsTemplate](../api/mention/#norecordstemplate) property displays its text in French culture initially.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/mention/getting-started-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/mention/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/getting-started-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/mention/getting-started-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/mention/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/mention/getting-started-cs7" %}
{% endif %}

## See also

* [Accessibility](./accessibility)
* [How to bind the data to the mention](./data-binding)