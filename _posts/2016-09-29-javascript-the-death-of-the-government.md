---
layout: post
title: "Javascript: The death of the government"
published: true
category: Web Design
tags: [HTML, Javascript]
---

My job is to browse the web. Eight hours a day I sit behind a computer and look for job opportunities for my company. Don't get me wrong my job is great, I am writing this post on my work PC, and I encounter a lot of *really* nicely laid out sites that load wonderfully (excusing the crippling office PC bloat), but there is also a fair share of just plain *ugly* sites, sites that look like ***I*** built them<!--more-->!

The biggest culprit for these 'bad' sites is those belonging to the government for example [sam.gov](https://sam.gov). Take a look at the head, what do you see? That's right! `<script>` tags before our body loads! Now some of these are `async` which (possibly) means they will load after the DOM (I think), but if you pay close attention many of these are for bootstrap and jQuery, the former of which [all but commands you](http://getbootstrap.com/getting-started/#template) to put them just before the closing `<body>` tag!
