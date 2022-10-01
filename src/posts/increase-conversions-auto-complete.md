---
title: "Increase Local Conversions With This Wordpress Plugin"
slug: increase-local-conversions-with-this-wordoress-plugin
excerpt: I added this Wordpress plugin to my client's website and increased conversions by 30%.
date: 2022-09-21
description: I used this one plugin for my local business clients and increased conversions! Powerful and super easy to set up. 
---

Wordpress is a powerful CMS platform. I used it for years for my clients. Along the way, I've bookmarked some plugins that increased results for me and my clients. They're simple, powerful, and perfect for your toolkit. Here's one of them:

## Autocompleting Addresses on Forms

[Autocomplete Google Address](https://wordpress.org/plugins/autocomplete-google-address/) is a plugin that auto-completes your user's address input. My clients are mostly local businesses that require a property address to begin their sales process.

As a web developer, our responsibiliy is to increase leads and conversions. To do so, the user experience must be easy enough to navigate and interact. 

We want to reduce the friction between the user and the conversion process. Adding an autocomplete feature allows our users to fill out  forms with less effort. 

In addition, it allows the submitted data to be more uniform and cleaner.

```
3454 sunset cir Florida ❌
450 south main st seatle wa ❌
450 South Main St Seattle, WA 98104 ✅
```
<br>  

Without this plugin, users would have to type out their full information. Not to mention if the state and postal code are not included, we'll need to follow up to clarify or clean the data, costing more time.

Adding autocomplete benefits both parties, website and visitors, by reducing friction on both ends.

## Set up Google Maps API and get an API key

Head over to the [Google Maps API console](https://console.cloud.google.com/project/_/google/maps-apis/credentials)

Sign in and create and name your project. If you don't have an organization, you can just leave it blank.

![Create Project in Google API Console](/images/create-google-console-project.png "Create Project in Google API Console")

Select your project you've just created.

![Select Project in Google API Console](/images/select-project.png "Select Project in Google API Console")

You should see the API key generated for you immediately. 

Disable "Enable all Google Maps APIs..." and go to the console.

![Retreive Google API Key](/images/google-api-key.png "Retreive Google API Key")

Under APIs, click 'Places API' and enable. You should see it under "Enabled APIs".

![Enabling Places API](/images/finding-places-api.png "Enabling Places API")

![Enabled Places API](/images/places-api-enabled.png "Enabled Places API")

If you lost your API key, it's located under Credentials -> API keys -> "Show Key"

![Where to find the API key if you lost it](/images/show-api-key.png "Where to find the API key if you lost it")

I'm using [Elementor](https://be.elementor.com/visit/?bta=13962&brand=elementor) as my Wordpress page builder. You can use any page or form builder. This plugin works with any form that has an 'id' attribute.

Head over to your Wordpress website and find the form you'd like to have auto-complete enabled.

Right click the input field and select "Inspect". ***(Skip this step if you know your form ID)*** 

![Inspect the form's code to find the form ID](/images/inspect-form.png "Inspect the form's code to find the form ID")

![Find your Form ID in the Inspect Code window](/images/finding-form-id.png "Find your Form ID in the Inspect Code window")

Now that we have our form ID. Let's set up the plugin.

## Install and Setup for Autocomplete Google Address

Download [Autocomplete Google Address](https://downloads.wordpress.org/plugin/autocomplete-google-address.zip) and head to your Wordpress dashboard.

On your left navigation, go to Plugins -> Add New.

![Go to your Wordpress dashboard](/images/wordpress-plugin.png "Go to your Wordpress dashboard")

Hit "Upload Plugin", choose the .zip file, and click Install.

![Click Upload Plugin, choose your .zip file, and click Install](/images/installing-plugin.png "Click Upload Plugin, choose your .zip file, and click Install")

After you've activated the plugin, see your navigation bar again, and find "Autocomplete".

![Find "Autocomplete" at Wordpress navigation](/images/finding-autocomplete.png "Find 'Autocomplete' at Wordpress navigation")

Add your API Key and Form ID into the fields.

![Add your API key and Form ID](/images/adding-api-key-id.png "Add your API key and Form ID")

Go to your form and begin typing a number.

![Gif video of the final result](/images/autocomplete-result.gif "Gif video of the final result")

And there you go. We have successfully added autocomplete to your Wordpress form!

If this helped, please share this blog! Thanks for reading.
