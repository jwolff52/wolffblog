---
layout: post
title: Introduction to Java Part 1
subtitle: Setting up your Development Environment
published: true
category: Programming
tags: ['draft', 'Java', 'Tutorial', 'IntelliJ']
commentIssueId: 4
---
The goal of this tutorial series is to be an introduction to Java as a programming language. Java was the first language I learned so this tutorial will be designed for the ultimate beginner, though I won't teach you how to use a computer and install programs :wink:.

The first decision you will need to make is what type of editor you want to use, be it generic text editor like [Notepad++](https://notepad-plus-plus.org/) or [Sublime Text](https://www.sublimetext.com/), or an Integrated Development Environment (IDE) like [Eclipse](https://eclipse.org/), [IntelliJ IDEA](https://www.jetbrains.com/idea/), or [Netbeans](https://netbeans.org/). All of these options have syntax highlighting which can make your code more readable turning something like this:
```
public static void main(String[] args) {

}
```
into something like this: 
``` java
public static void main(String[] args) {

}
```
The major difference comes with the IDE's which point out several different types of errors that the text editors do not as well as having the ability to compile, run, and package your code directly inside of the editor instead of from the command line. IDE's are also able to automatically invoke (run) various package managers (Maven, Gradle, etc.) making the tracking of packages, APIs, etc. that you use inside larger projects easier. When I first started with Java I used Netbeans, an open source IDE sponsored by [Oracle](https://www.oracle.com/index.html). It is easy to use, has one of the best built in Swing{% fn %}
