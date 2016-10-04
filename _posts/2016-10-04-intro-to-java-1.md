---
layout: post
title: Introduction to Java Part 1
subtitle: Setting up your Development Environment
published: true
category: Programming
tags: ['Java', 'Tutorial']
commentIssueId: 4
---
The goal of this tutorial series is to be an introduction to Java as a programming language. Java was the first language I learned so this tutorial will be designed for the ultimate beginner, though I won't teach you how to use a computer and install programs :wink:<!--more-->.

To begin with you will need to go the the [JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) download page and choose the version that is appropriate for your OS, once you have that installed you should be ready to move on<a class="anchor" name="cont-1" href="#fn-1"><sup>[1]</sup></a>.

Next you will need to decide what type of editor you want to use, be it a generic text editor like [Notepad++](https://notepad-plus-plus.org/) or [Sublime Text](https://www.sublimetext.com/), or an Integrated Development Environment (IDE) like [Eclipse](https://eclipse.org/), [IntelliJ IDEA](https://www.jetbrains.com/idea/), or [Netbeans](https://netbeans.org/). All of these options have syntax highlighting which can make your code more readable turning something like this:
```
public static void main(String[] args) {

}
```
into something like this: 
``` java
public static void main(String[] args) {

}
```
The major difference that comes with IDE's is that they point out several different types of errors that the text editors do not as well as having the ability to compile, run, and package your code directly inside of the editor instead of from the command line. IDE's are also able to automatically invoke (run) various package managers (Maven, Gradle, etc.) making the tracking of packages, APIs, etc. that you use inside larger projects easier. When I first started with Java I used Netbeans, an open source IDE sponsored by [Oracle](https://www.oracle.com/index.html). It is easy to use and has one of the best built in graphical Swing<a class="anchor" name="cont-2" href="#fn-2"><sup>[2]</sup></a> editors. I then moved to Eclipse which I soon dropped in favor of IntelliJ IDEA, mostly because it is easier to customize IDEAs user interface. The editor you choose is all down to personal preference, there really is no reason to choose one over another, especially when you are just beginning and writing simple programs. For the purposes of this series I will be using IDEA and a lot of the IDE functions (creating projects, building projects, etc.) will be from IDEA.

At the end of each tutorial I will post a link to a `.zip` of our source code so far or if you know how to use git or [want to learn](https://try.github.io/levels/1/challenges/1) you could also just [fork the repository on github](https://github.com/jwolff52/intro-to-java)!

That's it! Once you have the JDK and your IDE of choice installed you are all set! Use the navigation buttons below to go to the next post in this tutorial and if you have any questions use the comments section below!  
<!--<div class="series-nav clearfix">
  <a class="next-post btn btn-default" href="{% link _posts/2016-10-12-intro-to-java-2.md %}">Next</a>
</div>-->

<h4>Footnotes</h4>
<ol class="footnotes">
  <li>Some operating systems may require you to restart your computer before you are able to use the JDK <a class="anchor" name="fn-1" href="#cont-1">↵</a></li>
  <li>Swing is a graphical interface for Java used to build Desktop applications. It will be discussed more in a later tutorial. <a class="anchor" name="fn-2" href="#cont-2">↵</a></li>
</ol>
