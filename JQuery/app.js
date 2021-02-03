$(document).ready(function () {
    //  1. Make a button appear on the page when it's first loaded. The button cannot already be in your html. When the button is clicked, you should display an Alert box with any (nice) message.
    const $newButton = $('<button id="newBtn">Submit</button>');

    // 1. append new button to body
    // $('body').append($newButton);

    $('#btnSubmit').click(function() {
        // 1. alert('nice message');

        // 2. When the button is clicked, display an alert with the message that is typed in the text box.
        alert($('#txtBox').val());
    })

    // 3. Create a div in HTML. Without using CSS :hover, make the div change to a different background color when your mouse hovers over it. The div should return to its original color when the mouse exits the div.
    let $myDiv = $('#myDiv');

    $myDiv.hover(function() {
        $myDiv.css({'background-color': 'red'});        
    }, function() {
        $myDiv.css({'background-color': 'transparent'}); 
    });
   
    //  4. Put some text in a paragraph
    const $newParagraph = $('<p>' + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ' +
    'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint ' +
    'occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' + '</p>')
    $('body').append($newParagraph);

// 4. Make it where when you click on the paragraph, the color of the text switches to red
$newParagraph.click(function() {
    // $newParagraph.css("color", "red");

    // try to rewrite your code to make it switch to a random color each click (you don't have to show the code for just red once you get random working).
    let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        $newParagraph.css('color', color);
})

// 5. Add a button and an empty div. When the button is clicked, add a span that contains your name to the empty div.
const $nameBtn = $('<button id="nameBtn">Name</button>');
$('body').append($nameBtn);

const $nameDiv = $('<div id="nameDiv"></div>');
$('body').append($nameDiv);

$nameBtn.click(function() {
    const $nameSpan = $('<span>Shannon</span>');
    $nameDiv.append($nameSpan);
})

// 6. In JavaScript, create an array containing the names of your friends. When the button is clicked, add each friend's name as an li to the ul on the page.
let friendArray = ['Lizzo', 'Tori', 'Jack', 'Kirk', 'Rachel', 'Jay', 'Ida', 'Sam', 'Kelley', 'Robyn'];
    let counter = 0;

    let $friendBtn = $('#friend-btn');
    let $friendUl = $('#friend-list');

    // When the button is clicked, add each friend's name as an li to the ul on the page.
    $friendBtn.click(function() {
        if (counter < friendArray.length) {
            let $friendLi = $('<li>' + friendArray[counter] + '</li>');
            $friendUl.append($friendLi);                                  
            counter++;
        };
        
    });    

});
