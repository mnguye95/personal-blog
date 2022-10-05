---
title: "Increase Local Conversions With This Wordpress Plugin"
slug: increase-local-conversions-with-this-wordpress-plugin
excerpt: I added this Wordpress plugin to my client's website and increased conversions by 30%.
date: 2022-09-21
description: I used this one plugin for my local business clients and increased conversions! Powerful and super easy to set up. 
---

I've used WordPress for years for my clients. Along the years, I've bookmarked plugins that increased results for me and my clients. They're simple, powerful, and perfect for your toolkit. Here's one of them:

## Autocompleting Addresses on Forms

[Autocomplete Google Address](https://wordpress.org/plugins/autocomplete-google-address/) is a plugin that auto-completes your user's address input. My clients are mostly local businesses that require a property address to begin their sales process.

As web developers, our responsibility is to increase leads and conversions. To do so, the user experience must be easy enough to view, navigate, and interact. 

By adding an autocomplete feature, it reduces the friction between the user and the conversion process, allowing them fill out our forms with less effort. 

In addition, the submitted data is uniform and clean.

```
3454 sunset cir Florida ❌
450 south main st seatle wa ❌
450 South Main St Seattle, WA 98104 ✅
```
<br>  

With this plugin, we can ensure that state and postal code is included. Without it, we'll need to follow up to clarify or clean the data, costing time.

Adding autocomplete benefits both parties, website and visitors, by reducing friction on both ends.

## Set up Google Maps API and get an API key

Head over to the [Google Maps API console](https://console.cloud.google.com/project/_/google/maps-apis/credentials)

Sign in and create and name your project. If you don't have an organization, you can just leave it blank.

![Create Project in Google API Console](/assets/images/increase-conversions-auto-complete/create-google-console-project.png "Create Project in Google API Console")

Select your project you've just created.

![Select Project in Google API Console](/assets/images/increase-conversions-auto-complete/select-project.png "Select Project in Google API Console")

You should see the API key generated for you immediately. 

Disable "Enable all Google Maps APIs..." and go to the console.

![Retreive Google API Key](/assets/images/increase-conversions-auto-complete/google-api-key.png "Retreive Google API Key")

Under APIs, click 'Places API' and enable. You should see it under "Enabled APIs".

![Enabling Places API](/assets/images/increase-conversions-auto-complete/finding-places-api.png "Enabling Places API")

![Enabled Places API](/assets/images/increase-conversions-auto-complete/places-api-enabled.png "Enabled Places API")

If you lost your API key, it's located under Credentials -> API keys -> "Show Key"

![Where to find the API key if you lost it](/assets/images/increase-conversions-auto-complete/show-api-key.png "Where to find the API key if you lost it")

I'm using [Elementor](https://be.elementor.com/visit/?bta=13962&brand=elementor) as my WordPress page builder. Any page or form builder will work as long as the form has an 'id' attribute.

Head over to your WordPress website and find a form you'd like to have auto-complete enabled.

Right-click the input field and select "Inspect". ***(Skip this step if you know your form ID)*** 

![Inspect the form's code to find the form ID](/assets/images/increase-conversions-auto-complete/inspect-form.png "Inspect the form's code to find the form ID")

![Find your Form ID in the Inspect Code window](/assets/images/increase-conversions-auto-complete/finding-form-id.png "Find your Form ID in the Inspect Code window")

Now that we have our form ID. Let's set up the plugin.

## Install and Setup for Autocomplete Google Address

Download [Autocomplete Google Address](https://downloads.wordpress.org/plugin/autocomplete-google-address.zip) and head to your WordPress dashboard.

On your left navigation, go to Plugins -> Add New.

![Go to your WordPress dashboard](/assets/images/increase-conversions-auto-complete/wordpress-plugin.png "Go to your Wordpress dashboard")

Hit "Upload Plugin", choose the .zip file, and click Install.

![Click Upload Plugin, choose your .zip file, and click Install](/assets/images/increase-conversions-auto-complete/installing-plugin.png "Click Upload Plugin, choose your .zip file, and click Install")

After you've activated the plugin, see your navigation bar again, and find "Autocomplete".

![Find "Autocomplete" at WordPress navigation](/assets/images/increase-conversions-auto-complete/finding-autocomplete.png "Find 'Autocomplete' at Wordpress navigation")

Add your API Key and Form ID into the fields.

![Add your API key and Form ID](/assets/images/increase-conversions-auto-complete/adding-api-key-id.png "Add your API key and Form ID")

Go to your form and begin typing a number.

![GIF video of the final result](/assets/images/increase-conversions-auto-complete/autocomplete-result.gif "GIF video of the final result")

We have successfully added autocomplete to your WordPress form!

If this helped, please share this blog! Thanks for reading.
