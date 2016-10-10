---
layout: post
title: 'Naming Packages in Java'
subtitle: 
contentImage: 
published: true
category: Programming
tags: ['Java', 'Conventions']
commentIssueId: 5
---
According to the [oracle docs](https://docs.oracle.com/javase/tutorial/java/package/namingpkgs.html) you should name your package after the inverse of your domain, so my projects would be `me.jameswolff.[PROJECTNAME]`, but if you check my [GitHub](https://github.com/jwolff52) you will notice that that is not the case for most of my projects, that is because just by having an account on GitHub I "own" a top-level domain, being `jwolff52.github.io`<sup><a class="anchor" name="cont-1" href="#fn-1">[1]</a></sup> so I will, for the forseable future, have "ownership" of the package `io.github.jwolff52.[PROJECTNAME]`<!--more-->.

Not everyone, of course, has a GitHub account, so what are some alternatives that you could use? Well if your project is hosted on [SourceForge](http://sourceforge.net) you could use `net.sf.[PROJECTNAME]`. If you are not hosting your code anywhere, or maybe just hosting on dropbox or a similar service you could always just use your email, for example a package based on my personame email would be `james_dot_wolff_0_at_gmail_dot_com.[PROJECTNAME]`, it may not be pretty, but *you* are the only one that has your email so there is an extremely high chance that you will not conflict with anyone's projects!

You may be asking yourself, is all of this really all that necessary anyway? Realistically probably not, if you don't own your own domain, or are not releasing your project somewhere for others to download there is a high chance you will never run into the issue of naming your package `me.[YOURNAME].[PROJECTNAME]` even if you don't own the domain, but there is always a chance. The easiest solution in my opinion is to [signup for GitHub], it's free, you never have to worry about losing your account and you don't even have to use the service for your account to stay active.

<h4>Footnotes</h4>
<ol class="footnotes">
  <li>and I will "own" that domain unless GitHub goes out of business or I change my username (at which point I would get another domain with my new username) <a class="anchor" name="fn-1" href="#cont-1">↵</a></li>
</ol>
