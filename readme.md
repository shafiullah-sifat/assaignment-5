1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans1: we use getElementById for get an single element of an id which is declare in html each id is different.

we use getElemensByClassName use it to get multiple elements by class name.It gives us a html collection.

we use querySelector when we want the first element that matches a CSS selector.

2.How do you create and insert a new element into the DOM?

Ans2: we can create a new element by using "document.createElement()",then we can add text or other attributes and insert using methode like appenchild,append etc.I also use it on my assaignment.

3.What is Event Bubbling and how does it work?

Ans3: Event Bubbling is when an event on a child element automatically moves up to its parent elements.Event starts from the innermost element and moves outward to upwords. It is useful when we want parent elements to react to child actions.Can be stopped using event.stopPropagation().

4.What is Event Delegation in JavaScript? Why is it useful?

Ans4: Event Delegation is a technique where instead of attaching an event listener to every child element, you attach it to a parent element and handle events based on the event’s target.
We don’t need one listener per element; attach to the parent once.Works for elements added after page load.


5.What is the difference between preventDefault() and stopPropagation() methods?

Ans5:
we use preventDefault() to stop things like links navigating or forms submitting and we use stopPropagation() to stop an event from reaching parent elements.
