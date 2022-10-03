---
title: Forward SMS Message to Discord Using Twilio
slug: forward-sms-message-to-discord-using-twilio
excerpt: Forward SMS messages to any discord channel using webhooks and Twilio.
date: 2022-09-22
description: Receive text messages into any channel! Add value to your Discord server with valuable notifications to your members.
---

## Step 1: Create a Discord Channel

Start by click on this icon on your Discord app.
![Create Discord Server Button](/assets/images/forward-sms-message-to-discord-channel-using-twilio-functions/create-server-button.jpg "Create Discord Server Button")
Go through the steps and name your server.

Next, find a channel you would like to send messages to. Click on this icon to "Edit Channel".

![Text Channel Settings](/assets/images/forward-sms-message-to-discord-channel-using-twilio-functions/discord-server-settings.jpg "Text Channel Settings")

In "Integrations", create a webhook.

![Create a Webhook Bot](/assets/images/forward-sms-message-to-discord-channel-using-twilio-functions/create-webhook-button.png "Create a Webhook Bot")

Name the bot, hit save, and save the webhook URL for later.

![Save Webhook URL](/assets/images/forward-sms-message-to-discord-channel-using-twilio-functions/copy-webhook.jpg "Save Webhook URL")

## Step 2: Twilio Setup

[Create an account](https://www.twilio.com/referral/hGuW9u) or sign into Twilio, and [deploy this application](https://www.twilio.com/code-exchange/sms-forwarding-multiple-numbers).

Once deployed, click "Go to live application", and click the "Edit this application" button.

Under Settings -> Environment Variables, add a new key named **DISCORD_WEBHOOK_URL** and paste in your webhook.

![Add Discord Webhook URL as Environment Variable](/assets/images/forward-sms-message-to-discord-channel-using-twilio-functions/env-vars.jpg "Add Discord Webhook URL as Environment Variable")

Under Settings -> Dependencies, add module **`got 11.8.3`** _(Be sure to use this version!)_

![Add dependency to node environment](/assets/images/forward-sms-message-to-discord-channel-using-twilio-functions/adding-got-dependency.jpg "Add dependency to node environment")

Go to Functions and select your function file. 

![Add Discord Webhook URL as Environment Variable](/assets/images/forward-sms-message-to-discord-channel-using-twilio-functions/replace-code-before.jpg "Add Discord Webhook URL as Environment Variable")

Delete the boilerplate code and add the follow snippet:

```javascript
// Make sure the function is async!
exports.handler = async function (context, event, callback) {
    const twiml = new Twilio.twiml.MessagingResponse();
    const { default: got } = await import('got');
    const url = context.DISCORD_WEBHOOK_URL;

    const options = {
        json: {
        username: "Your Bot Name",
        avatar_url: "",
        content: `${event.Body}`
        }
    }

    got.post(url, options)
        .then(function(response) {
        console.log(response.body)
    });
};
```
<br>  

Now, click Save and then Deploy All.

![Add Code Snippet to Function](/assets/images/forward-sms-message-to-discord-channel-using-twilio-functions/replace-code-after.png "Add Code Snippet to Function")

## Step 3: Deploy and Test

Try sending a text message to your Twilio phone number and you should receive the text in your Discord channel.

And there you go, you have successfully forwarded SMS messages to a Discord channel!

<!-- ### Tip: If you can't find your app after signing up

Once you've signed in, you should see the dashboard. Click on the Develop tab to see your latest application. 

![Twilio Dashboard](/assets/images/forward-sms-message-to-discord-channel-using-twilio-functions/twilio-dashboard.jpg "Twilio Dashboard")

Next, click on Functions and Assets -> Services, and click on your application to edit.

![Twilio Services Tab](/assets/images/forward-sms-message-to-discord-channel-using-twilio-functions/services.jpg "Twilio Services Tab") -->

