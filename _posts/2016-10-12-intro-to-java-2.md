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

Right-clicking on the `src` directory should bring up a fairly large context menu, hover over `New` and select `package`. A package is an identifier for your project that differentiates it from a different Java project with the same name. You can read more on naming conventions for packages [here]({% link _posts/2016-10-10-naming-packages-in-java.md %}), for now enter `me.[YOURNAME].helloworld` in the dialog box and press "OK". After you have created your package you will see it appear on the left, if you open your project in a file explorer you will notice that under `${PROJECT_ROOT}/src` there is not a directory named `me.[YOURNAME].helloworld`, but just a directory named `me` packages create a directory structure delimited by periods.
<a href="/media/posts/5/04.png"><img class="content-image" src="/media/posts/5/04.png" alt="Directory structure created from package" /></a>
<p class="content-image-description">Figure 4: An example of what your directory structure might look like after creating the package.</p>

Next up you will need to create your first class, right click on the package you just created and select `New > Java Class`. You will be prompted for a name for the class, since this is our starting, or main, class convention is that is it be called `Main.java`, but you can name it whatever you want!<sup><a class="anchor" name="cont-2" href="#fn-2">[2]</a></sup><sup><a class="anchor" name="cont-3" href="#fn-3">[3]</a></sup> After that you should end up with a window looking similar to the one below. On line 1 we have our package declaration, this tells Java what namespace our file is in as well as how to get to files that are not directly imported (we will go over imports in a later tutorial). On lines 3 through 5 we have a multi-line comment, these can be used to add explanation to what a class, method, etc. does or, in this case since line 3 has two \*'s this is interpreted as JavaDoc which can be generated and shipped along side your code to make using a library easier, we will go over JavaDoc more in a seprate tutorial. Java also has single-line comments delimited by two forward slashes. Below are a couple examples of comments in Java
```java
/*
 * This is a multi-line comment, we can talk about a lot of stuff in these.
 */

// This is a single-line comment

/**
 * If we add a second asterisk on the first line of this comment this
 * becomes a JavaDoc comment which support HTML tags and can be generated
 * and shipped along side yor library!
 */
public static void main(String[] /*arguments*/ args) { // We can use multi-line comments in the middle of code to test renaming a variable, etc. Single line comments can also be appended to the end of a line of code!
```
As you can see comments are pretty versatile and should be used frequently especially on some of you stranger lines or blocks of code. Finally on line 6 we have our class declaration, top-level classes should almost always be defined as `public`, but in certain edge cases you can leave off the `public` modifier making this class ["package private"](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html "More info on access control in Java"). Next we have the keyword `class` which defines this file as a java class, this could also be `interface` which we will talk about more in a later tutorial. Next we have our class name, this should always match exactly to the name of the file, and finally we have an open curly brace (`{`) this defines the start of a block of code, it could also be on the next line and is matched to a close curly brace (`}`).
<a href="/media/posts/5/05.png"><img class="content-image" src="/media/posts/5/05.png" alt="IntelliJ after creating our main class" /></a>

Since there is no true convention for what our main class should be called we need to create our first method which has a specific signature that tells the Java Compiler to start with it. Inside the curly braces after the name of your class isert the following line of code.
```java
public static void main(String[] args) {
```
Hitting enter will automatically create the close curly brace and indent the next line. Here again we have the `public` modifier for our method which means it is accessible to the world which is required for the Java Runtime Environment (JRE) to be able to run our code, next we have the `static` modifier which means that we don't need an instance of our class to call this method, this modifier is optional. Next up is the `void` modifier, this is the return type of our method and should always come directly before the method name. A return type can be any of the primitive types (`int`, `double`, `char`, etc.), an instance of a class defined by Java itself (`String`, `JPanel`, etc.), a instance of a class defined by this project, or another project this project borrows from (for example our `Main` class) or an array version of any of the above (by appending `[]` to the end, e.g. `int[]`). If we define a return type other than `void` the method **must** have a return statement that returns an instance of that type, or (if the return type is not a primitive type) `null`.

Next up we have the name of our method. Methods, as well as variables that are not constants, should follow the same CamelCase naming scheme as class names **except** the first character should be lower case (e.g. `methodName` not `MethodName` or `Methodname` or `mEthODnAMe`). Inside the parentheses we define our parameters to be passed to the method, in the case of our main method we have a single parameter that is an array of `String`'s, the name for this array is `args`. This array is populated by a space-deliminated list of arguments given on the command line when you run your project (more on this in the next section!) The name of this `String` array, in this case `args`, is the only thing that can be changed about our main methods signature, you can make it whatever you want, but you should stick to some form of the word "arguments" to make you variable name as self-explanatory as possible.

<div class="series-nav clearfix">
  <a class="prev-post btn btn-default" href="{% link _posts/2016-10-04-intro-to-java-1.md %}">Previous</a>
  {% comment %}<a class="next-post btn btn-default" href="{% link _posts/2016-10-12-intro-to-java-3.md %}">Next</a>{% endcomment %}
</div>

<h4>Footnotes</h4>
<ol class="footnotes">
  <li>If you are using IntelliJ IDEA and do not see as many options avaliable on this screen it is because you are using the free version, we won't be using any of these so not to worry! <a class="anchor" name="fn-1" href="#cont-1">↵</a></li>
  <li>You don't need to put the `.java` extension in this box, it will be added automatically. <a class="anchor" name="fn-2" href="#cont-2">↵</a></li>
  <li>Class names in java should always be [CamelCase](https://en.wikipedia.org/wiki/Camel_case) (e.g. `MainClass` not `mainClass` or `Mainclass` or `MaIncLaSS` <a class="anchor" name="fn-3" href="#cont-3">↵</a></li>
</ol>
