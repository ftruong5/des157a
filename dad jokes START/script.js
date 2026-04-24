(function(){
    'use strict'
    console.log('reading JS');

    //Add script here

    //Practice selecting elements

    //1. grab the first section of the page:

    const firstsection = document.querySelector('#firstsection');
    // console.log(firstsection);
    

    //2. Get the first joke
    const firstjoke = document.querySelector('#joke-1');
    // console.log(firstjoke);

    //3. Get the second Joke
    const secondjoke = document.querySelector('#joke-2');
    // console.log(secondjoke);

    //4. Get the question in the third joke
    const thirdQ = document.querySelector('#joke-3 .question');
    // console.log(thirdQ);

    //5. Get the answer in the fourth question
    const fourthA = document.querySelector('#joke-4 .answer');
    // console.log(fourthA);

    //6. Get all the questions in the first section
    const firstQs = document.querySelectorAll('#firstsection .question');
    // console.log(firstQs);

    //7. Get all the answers in the first section
    const firstAs = document.querySelectorAll('#firstsection .answer');
    // console.log(firstAs);

    /* Now that we have access to these elements through the variables that we assigned them to, what can we do with them? */

    // 8. Use the style attribute to set a background color
    firstsection.style.backgroundColor = '#a6f8f9';

    // 9. Use the style attribute to change the font for the first joke
    firstjoke.style.fontFamily = 'arial';

    // 10. Use the style attribute to change the color of the text in joke 2
    secondjoke.style.color = '#ff05bc';

    // 11. Use the style attribute to change the fontsize of the third joke's question
    thirdQ.style.fontSize = '30px';

    //12. Apply a class to the 4th joke answer that is already on the stylesheet
    fourthA.className = 'wiggle-loop';

    //13. Apply style attributes to items in arrays
    firstQs[4].style.color = 'blue';

    //14. Use a loop to add a style attribute to all the elements in an array
    for (let i=0; i<firstQs.length; i++){
        firstQs[i].style.fontFamily = 'arial';
    }

    // Section 2: Practicing with basic event listeners

    // 1. Click the button for question 6 and show the answer.
    const btn6 = document.querySelector('#joke-6-btn');
    btn6.addEventListener('click', function(){
        const btn6Answer = document.querySelector('#joke-6 .answer');
        btn6Answer.className = 'answer';
    });

    // 2. Add an event listener for question 7 and add the wiggle-loop class to the answer
    const button7 = document.querySelector('#joke-7-btn');
    button7.addEventListener('click', function(){
        const button7Ans = document.querySelector('#joke-7 .answer');
        button7Ans.className = 'answer wiggle-loop'; 
    });

    // 3. Add event listeners to jokes 8, 9 & 10 for practice.
    

    // Section 3 - Using loops to create more advanced event handlers

    /* 1. Create a loop that puts an event handler on each button in the third section. When the button is pressed an alert message comes up and says "button pressed" */

    /* 2. You need to know WHICH button was clicked. Pass in the event property to find out which button was clicked */

    /* 3. Now that you know how to identify the button pressed, you have to find the answer associated with that question, so you can show it. This can be done in lots of ways. */

})();