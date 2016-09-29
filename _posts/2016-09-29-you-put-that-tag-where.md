---
layout: post
title: "You put that tag where?"
published: true
category: Web Design
tags: [HTML, Javascript]
commentissueID: 2
---

My job is to browse the web. Eight hours a day I sit behind a computer and look for job opportunities for my company. Don't get me wrong my job is great, I am writing this post on my work PC, and I encounter a lot of *really* nicely laid out sites that load wonderfully (excusing the crippling office PC bloat), but there is also a fair share of just plain *ugly* sites, sites that look like ***I*** built them<!--more-->!

The biggest culprit for these 'bad' sites is those belonging to the government, for example [sam.gov](https://sam.gov). Take a look at the `<head>` area, what do you see? That's right! `<script>` tags before our body loads! Now some of these are `async` which (possibly) means they will load after the DOM (I think), but if you pay close attention a few of these are for Bootstrap and jQuery, the former of which [all but commands you](http://getbootstrap.com/getting-started/#template) to put them just before the closing `<body>` tag!

So we have scripts in the `<head>` area let's take a look at the ones that aren't related to Bootstrap and jQuery. Starting with the easy ones, the ones that are loaded asyncronously. In this case there are three, all of which are analytics scripts. Two for Google, SSL and normal, and one that appears to be government-specific analytics. As I mentioned previously I believe these will load after the DOM, but I am not 100% as to that fact and I believe that if any other scriptsar e called from within these files they will not be asyncronous unless specified. Again this is just my basic understanding and could be VERY wrong, bit I am fairly surethis  is the case.

Next up we'll take a look at the [Youtube Player API script]({{ site.baseurl }}/js/youtube_player_api.exploded.js "Unminified Script"). To start with this script seems utterly pointless, I don's see a single youtube video on this page, but let's give them the benefit of the doubt and say that they are using a templating engine and that *at least one* of the pages has a youtube video (I have not visited every page on this site). Regardless, we are loading the script so what kind of preformance hit are we taking here? According to Firefox Developer Console we don't even load this script for security reasons so there is no real big hit here. Honestly I am just confused as to why this declaration exists.

Going down the list next up we have a couple of embedded scripts one of which defines a bunch of JS dependencies and the next uses [eXo Platform](https://www.exoplatform.com/) which is apparently a social media intranet platform? Not sure what the use case here is, but I can't find any other reference to the platform on the homepage so who even knows what this script is used for. Next up is another embedded script that appears to be related to [508 Compliance](http://www.508checker.com/what-is-508-compliance), this script has to happen before the browser calls `window.onload` ~~so this is required to be in the `<head>`~~ window.onload is called after *every* resource on the page is loaded<sup> [source](http://stackoverflow.com/a/3520803)</sup> so this can be defined at the end of the body as well.

This is just the beginning as well, there are script tags all throughout the `<body` most of which could probably be moved to the end of the file! In it's current state the site takes approximately three seconds to display it's first content and almost *12 seconds* to finish loading completely (though the latter number probably can't really be changed all that much). While moving these scripts probably would not change all that much, shaving off a second to first content at most, this isn't even the worst culprit, just the one I chose off the top of my head
