# Swe-Hacks 2018: colorEval
## Determining Colorblind Accessibility of Web Pages
### By Nicole Riley, Lior Levy, Sai Harshita Neti, Harshitha Akkaraju

### _Winner in the Best Implementation Category_

There are many tools that exist on the internet today for web developers to determine whether their websites are accessible to colorblind people. However, there are not as many tools to analyze the accessibility of webpages by comparing color schemes.

The goal of this project were as follows:
* For non-developer users: to enable them to explore whether webpages are accessible according to the Web Content Accessibility Guidelines (specifically WCAG 2.0).
* For developers: to provide them with a tool that evaluates the accessibility of their webpages.

We look at two different levels of WCAG guidelines
* Level AA: Requires a contrast ratio greater than or equal to 4.5:1 for normal text and 3:1 for large text
* Level AAA: Requires a contrast ratio greater than or equal to  7:1 for normal text and 4.5:1 for large text

colorEval allows the user to enter in a url for a website they are interested in analyzing. Once they hit submit, we go through the process of creating a screenshot of the image, uploading the image, analyzing the most common colors in the image and determining whether the contrast between these most prominent colors is accessible.

For the scope of this hackathon, we are starting by displaying information based on different guidelines on whether or not the page is accessible under different guidelines. In the future, we could possibly improve the tool by suggesting more contrasting color schemes for developers. For our non-developer audiences, we could improve the tool by giving a more informative breakdown of the current state of the webpage. 

We hope that our application helps others think about colorblindness when developing for the web.

Please use the following links to explore our tool:
* https://www.facebook.com/
* https://www.washington.edu/
* https://loop.ableton.com/2017/

Do checkout colorEval at: https://akkarh.github.io/akkarh.colorEval/

### APIs Used
* [Image color summarizer](http://mkweb.bcgsc.ca/color-summarizer/)
* [WebAIM](https://webaim.org/resources/contrastchecker/)
