---
layout: post
title: Introduction to Java Part 2
subtitle: Hello World!
published: true
category: Programming
tags: ['draft', 'Java', 'Tutorial']
commentIssueId: 6
---
Now that you have your development environment set up and ready to go it is time to write your first program! When you first open up IDEA you will be greeted with a window like the one below.
<a href="/media/posts/5/01.jpg"><img class="content-image" src="/media/posts/5/01.jpg" alt="Screen upon opening IDEA" /></a>
<p class="content-image-description">Figure 1: Screen upon opening IDEA</p>

Click "Create New Project" and a new dialog will appear. Ensure that on the left you have "Java" selected then in the top right you should see a "New..." button, click that then select "JDK". Navigate to the root directory of the JDK you installed in the last step, on windows it should be something like "C:\Program Files\Java\jdk1.8.x_xxx", if you aren't sure where it installed on your OS [a quick google search](https://www.google.com/search?q=where+did+the+JDK+install) should help you out, if you still aren't sure leave a comment below! Once you have selected that path it should populate and auto select in the dropdown next to the "New..." button. Click the `Next` button at the bottom twice to continue.
<a href="/media/posts/5/02.jpg"><img class="content-image" src="/media/posts/5/02.jpg" alt="Screen upon opening IDEA" /></a>
<p class="content-image-description">Figure 2: Project dir with "Java" selected and JDK added<a class="anchor" name="cont-1" href="#fn-1"><sup>[1]</sup></a>.</p>

In the "Project Name" section enter "Hello World", clicking "Finish" at the bottom will prompt if you want to create the directory, click "Ok". This will cause a few things to happen, but at the end you should have a window that looks similar to the one in below. On the left side of the window is the project browser, clicking the `▶` will reveal two directories and a file. The `.idea` directory is where all of the IntelliJ-specific configuration for this project is stored such as what JDK to use and how to run the project. The `src` directory is where we will put all of our source code, it's folder is blue because it is defined in the project files as a source directory. Finally we have a `.iml` file, this is another IntelliJ configuration file.
<a href="/media/posts/5/03.png"><img class="content-image" src="/media/posts/5/03.png" alt="Window after creating a project" /></a>
<p class="content-image-description">Figure 3: After creating a project it will be opened up with a window looking similar to this one.</p>

Right-clicking on the `src` directory should bring up a fairly large context menu, hover over `New` and select `package`. A package is an identifier for your project that differentiates it from a different Java project with the same name. You can read more on naming conventions for packages [here]({% link _posts/2016-10-10-naming-packages-in-java.md %}), for now enter `me.[YOURNAME].helloworld`.

<div class="series-nav clearfix">
  <a class="prev-post btn btn-default" href="{% link _posts/2016-10-04-intro-to-java-1.md %}">Previous</a>
  <!--<a class="next-post btn btn-default" href="{% link _posts/2016-10-12-intro-to-java-3.md %}">Next</a>-->
</div>

<h4>Footnotes</h4>
<ol class="footnotes">
  <li>If you are using IntelliJ IDEA and do not see as many options avaliable on this screen it is because you are using the free version, we won't be using any of these so not to worry! <a class="anchor" name="fn-1" href="#cont-1">↵</a></li>
</ol>
