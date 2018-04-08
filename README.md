# Swe-Hacks 2018: colorEval
## Determining Colorblind Accessibility of Web Pages
### By Nicole Riley, Lior Levi, Sai Harshita Neti, Harshitha Akkaraju

There are many tools that exist on the internet today for web developers to determine whether their websites are accessible to colorblind people. However, we were not able to find any websites that analyzed the accessibility of other websites by comparing color schemes.

The goal of this project was to allow people outside of developers to determine whether webpages are accessible according to the Web Content Accessibility Guidelines (specifically WCAG 2.0).

We look at two different levels AA (which requires a contrast ratio greater than or equal to 4.5:1 for normal text and 3:1 for large text) and Level AAA (which requires a contrast ratio greater than or equal to  7:1 for normal text and 4.5:1 for large text).

In this application, a user enters in the url for a website they are interested in analyzing and presses submit. Then we go through the process of creating a screenshot of the image, uploading the image, analyzing the most common colors in the image and determining whether the contrast between these most prominent colors is accessible.

We are starting by displaying information based on different guidelines on whether or not the page is accessible under different guidelines. The goal would be possibly in the future to suggest more contrasting color schemes based on the output. We hope that our application helps others think about colorblindness when accessing a variety of websites.
