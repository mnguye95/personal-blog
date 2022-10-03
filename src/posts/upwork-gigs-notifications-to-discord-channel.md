---
title: Get Upwork RSS Feed Sent To Discord
slug: upwork-rss-feed-to-discord
excerpt: Be first to apply to Upwork jobs that fit your criteria and expertise.
date: 2022-10-02
author: Michael Nguyen
description: Never miss out on your next job. Get Upwork jobs sent to Discord immediately.
---

Upwork is a great but highly competitive resource for freelancers. To stay ahead, I had to snipe the recent job postings, but who has the time to refresh the feed all day.

I noticed that Upwork had an RSS feed for queries. Since I'm always on discord, there must be a way to get notified. Here's how I did it:

## RSS Feeds on Upwork

Start by signing up for an [Upwork](https://www.upwork.com/) freelancer account.

After you've verified, you should see a search bar that searches for jobs.

In the search bar, we can use this syntax to search keywords we're interested in.

```
title:((JavaScript OR Astro OR NextJS))
```
<br>  

For instance, I want jobs that includes JavaScript, Astro, or NextJS.

On the search form, click on the RSS icon and select RSS. It'll open a new tab of the feed. Save this link for later.

![Upwork RSS Feed Feature](/assets/images/upwork-gigs-notifications-to-discord-channel/rss-feed.png "Upwork RSS Feed Feature")

## Forwarding Discord Automation

To forward RSS items to a discord, we'll be using a free tool called [MonitoRSS](https://monitorss.xyz/).

Assuming that you have a server and channel already set up for notifications, click "Control Panel" and sign in with Discord account.

Then, go back to the homepage and click "Invite Me!".

![Invite the bot to your discord server](/assets/images/upwork-gigs-notifications-to-discord-channel/invite-bot.png "Invite the bot to your discord server")

Then go to Control Panel and you should see your servers. If you don't see your servers, make sure the MonitorRSS bot is in your server's list. Relogging can also fix the issue.

Go to Feeds and add your RSS feed URL and set the channel to where you want notifications.

![Go to Feeds](/assets/images/upwork-gigs-notifications-to-discord-channel/go-to-feed.png "Go to Feeds")

![Add RSS URL to MonitoRSS](/assets/images/upwork-gigs-notifications-to-discord-channel/add-rss-link.png "Add RSS URL to MonitoRSS")

Under Feeds, choose your Feed and click on Message

![Go to Messages under Feeds](/assets/images/upwork-gigs-notifications-to-discord-channel/message-format.png "Go to Messages under Feeds")

Add this template to the Text section and hit Save.

```
Hey!

{title}

{description}

<{link}>
```
<br>  

Scroll down to preview the message and send it to your Discord to make sure it works.

![Preview your message and test](/assets/images/upwork-gigs-notifications-to-discord-channel/preview-and-test.png "Preview your message and test")

## RSS Feed to Discord Channel Works!

![RSS to Discord Successful](/assets/images/upwork-gigs-notifications-to-discord-channel/final-result.png "RSS to Discord Successful")

If this helped you, please share this blog. Thank you for reading!