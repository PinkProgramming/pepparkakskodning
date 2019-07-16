 # Semmelkodning
 
 `Have Semmel-buns and bake prebuilt mini-quiz into an event page`
 
 ![Semmel-bun](https://cdn.glitch.com/project-avatar/17421bd4-ed96-4602-b1a9-69c1558224c2.png)

This small tutorial is made to be a fun way to get hands dirty with using bootstrap and adding things to it. The focus is to make custom interactivity using JS (JavaScript). 

Bootstrap is used to get started quick, have a full responsive page to work with. To learn how the web site was set up in its original form, see [pink tutorial](https://www.pinkprogramming.se/sv/blogginlagg/G%C3%B6r-en-snygg-hemsida-utan-att-vara-designer) (Swedish).

## Part 1 - Let's add an interactive component! 

Set up the project by clicking: 

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/remix/pp-semmelkodning)

#### Add the page styling

1. In _index.html_: Copy-paste `<aside>...Hoppas vi ses!...</aside>` to right after `<section id="register">...</section>`.  
2. Change id-value to "quiz", and class-value to "bg-info" (color change)
3. Add a suitable paragraph tag `<p...</p>` after `<h2...</h2>` for description
4. Copy-paste the column `<div class="col-lg-8 mx-auto">...</div>` next to it
5. Change the column sizes (Bootstrap has a maximum of '12') to create a balance between the flowing description and the more boxy quiz-to-come. 

#### Add the quiz

1. We need the code from last workshop [pp-quiz-base](https://glitch.com/edit/#!/pp-quiz-base?path=views/index.html)
Copy the content the .js files into this project. Do it manually or open the console from "Advanced Options" and enter: 
 
$`git clone https://gist.github.com/106f152a16e9eb88cbf247bb2f7a14b9.git`

$`mv 106f152a16e9eb88cbf247bb2f7a14b9 js-quiz` (renaming the folder)

$`rm -rf js-quiz/.git` (removing a subfolder we don't need here)

$`refresh` (making the new files appear in glitch)
 
2. At beginning of server.js, add the new folder with `app.use(express.static('js-quiz-base'));` (Unless you put it inside /public/)
3. At the end of index.html, put additional `<script...` for each js-file. 
5. At the beginning of index.html, put additional `<link rel="style..` for css.
6. At beginning of client.js (//step2), replace `document.body = ...` with `var quizDiv = document.getElementById('pp-quiz-base');`
7. Then replace all occurances of "document.body" with "quizDiv". (Hint: select one occurance, press Ctrl+D repeatedly, then paste or type to replace)

-----------------------------------

## Part 2 - Let's improve the quiz! 

#### Adding more questions

The existing code is hard to read and edit, and adding more question will make it worse, unless we first take some measures to reorganize them. 

This part may take some time and struggles, but the result will be code that takes care of any number of questions with the same amount of code! 

1. Write questions in json format. 

2. Add variable "currentQuestion", set to 0 (means 1st in zero-based lists)

3. Make sure it is accessable, before starting to revise createQuestion.

4. Make createQuestion return an object with every html element needed. 

5. Try setting the properties straight just for the 1st question. 

6. When it works, make it into a function called setQuestionProps. It can be called dynamically when the question changes!

7. Repeat 4-6 with createResponse.

8. Challenge: Add answer validation logics! 


HAPPY CODING!
------------------


-----------------------------------



#### _Extra: Bootstrap info_

Bootstrap contains a lot of ready to use CSS, but you don't have to know CSS to use it!

Luckily, Bootstrap's really popular tool to use and there are some good techniques and things to have in mind: 

 - There are _global styles_ for whole pages. On the other hand _Components_ are thought to be a smaller unit of ready-to-use styling.  
 - It's known for its _responsive_ features. Especially "grid" column layout.
 - To use bootstrap _in code_ (not just design tools) there are CSS _classes_ 
 - [about column layout settings](https://getbootstrap.com/docs/4.0/layout/grid/)
 - [about alignment within](https://getbootstrap.com/docs/4.0/utilities/spacing/)
 - [about background color](https://getbootstrap.com/docs/4.0/utilities/colors/)
 - JS is not generally preferred when doing web design


## License

This project was forked from [https://github.com/PinkProgramming/pepparkakskodning](https://github.com/PinkProgramming/pepparkakskodning) and is free to use under Apache 2.0-license. 

The "Creative theme template" is (c) 2013-2015 Iron Summit Media Strategies, LLC. Code

Further modifications and contents are (c) 2017-2018 Pink Programming